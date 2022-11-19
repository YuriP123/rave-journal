import React from "react";

export default function Main(props){
    console.log(props); 
    return(
        <>
            <div className="Main">
                <img src={props.item.imageUrl} ></img>
                <div className="info-section">
                    <div>
                        <img src="../images/pindrop.png"></img>
                        <h4>{props.item.location}</h4>
                        <a href={`${props.item.url}`}>View Website</a>
                    </div>
                    <h1>{props.item.title}</h1>
                    <div className="dates">
                        <h3>{props.item.startDate}</h3>
                        -    
                        <h3>{props.item.endDate}</h3>
                    </div>
                    <p>{props.item.description}</p>
                </div>
            </div>
        </>
        )
}