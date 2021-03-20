const express = require("express");
var app = express();

// app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');


// app.set("view engine", "ejs");
// app.use(express.static("public"));

var bodyParser = require('body-parser');

//NODE.js USES THE RESOURCES FOLDER UNDER THE ROOT FOLDER FOR
//ANY FILE SOURCE BY DEFAULT
app.use(express.static('resources'));

//"__dirname" is the path at the current folder(because app.js is at the current folder)
//this line of code exports "__basedir" to global
// global.__basedir = __dirname;

var favicon = require('serve-favicon');

app.use(favicon(__dirname + '/resources/static/img/favicon-32x32.png'));

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

var fs = require('fs');
const {
    render
} = require("ejs");



var mysql = require('mysql');



app.get('/individual', function (req, res) {
    let doc = fs.readFileSync('./views/index.html', "utf8");

    res.send(doc);
});

app.get('/individual/student', function (req, res) {
    let doc = fs.readFileSync('./views/student.html', "utf8");

    res.send(doc);
});

app.get('/individual/admin', function (req, res) {
    let doc = fs.readFileSync('./views/admin.html', "utf8");

    res.send(doc);
});



app.get('/individual/leader', function (req, res) {
    let doc = fs.readFileSync('./views/scoreboard.html', "utf8");

    res.send(doc);
});

//score board
app.get("/individual/readscoreboard", (req, res) => {

    console.log("req.body" + JSON.stringify(req.body));

    res.setHeader('Content-Type', 'application/json');
    var connection = mysql.createConnection({
        host: "localhost",
        user: "yiwenguc_lab5user",
        password: "lab5user123",
        database: "yiwenguc_individual_assignment",
        port: 3306,
        multipleStatements: true,
    })

    connection.connect();

    connection.query('SELECT * FROM scoreboard ORDER BY score DESC',
        function (err, items) {
            if (err) throw err;

            console.log('The id is: ', JSON.stringify(items));
            res.send(items);
        })

    connection.end();


});

// //update info to the main list
app.post("/individual/writeFromStudent", (req, res) => {

    console.log("req.body" + JSON.stringify(req.body));

    res.setHeader('Content-Type', 'application/json');
    var connection = mysql.createConnection({
        host: "localhost",
        user: "yiwenguc_lab5user",
        password: "lab5user123",
        database: "yiwenguc_individual_assignment",
        port: 3306,
        multipleStatements: true,
    })

    connection.connect();
    // console.log(req.body["obj"].length);
    let name = req.body["name"];
    let score = req.body["score"];

    let sql = `INSERT INTO scoreboard(
                Username, Score
            ) VALUES ("${name}", ${score});`;




    connection.query(sql, function (err, data) {
        if (err) {
            // some error occured
            console.log(err);
        } else {
            // successfully inserted into db
            console.log("success");
            res.send("Success");

        }
    });




    connection.end();


});


// //update info to the main list
app.post("/individual/writeFromAdmin", (req, res) => {

    console.log("req.body" + JSON.stringify(req.body));

    res.setHeader('Content-Type', 'application/json');
    var connection = mysql.createConnection({
        host: "localhost",
        user: "yiwenguc_lab5user",
        password: "lab5user123",
        database: "yiwenguc_individual_assignment",
        port: 3306,
        multipleStatements: true,
    })

    connection.connect();
    console.log(req.body["obj"].length);
    let numberofQ = req.body["obj"].length;

    for (let i = 0; i < numberofQ; i += 7) {
        console.log("1" + req.body["obj"][i]);
        console.log("1" + req.body["obj"][i + 1]);
        console.log("1" + req.body["obj"][i + 2]);
        console.log("1" + req.body["obj"][i + 3]);
        console.log("1" + req.body["obj"][i + 4]);
        console.log("1" + req.body["obj"][i + 5]);
        console.log("1" + req.body["obj"][i + 6]);

        let qNum = parseInt(req.body["obj"][i]);
        let qContent = req.body["obj"][i + 1];
        let qOption1 = req.body["obj"][i + 2];
        let qOption2 = req.body["obj"][i + 3];
        let qOption3 = req.body["obj"][i + 4];
        let qOption4 = req.body["obj"][i + 5];
        let qCorrect = req.body["obj"][i + 6];
        let sql = `INSERT INTO Persons2(
                ID, Question, Option1, Option2, Option3, Option4, Correct
            ) VALUES (${qNum}, "${qContent}", "${qOption1}",
            "${qOption2}", "${qOption3}", "${qOption4}", "${qCorrect}"
            );`;




        connection.query(sql, function (err, data) {
            if (err) {
                // some error occured
                console.log(err);
            } else {
                // successfully inserted into db
                console.log("success");
                res.send("Success");

            }
        });
    }



    connection.end();


});

app.put('/individual/update1', (req, res) => {
    // res.send('Got a PUT request at /user');
    console.log(req.body.output2.length);


    res.setHeader('Content-Type', 'application/json');
    var connection = mysql.createConnection({
        host: "localhost",
        user: "yiwenguc_lab5user",
        password: "lab5user123",
        database: "yiwenguc_individual_assignment",
        port: 3306,
        multipleStatements: true,
    })

    connection.connect();


    let qNum = req.body.output2[0];
    let Content_Q = req.body.output2[1];
    let Option_1 = req.body.output2[2];
    let Option_2 = req.body.output2[3];
    let Option_3 = req.body.output2[4];
    let Option_4 = req.body.output2[5];
    let correct_answer = req.body.output2[6];
    let sql = `UPDATE Persons2 SET Question = "${Content_Q}",
    Option1 = "${Option_1}", Option2 = "${Option_2}", Option3 = "${Option_3}", Option4 = "${Option_4}", Correct = "${correct_answer}"
    WHERE ID = "${qNum}";`;


    connection.query(sql, function (err, data) {
        if (err) {
            // some error occured
            console.log(err);
        } else {
            // successfully inserted into db
            console.log("success");
            res.send("Success");

        }
    });




    connection.end();

});



// //update info to the main list
app.get("/individual/readFromAdmin", (req, res) => {

    console.log("req.body" + JSON.stringify(req.body));

    res.setHeader('Content-Type', 'application/json');
    var connection = mysql.createConnection({
        host: "localhost",
        user: "yiwenguc_lab5user",
        password: "lab5user123",
        database: "yiwenguc_individual_assignment",
        port: 3306,
        multipleStatements: true,
    })

    connection.connect();

    connection.query('SELECT * FROM Persons2',
        function (err, items) {
            if (err) throw err;

            console.log('The id is: ', JSON.stringify(items));
            res.send(items);
        })

    connection.end();


});


// //update info to the main list
app.get("/individual/readFromStudent", (req, res) => {

    console.log("req.body" + JSON.stringify(req.body));

    res.setHeader('Content-Type', 'application/json');
    var connection = mysql.createConnection({
        host: "localhost",
        user: "yiwenguc_lab5user",
        password: "lab5user123",
        database: "yiwenguc_individual_assignment",
        port: 3306,
        multipleStatements: true,
    })

    connection.connect();

    connection.query('SELECT * FROM Persons2', function (err, items) {
        if (err) throw err;

        console.log('The id is: ', JSON.stringify(items));
        res.send(items);
    })

    connection.end();


});
app.listen(process.env.PORT || 3000);


// app.listen(process.env.PORT);