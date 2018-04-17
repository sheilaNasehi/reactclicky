import React from "react";
import ButterfliesObjs from "./butterflies";
import ButterfliesImgs from "./butterfliesImgs"
import "./imgs.css";
import MainHeading from "../mainHeading/mainHeading";

class ButterfliesImgsDiv extends 
React.Component{
    constructor(props){
        super (props);
        this.state={
            topScore:0,
            score:0,
            butterflies:ButterfliesObjs,
            butterfliesClicked:[]
        }
        this.updateScore= this.updateScore.bind(this);
    }
    updateScore(id){
        const clickedButterfly= this.state.butterfliesClicked.filter(butterflies => butterflies === id);
        const isArrayempty=clickedButterfly[0];
        const currentClickedArr=this.state.butterfliesClicked
        if(!isArrayempty){
            currentClickedArr.push(id);
            this.setState({
                score: this.state.score+1,
                butterfliesClicked:currentClickedArr,
                butterflies:this.randomizeButterflies(this.state.butterflies)
            },function(){
                if(this.state.score>=this.state.topScore)
                {
                    this.setState({topScore:this.state.score})
                }
                if(this.state.score===12){
                    alert("you won");
                }
            });
        }
        else{
            alert("you loose");
            this.setState({
                score: 0,
                butterfliesClicked:[]
            });
        }
    }
    //https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
    randomizeButterflies(butterfliesArray){
        var i,j,x;
        for (i = butterfliesArray.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x=butterfliesArray[i];
            butterfliesArray[i]=butterfliesArray[j];
            butterfliesArray[j]=x;
        }
        return butterfliesArray;
    }

    render() {
        return (
        <div className="container">
            <MainHeading score={this.state.score} topScore={this.state.topScore}/>
            <div className="butterfliesContainer">
                {this.state.butterflies.map(butterflies=>(
                    <ButterfliesImgs 
                    id={butterflies.id}
                    name={butterflies.name}
                    image={butterflies.image}
                    updateScore={this.updateScore}
                    />
                ))}
            </div>
        </div>
        );
      }
}           
export default ButterfliesImgsDiv;