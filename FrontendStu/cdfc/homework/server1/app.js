const express = require('express');
const app = express();
// 路径处理模块
const path = require('path');
// 向其他服务器端请求数据的模块
const request = require('request');
const bodyParser = require('body-parser');
// 处理静态资源

app.use(express.static(path.join(__dirname, 'public')));
// 处理参数
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// 设置允许跨域访问该服务
app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header(
    'Access-Control-Allow-Headers',
    'X-Requested-With,Content-Type,mytoken'
  );
  // res.header('Access-Control-Allow-Headers', 'Content-Type');
  // res.header('Access-Control-Allow-Headers', 'mytoken');
  next();
});

app.get('/request01', (req, res) => {
  res.send('hello ajax!');
});
app.get('/request02', (req, res) => {
  if (req.query.username == 'admin' && req.query.password == '123456') {
    res.send('登录成功');
  } else {
    res.send('登录失败');
  }
});
app.post('/request03', (req, res) => {
  if (req.body.username == 'admin' && req.body.password == '123456') {
    res.send('登录成功');
  } else {
    res.send('登录失败');
  }
});

app.post('/request07', (req, res) => {
  res.json({
    //返回json格式，当中可以传入一个对象
    uname: 'lisi',
    age: 13,
    gender: 'male'
  });
});

app.get('/request10', (req, res) => {
  res.send('hello ajax!');
});
app.get('/request12', (req, res) => {
  res.send('天真真不错！');
});

app.get('/request13-1', (req, res) => {
  res.send(req.query);
});
app.post('/request13-2', (req, res) => {
  res.json({
    //返回json格式，当中可以传入一个对象
    username: req.body.username,
    password: req.body.password
  });
});

// app.get('/fetch', (req, res) => {
//   setTimeout(function(){
//     res.send('hello fetch!')
//   },1000);
// })

// app.get('/books', (req, res) => {
//   res.send('传统的URL传递参数-------' + req.query.id)  //传统url得到get请求的参数用query
// })
// app.get('/books/:id', (req, res) => {   //：id占位符
//   res.send('Restful形式的URL传递参数---------' + req.params.id)  //restful形式url用parmas接收从参数
// })
// app.delete('/books/:id', (req, res) => {
//   res.send('DELETE请求传递参数--------' + req.params.id)  //restful形式url用parmas接收从参数
// })
// app.post('/books', (req, res) => {
//   res.send('POST请求传递参数-------' + req.body.uname + '---' + req.body.pwd)  //用body接收参数，body是上方的body-parser中间件提供
// })
// app.put('/books/:id', (req, res) => {
//   res.send('PUT请求传递参数------' + req.params.id + '---' + req.body.uname + '---' + req.body.pwd)
// })

// app.get('/json', (req, res) => {
//   res.json({  //返回json格式，当中可以传入一个对象
//     uname: 'lisi',
//     age: 13,
//     gender: 'male'
//   });
// })

// 启动监听
app.listen(3007, () => {
  console.log('3007服务器running...');
});
