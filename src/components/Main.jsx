import React from "react"

export default function Main() {
    // 2: Declare state: (useState is a hook)
    const [result, func] = React.useState("hello") // first value (result) is the default value for state variable, and the 2nd value (the function) is how you want to change the state - which becomes the new vertion of state 

    // 1: 
    function playButton() {
        const musicArray = musicData.data.music
        // CAN'T DO THIS YET, BECAUSE YOU NEED TO DO API CALL. WHEN YOU GET TO API LESSON, apply this:
            // do api call to: https://podcast-api.netlify.app/id/<ID>
            // <ID> indicates where the dynamic ID for the requested item should be placed
            // in here, "file" is where you get the music from
                /** EXAMPLE 
                 * const memesArray = memesData.data.memes
                 * const randomNumber = Math.floor(Math.random() * memesArray.length)
                 * const url = memesArray[randomNumber].url
                 * console.log(url)
                 */ 

        }

    // 3: FAVOURITES: this is a state to update the amount of favorited music the user has
    // const [favoriteAmount, setFavoriteAmount] = React.useState(o) // initially the favorites is set to 0 because the user hasn't favorited any music yet
    

    // 4: Show preview of all podcasts on homepage
    const [podcastsPreviewData, setPodcastsPreviewData] = React.useState([])
    
    React.useEffect(function() { // to manage side effects issues
        console.log("effect ran! well done")
        fetch("https://podcast-api.netlify.app/shows") // fetch request to the previews of all the shows
            .then(res => res.json()) // fetch receives a response in json, which we convert to a js object so we can access its properties (id, image etc.)
            .then(data => setPodcastsPreviewData(data))
    })

        // genre ids and their titles
        const genreMapping = { // genre object to map over
            1: "Personal Growth",
            2: "True Crime and Investigative Journalism",
            3: "History",
            4: "Comedy",
            5: "Entertainment",
            6: "Business",
            7: "Fiction",
            8: "News",
            9: "Kids and Family"
        };



    return (
        <main>
            <div>
                <h1>This is Working!</h1>
            {/* 1: play this song button (button will be on homepage on every song*/}
            <button 
                className="music--button"
                onClick={playButton}
                >
                Play
            </button>            
            
                <div className="podcast-previews">
                {podcastsPreviewData.map(podcast => ( // parameter 'podcast' represents each item in the array during each iteration of the .map function
                    <div key={podcast.id} className="podcast-preview">
                        <img src={podcast.image} />                       
                        <h2>{podcast.title}</h2>
                        <p>{podcast.description.split(' ').slice(0, 20).join(' ')}...</p> {/* 'split' splits description into array of individual words. 'slice 0,20' extract first 20 words from array, which we join back together. Then append with '...' */}
                        <p>Seasons: {podcast.seasons}</p>
                        <p>Genres: {podcast.genres.map(genreId => genreMapping[genreId]).join(', ')}</p>
                        <p>Updated: {podcast.updated}</p>
                    </div>
                ))}
                </div>
            </div>
            
         
        </main>
    )

}