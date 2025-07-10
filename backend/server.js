import express from "express";

const app = express();

app.get("/",(req, res) => {
    res.send("server is ready");
})

app.get("/about",(req, res)=> {
    const players = [
        {
            id: "player1",
            power: "sniper",
            title: "hitman",
        },
        {
            id: "player2",
            power: "ar",
            title: "fragger",
        },
        {
            id: "player3",
            power: "smg",
            title: "assaulter",
        },
        {
            id: "player4",
            power: "tactician",
            title: "igl",
        }
    ]
    res.send(players)
})

const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log(`serve at http://localhost::${port}`);
});