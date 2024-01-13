import memesData from "../memesData"

export const Meme = () => {

    const handleClick = () => {
        const randomIndex = Math.floor(Math.random() * memesData.data.memes.length)
        const randomMeme = memesData.data.memes[randomIndex]
        console.log(randomMeme.url)
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
        </main>
    )
}
