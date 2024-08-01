const express = require('express')
const app = express()
const path = require('path')
const port = 5000
var cors = require('cors')
const hr_announcements = require('./src/hr_announcements')


app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  console.log("Backend reciever start **********")
    console.log("Type:  "+req.method)
    console.log("URL:  "+req.path);
    console.log("DATA:  "+req.body);
    console.log("Backend reciever end ******")
    next();
})


app.get('/',(req, res)=>{
  res.send("This is home page")
})
app.post('/',(req, res)=>{
  res.send("This is home page")
})
const login=require("./src/login")
const checkinout=require("./src/checkinout")
const room_allot=require("./src/room_allot")
const MyProfile = require("./src/myProfile")
const MyPod = require("./src/myPod")
const announcements=require('./src/announcements')
const Tickets = require("./src/tickets");
const ratingpage = require("./src/ratingpage");
const hostel_blocks = require("./src/hostel_blocks");
const floors = require("./src/floors");
const tickets_hr = require("./src/tickets_hr");
const tickets_ho = require("./src/tickets_ho");

app.use('/login',login)
app.use('/hr_announcements',hr_announcements)
app.use('/checkinout',checkinout)
app.use('/room_allot',room_allot)
app.use('/myProfile',MyProfile)
app.use('/myPod',MyPod)
app.use('/announcements',announcements)
app.use("/tickets", Tickets);
app.use('/ratingpage', ratingpage);
app.use('/hostel_blocks', hostel_blocks);
app.use('/floors', floors);
app.use('/tickets_hr', tickets_hr);
app.use('/tickets_ho', tickets_ho);

app.listen(port, function(){
  // console.log(process.env.PORT)
  console.log('Your node js server is running on url http://localhost:'+(port));
} );