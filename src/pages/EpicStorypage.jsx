import { useState } from "react"
import Program from "../componets/EpicStoryThing/Program"
import '../componets/EpicStorypage.css'

function EpicStorypage() {

    const [hideStart, setHideStart] = useState("show")
    const [showProgram, setShowProgram] = useState("hide")

    const toggelProgram = () => {
        hideStart == "hide" ? setHideStart("show") : setHideStart("hide")
        showProgram == "show" ? setShowProgram("hide") : setShowProgram("show")
    }

    return (
        <>
            <div className={hideStart}>
                <h1> Welcome to the story of Tim Fagerdal, the human fruit</h1>
                <h2> This is a interactive story about me as a fruit, that loves making food, it is mostly pasta. It is written by
                    ChatGPT so it is going to be weird</h2>
                <p> The game works by making chooses by pressing the buttons below, som times there will be a
                    input prompt where you type what you want to do. The chooses that are possible will be writhen in <b>bold</b> and <ins>underlined.</ins>
                </p>
                <p><b><ins>Do you want to play?</ins></b></p>
                <button id="start" onClick={toggelProgram}> YES </button>
            </div>
            <div className={showProgram}>
                <Program />
            </div>
            <button id="beginningText" onClick={toggelProgram}> Beginning </button>
        </>
    )
}

export default EpicStorypage