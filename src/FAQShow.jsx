import { useContext, useState } from "react"
import axios from "axios"
import { UserContext } from "./UserContext"

export function FAQShow(props) {
  // console.log("FROM FAQ MODAL", props.faq)



  return(
    <div>
      <h1>This will be from the FAQ Modal</h1>
      <p>{props.faq.question}</p>
      <img style={{width: "200px", height: "200px"}} src={"/public/DefaultImages/UnderConstruction.png"}/>
    </div>
  )
}