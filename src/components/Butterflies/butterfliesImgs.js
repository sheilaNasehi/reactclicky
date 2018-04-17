import React from "react";

const ButterfliesImgs = props => (
    <img onClick={()=>props.updateScore(props.id)} alt={props.name} id={props.id} className="butterflies" src={props.image} />
);

export default ButterfliesImgs;