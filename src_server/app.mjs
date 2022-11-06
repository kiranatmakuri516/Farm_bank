import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { render } from 'ejs';
const CONNECTION_URL = 'mongodb+srv://Harsha:Harsha@cluster0.p3j1fvw.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(CONNECTION_URL, (err) => {
    if (err) {
        console.log(err);
    }
});
const farmer_data = new mongoose.Schema({
    name: String,
    phone: String,
    password: String,
    adhaar: String,
    state: String,
    city: String,
    street: String,
});
const roomschema = new mongoose.Schema({
    adhaar: String,
    crop: String,
    equity: String,
    ask: String
});
const postschema = new mongoose.Schema({
    adhaar: String,
    img: String,
    desc: String
});
const farmer_data_models = mongoose.model("farmer_data_models", farmer_data);
const Room = mongoose.model("Room", roomschema);
const posts = mongoose.model("posts", postschema);
var a = '123456123456';
const app = express();
app.use(express.json());
app.use(cors());
app.get("/", function(req, res) {
    farmer_data_models.find({ adhaar: a }, function(err, farmer_data_models) {
        if (err)
            console.log("nameaste");
        else {
            //console.log(farmer_data_models);
            res.send(farmer_data_models);
        }
    })
});
app.post("/addpost", function(req, res) {
    console.log(req.body.b);
    const abc = new posts({
        adhaar: a,
        img: req.body.a,
        desc: req.body.b
    })
    abc.save();
});
app.get("/posts", function(req, res) {
    posts.find({ adhaar: a }, function(err, posts) {
        //   console.log(posts);
        if (err)
            console.log("nameaste1");
        else {
            res.send(posts);
        }
    })
});
app.get("/room", function(req, res) {
    Room.find({ adhaar: a }, function(err, Room) {
        if (err)
            console.log("nameaste2");
        else {
            //console.log(Room);
            res.send(Room);
        }
    })
});
app.post("/edit", function(req, res) {
    console.log("hlo guru");
    const filter = { adhaar: '123456123456' };
    const update = { name: req.body.a, phone: req.body.b, city: req.body.c, state: req.body.d }
    farmer_data_models.findOneAndUpdate(filter, { $set: update }, { new: true, upsert: true }, (err, success) => {
        if (err) console.log(err);
        else console.log(success);
    });
})

app.listen(5000, function() {
    console.log("server started");
});