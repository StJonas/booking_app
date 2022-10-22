import express from "express"
const app = express(
)

app.listen(4400, ()=>{
    console.log("connected to backend.")
})