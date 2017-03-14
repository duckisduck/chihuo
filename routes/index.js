 var express = require('express');
 var mongoose = require('mongoose');
  var router = express.Router();
  var User = require('../database/db');


	/* GET home page. */
  router.get('/', function(req, res) {
	    res.render('index', { title: 'index' });
  });

  /* admin */
  router.get('/admin', function(req, res) {
      res.render('admin', { title: 'admin' });
  });

  /* admin */
  router.get('/map', function(req, res) {
      res.render('map', { title: 'map' });
  });

  /* testBootstrap */
  router.get('/testBootstrap', function(req, res) {
      res.render('testBootstrap', { title: 'testBootstrap' });
  });

  /* testtubiao */
  router.get('/testtubiao', function(req, res) {
      res.render('testtubiao', { title: 'testtubiao' });
  });


    /* home */
  router.get('/home', function(req, res) {
      res.render('home', { title: 'home' });
  });


  /* login */
  router.get('/login', function(req, res) {
	    res.render('login', { title: 'login' });
  });

  /* ucenter */
  router.post('/ucenter', function(req, res) {
  	function insert(res) {
      var flag ;
 
   var user = new User({
        name : req.body.name,                 //用户账号
        password: req.body.password                           //密码
        
    });

    user.save(function (err) {

        if (err) {
          flag=0;
            console.log("Error:" + err);
        }
        else {
          flag = 1;
            // console.log("Res:" + res);
            console.log("succes insert")
           
            //console.log("Error:" + res);
        }

    });


}

insert();
 if (flag=0) {
      res.render('ucenter', { title:'insert succes' });
      console.log("weberror");
    }
    else{
      res.render('ucenter', { title:'insert succes' });
      console.log("websuccess");
    }
 //res.render('ucenter', { title:'insert succes' });

//删除
/*function del(){
    var wherestr = {'name' : req.body.name};
    
    User.remove(wherestr, function(err){
        if (err) {
            console.log("Error:" + err);
        }
        else {
            console.log("Res:"+ wherestr);
        }
    })
}

del();*/
		  // var query = {name: req.body.name, password: req.body.password};
		  // (function(){
		  	
				//   user.count(query, function(err, doc){    //count返回集合中文档的数量，和 find 一样可以接收查询条件。query 表示查询的条件
				// 		if(doc == 1){
				// 			console.log(query.name + ": 登陆成功 " + new Date());
				// 			res.render('ucenter', { title:'ucenter' });
				// 		}else{
				// 			console.log(query.name + ": 登陆失败 " + new Date());
				// 			res.redirect('/');
				// 		}
			 //  	});
		  // })(query);
  });
  
  module.exports = router;