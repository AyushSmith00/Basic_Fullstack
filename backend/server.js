import express from "express";

const app = express();

app.get("/",(req, res) => {
    res.send("server is ready");
})

app.get("/api/about",(req, res)=> {
    const players = [
        {
            id: 1,
            power: "sniper",
            title: "hitman", 
        },
        {
            id: 2,
            power: "ar",
            title: "fragger",
        },
        {
            id: 3,
            power: "smg",
            title: "assaulter",
        },
        {
            id: 4,
            power: "tactician",
            title: "igl",
        }
    ]
    res.json(players)
})

const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log(`serve at http://localhost:${port}`);
});