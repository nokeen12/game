import React from 'react';
import { useEffect, useState } from 'react';
import '../styles/WelcomePage.css'
import {
    BubbleMenu
} from '../components'

const initialMenu = {
    welcome: false,
    play: false,
    help: false,
    settings: false,
}
type Menu = typeof initialMenu;

export function WelcomePage(){
    const [ menu, setMenu ] = useState(initialMenu)

    const handleMenuState = (property: keyof Menu) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
        setMenu(prevState => ({
            ...prevState,
            [property]: !prevState[e.target.value as keyof Menu],
        }))
    }
    // useEffect(()=>{
        // const buttonOne = document.querySelector(".bubble.t1") as HTMLElement | null
        // const buttonTwo = document.querySelectorAll(".t2, .t3, .t4")
        // const buttonThree = document.querySelectorAll(".t5, .t6")

        // const buttons = document.querySelectorAll('.bubble')
        // for(const button of buttons){

        // }

        // buttonOne ? buttonOne.addEventListener("click", function(){
        //     for(const button of buttonTwo as any){
        //         button.style.display = "flex";
        //     }
        // }): <></>

        // for(const button of buttonTwo)
        // buttonTwo ? buttonOne.addEventListener("click", function(){
        //     for(const button of buttonTwo as any){
        //         button.style.display = "flex";
        //     }
        // }): <></>
    // },[])

    return(
        <div id="WelcomePage">
            <button type="button" className="bubble t1" value="welcome">Welcome</button>
            <button type="button" className="bubble t2" value="play">Play</button>
            <button type="button" className="bubble t3" value="help">Help</button>
            <button type="button" className="bubble t4" value="settings">Settings</button>
            <button type="button" className="bubble t5" value="login">Login</button>
            <button type="button" className="bubble t6" value="signup">Login</button>
        </div>
    )
}