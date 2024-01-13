import { useState } from "react"
import memesData from "../memesData"

export const Meme = () => {

    const [memeImage, setMemeImage] = useState('')

    const handleClick = () => {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMemeImage(memesArray[randomNumber].url)
        
    }

    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                />
                <button 
                    className="form--button"
                    onClick={handleClick}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <img className="meme--image" src={memeImage} alt="image of random memes" />
        </main>
    )
}
