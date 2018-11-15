var express = require('express');
var fs = require('fs');
var bodyParser = require('body-parser')
var app = express();

//设置跨域访问
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

// post请求获取参数
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

var file = "./json.txt";
var result = JSON.parse(fs.readFileSync(file));
var questions = result;


//写个接口
app.post('/ceshi', function (req, res) {

    // get请求获取参数
    // var name        = req.param('name');
    // var age         = req.param('age');
    // var content     = req.param('content');

    // var userInfo = {
    //     name: name,
    //     age: age,
    //     content: content
    // }
    // console.log(userInfo)
    // var struserInfo = JSON.stringify(userInfo);

    // post请求的参数获取
    var params = req.body
    console.log('====================================');
    console.log(params);
    console.log('====================================');

    // 在当前现有的文件内写入数据
    // fs.appendFile(__dirname + '/json.txt', struserInfo, function () {
    //     console.log('追加内容完成');
    // });


    // 创建新的文件写入
    // var w_data = new Buffer(struserInfo);

    // fs.writeFile(__dirname + '/test.txt', w_data, { flag: 'a' }, function (err) {
    //     if (err) {
    //         console.error(err);
    //     } else {
    //         console.log('写入成功');
    //     }
    // });


    res.status(200), res.json(questions);


});

//配置服务端口

var server = app.listen(3000, function () {

    var host = server.address().address;

    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
})