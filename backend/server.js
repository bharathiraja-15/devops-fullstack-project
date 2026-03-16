const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://localhost:27017/devopsapp")

const UserSchema = new mongoose.Schema({
    username: String,
    password: String
})

const NoteSchema = new mongoose.Schema({
    username: String,
    text: String
})

const User = mongoose.model("User", UserSchema)
const Note = mongoose.model("Note", NoteSchema)


// Register
app.post("/register", async (req, res) => {

    const user = new User({
        username: req.body.username,
        password: req.body.password
    })

    await user.save()

    res.send("User Created")
})


// Login
app.post("/login", async (req, res) => {

    const user = await User.findOne({
        username: req.body.username,
        password: req.body.password
    })

    if(user){
        res.send("Login Success")
    }else{
        res.send("Invalid User")
    }

})


// Save text
app.post("/note", async (req,res)=>{

    const note = new Note({
        username:req.body.username,
        text:req.body.text
    })

    await note.save()

    res.send("Saved Successfully")

})


app.listen(5000,()=>{
    console.log("Server running on port 5000")
})