const sequelize = require("sequelize");
const express = require("express");
const router = express.Router();
const { Op, where} = require("sequelize");
const {Post, Veterinarian,Hospital,Comment, User} = require('../models');
const Sequelize = require("sequelize");
//list
router.get('/',async function(req,res){
    //list 형식으로 정보 띄워줌
    const posts = await Post.findAll({
        raw:true,
        include:[
            {
                model:User,
                attributes:["profile","id"]
            },
            {
                model:Veterinarian,
                attributes:["profile","id"]
            }
        ]
    });
    posts.forEach((obj) => {
        obj.profile = obj["User.profile"];
        obj.userId = obj["User.id"];
        delete obj["User.priofile"];
        delete obj["User.id"]
        obj.profile = obj["Veterinarian.profile"];
        obj.userId = obj["Veterinarian.id"];
        delete obj["Veterinarian.priofile"];
        delete obj["Veterinarian.id"]
    });

    console.log({posts:posts});
    return res.json({posts:posts});
});
//상세보기
router.get('/:id',async function(req,res){
    //list 형식으로 정보 띄워줌

    const post = await Post.findAll({
        raw:true,
        where:{
            id:req.params.id,
        },
        include:[
            {
                model:User,
                attributes:["profile","id"]
            },
            {
                model:Veterinarian,
                attributes:["profile","id"]
            }
        ]
    });
    post.forEach((obj) => {
        obj.profile = obj["User.profile"];
        obj.userId = obj["User.id"];
        delete obj["User.profile"];
        delete obj["User.id"]
        obj.profile = obj["Veterinarian.profile"];
        obj.userId = obj["Veterinarian.id"];
        delete obj["Veterinarian.priofile"];
        delete obj["Veterinarian.id"]
    });

    const comment=await Comment.findAll({
        raw:true,
        where:{
            PostId:{ [Op.eq]: req.params.id },
        },
        include:[
            {
                model:User,
                attributes:["profile","id"]
            },
            {
                model:Veterinarian,
                attributes:["profile","id"]
            }
        ]
    })

    JSON.stringify(comment);

    console.log({posts:post[0],comments:comment});
    return res.json({posts:post[0],comments:comment});
})
//글 쓰기
router.post('/edit',async function(req,res) {
    const body = req.body;
    let relatedTableId,tableName;
    switch (req.body.type){
        case 'user':
            relatedTableId = "UserId";
            tableName = "User;"
            break;
        case 'vet':
            relatedTableId = "VeterinarianId"
            tableName = "Veterinarian";
            break;
    }
    const post = await Post.create({
        title: body.title,
        content: body.content,
        tagFirst: body.tagFirst,
        tagSecond: body.tagSecond,
        tagThird: body.tagThird,
        pecies: body.pecies,
        detailSpecies: body.detailSpecies,
        [relatedTableId]:body.userId,
        type: body.type,//vat, user
    })
    const newPost = await Post.findAll({
        where:{
            id:post.id
        },
        include:[
            {
                model:User,
                attributes:["name","profile","id"]
            },
            {
                model:Veterinarian,
                attributes:["profile","id"]
            }
        ]
    })
    newPost.forEach((obj) => {
        obj.name = obj["User.name"];
        obj.profile = obj["User.profile"];
        obj.id = obj["User.id"];
        delete obj["User.profile"];
        delete obj["User.id"];
        delete obj["User.name"];
        obj.name = obj["Veterinarian.name"];
        obj.profile = obj["Veterinarian.profile"];
        obj.id = obj["Veterinarian.id"];
        delete obj["Veterinarian.profile"];
        delete obj["Veterinarian.id"];
        delete obj["Veterinarian.name"];

    });
    res.json({post:newPost[0]});
})

//수정하기
router.post('/edit/:id',async function(req,res) {
    const body = req.body;
    const post = await Post.update({
        title: body.title,
        content: body.content,
        tagFirst: body.tagFirst,
        tagSecond: body.tagSecond,
        tagThird: body.tagThird,
        pecies: body.pecies,
        detailSpecies: body.detailSpecies,
    },{
        where:{
            id: { [Op.eq]: req.params.id },
        }
    })
    const nowPost = await Post.findAll({
        where:{
            id:post.id
        },
        include:[
            {
                model:User,
                attributes:["name","profile","id"]
            },
            {
                model:Veterinarian,
                attributes:["profile","id"]
            }
        ]
    })
    nowPost.forEach((obj) => {
        obj.name = obj["User.name"];
        obj.profile = obj["User.profile"];
        obj.id = obj["User.id"];
        delete obj["User.profile"];
        delete obj["User.id"];
        delete obj["User.name"];
        obj.name = obj["Veterinarian.name"];
        obj.profile = obj["Veterinarian.profile"];
        obj.id = obj["Veterinarian.id"];
        delete obj["Veterinarian.profile"];
        delete obj["Veterinarian.id"];
        delete obj["Veterinarian.name"];
    });

    return res.json({post:nowPost[0]});
})
router.delete("/delete/:id",async (req,res) =>{
    const body = req.body;

    await Post.destroy({
        where:{
            id:{[Op.eq]: req.params.id},
        }
    });
    return res.sendStatus(200);
})

router.post("/comment/:id",async (req,res)=>{
    const body = req.body;
    let relatedTableId,tableName;
    switch (req.body.type){
        case 'user':
            relatedTableId = "UserId";
            tableName = "User;"
            break;
        case 'vet':
            relatedTableId = "VeterinarianId"
            tableName = "Veterinarian";
            break;
    }


    const comment = await Comment.create({
        content: body.content,
        [relatedTableId]: body.userId,

    })
})

module.exports = router;