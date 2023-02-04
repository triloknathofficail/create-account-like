var express = require('express');
var router = express.Router();

const userModel = require("./users");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/read', function(req, res, next) {
 userModel.find()
 .then(function(allusers){
  res.render('read',{allusers});
 });
});


router.get('/date/:id', function(req, res) {
  userModel.findOne({_id: req.params.id})
  .then(function(user){
   user.datesOffer++;
   user.save()
   .then(function(){
    res.redirect("/read");
   })
  });
 }); 


 router.get('/edit/:id', function(req, res, next) {
  userModel.findOne({_id:req.params.id})
  .then(function(user){
    res.render("edit", {user});

  });
});



router.post('/update/:id', function(req, res, next) {
  userModel.findOneAndUpdate({_id:req.params.id},{
    username:req.body.name,
    email:req.body.email,
    photu:req.body.photu
  }).then(function(User){
    res.redirect("/read");
  });
});



router.get('/delete/:id', function(req, res, next) {
  userModel.findOneAndDelete({_id: req.params.id})
  .then(function(user){
    res.redirect("/read");

  })
});


router.post('/create', function(req, res, next) {
  userModel.create({
    username:req.body.name,
    email:req.body.email,
    password:req.body.password,
    photu:req.body.photu
  }).then(function(createdUser){
    res.redirect("/read");
  });
});


module.exports = router;
