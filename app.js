// const express=require ("express");
// const https=require ("https");

// const app=express();


// app.listen(3000,function(){
//     console.log("Server is running on port 3000");
// })

const button=document.querySelector("button");
const jokeText=document.querySelector("h4");
document.addEventListener("DOMContentLoaded",getJoke)

button.addEventListener("click",getJoke);

async function getJoke(){
    const jokeData= await fetch("https://icanhazdadjoke.com/",{
        headers:{
            "Accept":"application/json"
        }
    });
    const jokeObj=await jokeData.json();
    // console.log(jokeObj.joke);
    jokeText.innerHTML=jokeObj.joke;
}