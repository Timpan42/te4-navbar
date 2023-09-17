import story from "./story.json"

function Program() {
    let titel = story[0].titel
    let text = story[0].text
    let id = story[0].id
    let options = story[0].options

    return (
        <>
            <h1> {titel} </h1>
            <p>{text}</p>



        </>
    )
}

export default Program