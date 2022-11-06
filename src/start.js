import bodyParser from "body-parser";
import express from "express";
import mongoose from "mongoose";
import history from "./components/history";
const app = express();
app.get("/", function(req, res) {
    res.render("history");
})
app.listen(3100, function() {
    console.log("Hlo");
})