import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"


const pageStyles = {
    color: "#232129",
    
    fontFamily: "-apple-system, Roboto, sans-serif, serif",
    maxWidth:300,
    display: "inline-block",
  }


  const imgTeam = {
    borderRadius:"100%",
    maxWidth:100
  }


const TeamParticip = () => {
    return (
      <main style={pageStyles}>

<section>

<StaticImage
      style={imgTeam}
      src="../images/astronaut-4106766_1280.jpg"
      alt="Пример изображения"
    />
    <h3 >Name: Luka</h3>
   <h3 >Rate: 1 star</h3>
   <h3 >Position: DevOps</h3>
   <h3 >Github: <b>fuqfuq</b></h3>
   


</section>
        </main>
        

    )

}

export default TeamParticip

