import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios"

function App() {
  const [players, setPlayers] = useState([])

  useEffect(()=>{
    axios.get("http://localhost:3000/about").then((response) => {
      setPlayers(response.data)
    }).catch((error) => {
      console.log(error)
    })
  })

  return (
    <>
      <h1>basic full stack</h1>
      <p>Players info: {players.length}</p>

      {
        players.map((player, index) =>{
          <div key={player.id}>
            <h3>{player.title}</h3>
            <p>{player.power}</p>
          </div>
        })
      }
    </>
  )
}

export default App
