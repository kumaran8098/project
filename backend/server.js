const express = require('express');
const router = express.Router();
const app = express(); 
app.use(express.json());
const cors = require('cors');
app.use(cors());
const streetteacher = require('./Routes/Teacher');
const bestadmin = require('./Routes/admin');
const student = require('./Routes/student');
const Timetable = require('./Routes/Timetable');
const studentattanance = require('./Routes/sattenance');
const Leaveteacher=require('./Routes/Leaveteacher');


const actualKey = "YWRtaW46MTIz";
app.use(function (req, res, next) {
    console.log(req.url, req.method, new Date().toLocaleString());
    let receivedKey = req.headers.authorization || '';
    receivedKey = receivedKey.split(" ")[1];
    if (receivedKey === actualKey) {
        next();
    } else {
        res.send('failed');
    }
});

app.use('/streetteacher', streetteacher);
app.use('/bestadmin', bestadmin);
app.use('/student', student);
app.use('/Timetable', Timetable);
app.use('/studentattanance',studentattanance);
app.use('/Leaveteacher',Leaveteacher);


app.listen(3001, () => {
    console.log('server started');
});

module.exports = router; 
