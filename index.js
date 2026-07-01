const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const methodOverride = require("method-override");

const { v4:uuidv4 }= require('uuid'); 

app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

let posts = [
    {
        id: uuidv4(),
        username:"John",
        content: "Love to explore!"
    },
    {
        id: uuidv4(),
        username: "Diana",
        content: "I am  so graceful"
    },
    {
        id: uuidv4(),
        username: "Anne",
        content: "I am writer"
    }
];

app.get("/posts", (req, res)=>{
    res.render("index.ejs", {posts});
});
app.get("/posts/new", (req, res)=>{
    res.render("new.ejs");
});
app.post("/posts", (req, res)=>{
    let{username, content} = req.body;
    posts.push({id: uuidv4(), username, content});
    res.redirect("/posts");
});
app.get("/posts/:id", (req, res)=>{
    res.render("detailedPost.ejs", {post: posts.find(p => p.id === req.params.id)});
});
app.get("/posts/destroy/:id", (req, res)=>{
    posts = posts.filter(p => p.id !== req.params.id);
    res.redirect("/posts");
});
app.get("/posts/:id/edit", (req, res)=>{
    res.render("editContent.ejs", {post: posts.find(p => p.id === req.params.id)});
});
app.post("/posts/edit/:id", (req, res)=>{
    let {content} = req.body;
    let post = posts.find(p => p.id === req.params.id);
    post.content = content;
    res.redirect("/posts");
});
app.listen(port, ()=>{
    console.log(`Server is listening to ${port}`);
});