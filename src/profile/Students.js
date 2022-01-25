import React from "react";
import StudentsCard from "./StudentsCard";


const Students =({employers,Done})=> {

    
    return (
        <React.Fragment>
            <div style={{display:"flex", justifyContent:"center",marginTop:"30px",justifyContent: "space-around"}}>
        {
            employers.map((employer,i)=> (
                < StudentsCard employers={employer} Key={employer.id} Done={Done}/>
            )
            )
}
</div>
         </React.Fragment>
            
    )
    }
    export default Students

