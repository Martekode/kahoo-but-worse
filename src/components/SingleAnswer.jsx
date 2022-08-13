import React from "react";
import { decode } from "html-entities";
import { useState } from "react";

export function SingleAnswer (props){
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         hover : false,
    //         clicker : false,
    //         styles: {
    //             listStyleHover: {
    //                 display: "inline-block",
    //                 width:"20%",
    //                 textAlign:"center",
    //                 margin:"0",
    //                 marginLeft:"2.5%",
    //                 marginRight:"2.5%",
    //                 backgroundColor:"green",
    //                 borderRadius:"10px",
    //                 height:"auto",
    //                 color : "white"
    //             },
    //             listStyle: {
    //                 display: "inline-block",
    //                 width:"20%",
    //                 textAlign:"center",
    //                 margin:"0",
    //                 marginLeft:"2.5%",
    //                 marginRight:"2.5%",
    //                 backgroundColor:"blue",
    //                 borderRadius:"10px",
    //                 height:"auto",
    //                 color:"white"
    //             },
    //             noSelectStyle: {
    //                 backgroundColor : "red",
    //                 borderRadius:"10px",
    //                 width: "40%",
    //                 marginLeft:"30%",
    //                 height: "30%"
    //             },
    //             selectedStyle:{
    //                 backgroundColor : "lightgreen",
    //                 borderRadius:"10px",
    //                 width: "40%",
    //                 marginLeft:"30%",
    //                 height: "30%"
    //             }
    //         }
    //     }
    // }
    const [hover, setHover] = useState(false);
    const [clicker,setClicker] = useState(false);
    const styles = {
        listStyleHover: {
                            display: "inline-block",
                            width:"20%",
                            textAlign:"center",
                            margin:"0",
                            marginLeft:"2.5%",
                            marginRight:"2.5%",
                            backgroundColor:"green",
                            borderRadius:"10px",
                            height:"auto",
                            color : "white"
                        },
                        listStyle: {
                            display: "inline-block",
                            width:"20%",
                            textAlign:"center",
                            margin:"0",
                            marginLeft:"2.5%",
                            marginRight:"2.5%",
                            backgroundColor:"blue",
                            borderRadius:"10px",
                            height:"auto",
                            color:"white"
                        },
                        noSelectStyle: {
                            backgroundColor : "red",
                            borderRadius:"10px",
                            width: "40%",
                            marginLeft:"30%",
                            height: "30%"
                        },
                        selectedStyle:{
                            backgroundColor : "lightgreen",
                            borderRadius:"10px",
                            width: "40%",
                            marginLeft:"30%",
                            height: "30%"
                        }
    }
    const enter = () => {
        console.log("enter happy")
        setHover(true);
    }
    const leave= ()=> {
        console.log("leave happy")
        setHover(false);
    }
    const click = () => {
        if (!clicker){
            console.log("clicked")
            console.log(clicker)
            setClicker(true);
            console.log(clicker)
        }else{
            setClicker(false);
            console.log(clicker)
        }
    
    }
    const placeStylingLi = (hover,clicker) => {
        if(!hover && !clicker){
            return styles.listStyle;
        }else if(hover || clicker){
            return styles.listStyleHover;
        }
    }
    const placeStylingP = (hover,clicker) => {
        if(!hover && !clicker){
            return styles.noSelectStyle;
        }else if(hover || clicker){
            return styles.selectedStyle;
        }
    }
    
        return (
            <li onClick={click} onMouseEnter={enter} onMouseLeave={leave} style={placeStylingLi(hover,clicker)}>
                <p>{decode(props.answer)}</p>
                <p style={placeStylingP(hover,clicker)}>{hover || clicker ? "select" : "no select"}</p>
            </li>
        );
}