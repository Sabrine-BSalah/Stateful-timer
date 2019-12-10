import React from 'react'


export default function dynamicReact(props) {

    let h = Math.floor(props.x / 3600000);
    let r1 = props.x % 3600000
    let m = Math.floor(r1 / 60000);
    let s = Math.floor((r1 / 1000) % 60);
   
    return (    
    <span>
        <p className="timer-content">
            {String(h).padStart(2, '0')} : {String(m).padStart(2, ('0'))} : {String(s).padStart(2, '0')}
        </p>
    </span>
    )   
}
