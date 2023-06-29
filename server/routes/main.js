const sequelize = require("sequelize");
const express = require("express");
const router = express.Router();
const { Op } = require("sequelize");
const {Post, Veterinarian,Hospital,Comment, User} = require('../models');
const Sequelize = require("sequelize");

/*
1. post 최신순 4개
2. 댓글 많은 순으로 수의사 상위 탑 4
3. 조회수
4. 오픈된 동물병원 추천
*/
router.get('post',async function(req,res){
    await Post.create({
        title:"제목",
        content:"내용",
        species: "고양이",
        detailSpecies: "노르웨이",
        views:10,
    })
})
router.get("/user",async function(req,res){
    await User.create({
        name: "닉네임 2",
        kakaoId:"1234543",
        provider :"kakao",
        profile: "slkdjflskdjflksdjlfkj.png",
    });
/*
    await User.create({
        name: "닉네임 2",
        kakaoId:"1234543",
        provider :"kakao",
        profile: "slkdjflskdjflksdjlfkj",
    });
    await User.create({
        name: "닉네임 3",
        kakaoId:"1234543",
        provider :"kakao",
        profile: "slkdjflskdjflksdjlfkj",
    });

    await User.create({
        name: "닉네임 4",
        kakaoId:"1234543",
        provider :"kakao",
        profile: "slkdjflskdjflksdjlfkj",
    });*/
    console.log("유저 등록")
    //return render("유저");
});

router.get("/post",async function(req,res){
    await Post.create({
        title:"제목 1",
        content:"글 내용",
        tagFirst: "태그 1",
        tagSecond: "태그 2",
        tagThird: "태그 3",
        species: "종",
        detailSpecies: "입력받은 세부 종",
        views: 5,
        UserId:"1",
    });
    await Comment.create({
        content:"댓글 내용",
        UserId:"1",
        PostId:"1",

    })
    await Comment.create({
        content:"댓글내용이에요",
        VeterinarianId:"1",
        PostId:"1",

    })/*
    await Post.create({
        title:"제목 1",
        content:"글 내용",
        tagFirst: "태그 1",
        tagSecond: "태그 2",
        tagThird: "태그 3",
        species: "종",
        detailSpecies: "입력받은 세부 종",
        views: 200,
        UserId:"2",
    });
    await Post.create({
        title:"제목 1",
        content:"글 내용",
        tagFirst: "태그 1",
        tagSecond: "태그 2",
        tagThird: "태그 3",
        species: "종",
        detailSpecies: "입력받은 세부 종",
        views: 598,
        UserId:"3",
    });
    await Post.create({
        title:"제목 1",
        content:"글 내용",
        tagFirst: "태그 1",
        tagSecond: "태그 2",
        tagThird: "태그 3",
        species: "종",
        detailSpecies: "입력받은 세부 종",
        views: 509,
        VeterinarianId:"1",
    });*/

})
router.get("/vet",async function(req,res){
    await Veterinarian.create({
        name: "수의사 1",
        kakaoId:"1234543",
        provider :"kakao",
        profile:"alsdjhf;alks",
        allowed:true})
    /*await Veterinarian.create({
        name: "수의사 2",
        kakaoId:"1234543",
        provider :"kakao",
        profile:"alsdjhf;alks",
        allowed:true})
    await Veterinarian.create({
        name: "수의사 3",
        kakaoId:"1234543",
        provider :"kakao",
        profile:"alsdjhf;alks",
        allowed:true})
    await Veterinarian.create({
        name: "수의사 4",
        kakaoId:"1234543",
        provider :"kakao",
        profile:"alsdjhf;alks",
        allowed:true})*/})

router.get("/",async function(req,res){
    const body = req.body;
    const recentPost = await Post.findAll({ //최근 게시물
        order: [['createdAt', 'DESC']], // createdAt 필드를 기준으로 내림차순 정렬
        limit: 4 // 최대 5개의 데이터 가져오기
    });
    console.log(recentPost);
    const topVeterinarian = await Veterinarian.findAll({ //댓글많은 수의사 순
        include: [{
            model: Comment,
            attributes: ['id'], // Comment 테이블의 id 속성만 가져옴
            duplicating: false // 중복된 User 데이터는 가져오지 않음
        }],
        order: [[sequelize.literal('COUNT(Comments.id)'), 'DESC']], // Comment 개수를 기준으로 내림차순 정렬
        group: ['Veterinarian.id'], // User id를 기준으로 그룹화
        limit: 4 // 최대 5개의 User 데이터 가져오기
    });
    console.log(topVeterinarian);
    const currentDate = new Date();
    const oneDayAgo = new Date(currentDate.getTime() - (24 * 60 * 60 * 1000));

    const veiwsTop = await Post.findAll({ //하루동안 조회수 많은 순
        where: {
            createdAt: {
                [Op.gte]: oneDayAgo
            }
        },
        order: [['views', 'DESC']],
        limit: 4
    }).then(posts => {
        // 가져온 데이터 처리
        console.log(posts);
    }).catch(err => {
        // 오류 처리
        console.error(err);
    });
    console.log(veiwsTop);
    // 현재 시간 구하기
    const currentHour = new Date().getHours();
    const currentTime = currentHour * 100; // 24시간 형식을 2400 형식으로 변환
    let state;
    const topHospital=Hospital.findAll({
        where: {
            openHour: {
                [Op.lte]: currentTime
            },
            closedHour: {
                [Op.gte]: currentTime
            }
        },
        limit:4
    }).then(hospital => {
        if (hospital) {
            console.log('현재 시간에 병원이 영업 중입니다.');
            state = "open"
        } else {
            console.log('현재 시간에 병원은 영업 종료되었습니다.');
            state = "closed"
        }
    }).catch(err => {
        // 오류 처리
        console.error(err);
    });
    console.log(topHospital);

    JSON.stringify(recentPost,topVeterinarian,veiwsTop);
    console.log({newPost:recentPost},{topVeterinarian:topVeterinarian},{veiwsTop:veiwsTop})
    //res.json(newPost:{})

    return res.json({newPost:recentPost,topVeterinarian:topVeterinarian,veiwsTop:veiwsTop});
})
    module.exports = router;