import React from 'react'

const BoxList = (props) => {
    const {box} = props;

    return (
        <div className='box' style={{height:box.height + 'px', width:box.width + 'px', backgroundColor:box.color}}></div>
    )

}

export default BoxList