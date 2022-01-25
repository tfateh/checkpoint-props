import React from "react";

                
const StudentsCard =({employers:{img,firstName,lastName,bio,profession},Done})=>{
                
     
    console.log(img)
    return(
        <div style={{color:"black",border:"solid 2px rgb(237, 215, 123)",borderRadius:"7px", width:"220px", textAlign:"center", fontStyle:"italic"}}>
            <img src={img} alt="" style={{width:"180px"}}/>

            <h1 style={{fontSize:"18px"}}>firstName:{firstName}</h1>
            <h1 style={{fontSize:"18px"}}>LastName:{lastName}</h1>
            <h1 style={{fontSize:"18px"}}>Bio:{bio}</h1>
            <h2 style={{fontSize:"18px"}}>Professio:{profession}</h2>
            <button onClick={() => Done(firstName, lastName)}>my profil is</button>
        </div>
    )
}
export default StudentsCard;