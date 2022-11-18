import { useState } from "react";

interface BubbleProps{name:string, tier:string, children:string}


const Bubble: React.FC<BubbleProps> = props => {
    const [ isOpen, setIsOpen ] = useState(false);
    return(
        <button type="button" className="bubble" value={props.name}>{props.name}</button>
    )
}

export function BubbleMenu(){
    return(
        // <button type="button" className="bubble t1" value="welcome">
        //     <button type="button" className="bubble t2" value="play">Play</button>
        //     <button type="button" className="bubble t3" value="help">Help</button>
        //     <button type="button" className="bubble t4" value="settings">Settings</button>
        //     <button type="button" className="bubble t5" value="login">Login</button>
        //     <button type="button" className="bubble t6" value="signup">Login</button>
        // </button>
        <div>
            <Bubble name="Welcome" tier="t1">Welcome</Bubble>
        </div>
    )
}
//should have line connecting each parent to each child
//when parent bubble is clicked it will toggle display of children to 
//flex and add animation from center to current location
//
