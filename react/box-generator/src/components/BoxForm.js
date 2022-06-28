import React, { useState } from "react"

const BoxForm = (props) => {
    const {boxes, setBoxes} = props;
    const [boxColor, setBoxColor] = useState("black");
    const [boxSize, setBoxSize] = useState(100);

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(boxColor);
        const box = {color:boxColor, height:boxSize, width:boxSize};
        setBoxes([...boxes, box]);
        console.log("Boxes: ", boxes);
        setBoxColor("");
        setBoxSize(0);
    } 

    return (
        <div>
            <h1>Create a Box</h1>
            <form onSubmit={ handleSubmit }>
                <label htmlFor="boxColor">Color: </label>
                <input type="text" id="boxColor" value={boxColor} onChange={ (e) => { setBoxColor(e.target.value)} } ></input>
                <label htmlFor="boxSize">Size: </label>
                <input type="number" id="boxSize" value={boxSize} onChange={ (e) => { setBoxSize(e.target.value)} } ></input>
                <button type="submit">Create Box</button>
            </form>
        </div>
    )
}

export default BoxForm;