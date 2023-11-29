const express = require('express');
const bodyparser = require('body-parser');
const app = express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

// 设置允许跨域访问该服务
app.all('*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type,mytoken");
  // res.header('Access-Control-Allow-Headers', 'Content-Type');
  // res.header('Access-Control-Allow-Headers', 'mytoken');
  next();
});

function Book(bookname, author, desc) {
    this.bookname = bookname;
    this.author = author;
    this.desc = desc;
}

var book_sgyy = new Book('三国演义', '罗贯中', '一个杀伐纷争的年代');
var book_shz = new Book('水浒传', '施耐庵', '108条好汉的故事');
var book_hlm = new Book('红楼梦', '曹雪芹', '一个封建王朝的缩影');
var book_xyj = new Book('西游记', '吴承恩', '佛教与道教的斗争');



app.get('/get/book', (req, res) => {
   
    if(!req.query.code){
        res.send('Error! code is a required parameter')
    }
    console.log(req.query);
    switch (req.query.code) {
        case 'sgyy':
            res.send(JSON.stringify(book_sgyy));
            break;
        case 'shz':
            res.send(JSON.stringify(book_shz));
            break;
        case 'hlm':
            res.send(JSON.stringify(book_hlm));
            break;
        case 'xyj':
            res.send(JSON.stringify(book_xyj));
            break;
        default:
            res.send(`{"error": "0","msg" : "${req.query.code} is not book"}`);
    }
});



app.post('/post/book', (req, res) => {
   
    console.log(req.body);
    if(!req.body.code){
        res.send('Error! code is a required parameter')
    }
    switch (req.body.code) {
        case 'sgyy':
            res.send(JSON.stringify(book_sgyy));
            break;
        case 'shz':
            res.send(JSON.stringify(book_shz));
            break;
        case 'hlm':
            res.send(JSON.stringify(book_hlm));
            break;
        case 'xyj':
            res.send(JSON.stringify(book_xyj));
            break;
        default:
            res.send(`{"error": "0","msg" : "${req.body.code} is not book"}`);
    }
});


app.listen(3333);
console.log('服务启动成功');