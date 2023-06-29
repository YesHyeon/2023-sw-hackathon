const sequelize = require("sequelize");
const express = require("express");
const router = express.Router();
const { Op, where} = require("sequelize");
const {Post, Veterinarian,Hospital,Comment, User} = require('../models');
const Sequelize = require("sequelize");

router.get('/',async function(req,res){
    const hospital = Hospital.findAll({
        raw:true,

    })
} )

module.exports = router;