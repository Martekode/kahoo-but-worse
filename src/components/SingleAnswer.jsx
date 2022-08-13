import React from "react";
import { decode } from "html-entities";
class SingleAnswer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            hover : false,
            clicker : false,
            styles: {
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
        }
    }
    
    enter = () => {
        console.log("enter happy")
        this.setState({hover : true,});
    }
    leave= ()=> {
        console.log("leave happy")
        this.setState({hover : false,});
    }
    click = () => {
        if (!this.state.clicker){
            console.log("clicked")
            console.log(this.state.clicker)
            this.setState({clicker : true,});
            console.log(this.state.clicker)
        }else{
            this.setState({clicker : false,});
            console.log(this.state.clicker)
        }

    }
    placeStylingLi(hover,clicker){
        if(!hover && !clicker){
            return this.state.styles.listStyle;
        }else if(hover || clicker){
            return this.state.styles.listStyleHover;
        }
    }
    placeStylingP(hover,clicker){
        if(!hover && !clicker){
            return this.state.styles.noSelectStyle;
        }else if(hover || clicker){
            return this.state.styles.selectedStyle;
        }
    }
    handleClick = value => () => {
        console.log(value);
    };
    render(){
        return (
            <li onClick={this.click} onMouseEnter={this.enter} onMouseLeave={this.leave} style={this.placeStylingLi(this.state.hover,this.state.clicker)}>
                <p>{decode(this.props.answer)}</p>
                <p style={this.placeStylingP(this.state.hover,this.state.clicker)}>{this.state.hover || this.state.clicker ? "select" : "no select"}</p>
            </li>
        );
    }
}
export default SingleAnswer