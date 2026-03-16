import React, {useState} from "react"

function App(){

const [username,setUsername] = useState("")
const [password,setPassword] = useState("")
const [text,setText] = useState("")

const register = async () =>{
await fetch("http://localhost:5000/register",{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({username,password})
})
alert("User Created")
}

const login = async () =>{
await fetch("http://localhost:5000/login",{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({username,password})
})
alert("Login success")
}

const saveNote = async () =>{
await fetch("http://localhost:5000/note",{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({username,text})
})
alert("Saved to DB")
}

return(

<div style={{background:"#282c34",height:"100vh",color:"white",textAlign:"center"}}>

<h1 style={{color:"cyan"}}>DevOps Fullstack App</h1>

<input placeholder="username"
onChange={(e)=>setUsername(e.target.value)}/>

<br/><br/>

<input placeholder="password"
onChange={(e)=>setPassword(e.target.value)}/>

<br/><br/>

<button onClick={register} style={{background:"green",color:"white"}}>Register</button>

<button onClick={login} style={{background:"blue",color:"white"}}>Login</button>

<br/><br/>

<textarea
placeholder="Write something"
onChange={(e)=>setText(e.target.value)}
/>

<br/><br/>

<button onClick={saveNote} style={{background:"orange"}}>Save</button>

</div>

)

}

export default App