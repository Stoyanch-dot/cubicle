const cube = require('../db.json')

exports.index = (req, res) =>{
 res.render('index', {cube});
}

exports.about = (req, res) =>{
    res.render('about');
}