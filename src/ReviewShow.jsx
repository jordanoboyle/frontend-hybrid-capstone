import { useContext, useState } from "react"
import axios from "axios"
import { UserContext } from "./UserContext"



export function ReviewShow(props) {


  return(
    <div>
      <h1>This is FROM the ReviewShow</h1>
      <p>Game Title: {props.review.game_title}</p>
      <p>{props.review.subtitle}</p>
      <img style={{width: "200px", height: "200px"}} src={"/public/DefaultImages/UnderConstruction.png"}/>
    </div>
  )
}