import React, { useState } from "react";

export default function MudarColor(){

    const [backgroundColor, setBackgroundColor] = useState('white');

    const MudarCor = (NovaCor) => {
        setBackgroundColor(NovaCor);
    };

    return(
        <div style={{ backgroundColor }}>
            <button onClick={() => MudarCor('red')}></button>
            <button onClick={() => MudarCor('green')}></button>
            <button onClick={() => MudarCor('blue')}></button>
        </div>
    )
}