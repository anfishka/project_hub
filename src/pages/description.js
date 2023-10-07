import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"


const pageStyles = {
    color: "#232129",
    
    fontFamily: "-apple-system, Roboto, sans-serif, serif",
    maxWidth:300,
    display: "inline-block",
  }


  const nameOfProj = {
    maxWidth:500,
  
  }

const Description = () => {
    return (
      <main style={pageStyles}>
       
      <h2 style ={nameOfProj}>Name of project : "Amphibia"</h2>
      <h3 >Topic of project: Nature</h3>
      <h3 >Date: 26.05.2912</h3>
      <h3 >Language: ukr</h3>
      <h3 >City: Dnipro</h3>
      <h3 >Required for project: Programmers</h3>
 
        

        </main>
        

    )

}

export default Description
