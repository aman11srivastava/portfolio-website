import React from 'react'
import front_wallpaper from './front_wallpaper.jpg'
import './Main.css'
import facebook from '../../images/social/facebook.png'
import instagram from '../../images/social/instagram.png'
import github from '../../images/social/github.png'
import linkedin from '../../images/social/linkedIn.png'

const Main = () => {
    return (
        <div className = "container">
            <img className = "front_wallpaper" src = {front_wallpaper} alt = "front_wallpaper"/>
            <h1 className = "main_text">Hi! I am <span style = {{color: 'rgb(204, 58, 70)'}}>Aman Srivastava</span> and I am a Software Developer.</h1>
            <button className="main_btn">VIEW MY WORK <span className = "arrow">➤</span> </button>
            {/* --------Social Links----------- */}
            <h3 className = "text">Connect with Me!</h3>
            <a target = "_blank" href = "https://facebook.com/aman.srivastava.1481/"><img className = "facebook" src = {facebook} alt = "Facebook"/></a>
            <a target = "_blank" href = "https://github.com/aman11srivastava"><img className = "github" src = {github} alt = "github"/></a>
            <a target = "_blank" href = "https://www.linkedin.com/in/aman11srivastava/"><img className = "linkedin" src = {linkedin} alt = "linkedin"/></a>
            <a target = "_blank" href = "https://instagram.com/_.amansrivastava._/"><img className = "instagram" src = {instagram} alt = "instagram"/></a>
        </div>
    )
}

export default Main
