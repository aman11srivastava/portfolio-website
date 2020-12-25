import React from 'react'
import front_wallpaper from './front_wallpaper.jpg'
import './Main.css'

const Main = () => {
    return (
        <div className = "container">
            <img className = "front_wallpaper" src = {front_wallpaper} alt = "front_wallpaper"/>
            <h1 className = "main_text">Hi! I am <span style = {{color: 'rgb(204, 58, 70)'}}>Aman Srivastava</span> and I am a Software Developer.</h1>
            <button className="main_btn">VIEW MY WORK <span className = "arrow">➤</span> </button>
        </div>
    )
}

export default Main
