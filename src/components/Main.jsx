//  User can mark specific episodes as favourites to find them again
import React from "react"

export default function Main() {
    // ----------------------------------------------
    // THIS SECTION IS A TEST TO SEE IF I CAN DISPLAY THE HOMEPAGE CORRECTLY SO  THAT WHEN YOU CLICK ON A PREVIEW IT DISPLAYS THE PREVIEW
    /**
     * FLIP BETWEEN HOMEPAGE OF PREVIEWS AND SELECTED PREVIEW
     * flip state back & forth: lesson 19 of meme generator
     */
    const [mainDisplay, setMainDisplay] = React.useState(true)
    function changeDisplay() { // i think this is like the openpreview function maybe?
        // setMainDisplay(prevDisplay => ) // return homepage, or if user clicked on specific podcast return the podcast info
    }

    // Homepage of previews
    const [podcastsPreviewData, setPodcastsPreviewData] = React.useState([])
    // [[podcastsPreviewData]]

    React.useEffect(function() { // to manage side effects issues
        console.log("effect ran! well done")
        fetch("https://podcast-api.netlify.app/shows") // fetch request to the previews of all the shows
            .then(res => res.json()) // fetch receives a response in json, which we convert to a js object so we can access its properties (id, image etc.)
            .then(data => setPodcastsPreviewData(data))
    })

    // when user clicks to open a podcast
    const [selectedPodcast, setSelectedPodcast] = React.useState([])

    React.useEffect(function() {
    fetch("https://podcast-api.netlify.app/id/<ID>")
        .then(res => res.json())
        .then(data => setSelectedPodcast(data))
    })

    function changeMainDisplay() { // when user clicks on a specific podcast, changeMainDisplay to selectedPodcast
        setMainDisplay(selectedPodcast)
    }

    // -------------------------------------------------------

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
    
    // favorite icon on  previews (either filled or empty heart)
    // lesson 22 talks about a favorite/unfavorite button
    // let heartIcon = podcast.isFavorite === false ? "empty-heart-icon.png" : "filled-heart-icon.png" // set to false so that its automatically unfavorited

    const [isFavorite, setIsFavorite] = React.useState(false)

    function toggleFavorite() {
        setIsFavorite(prevFavorite => !prevFavorite)
    }

    // above

    function hoverPreview() {
        console.log("Preview was hovered over!")
    }

    function hoverPreviewButton() {
        console.log("Preview button was hovered over!") 
    }

    // this button must be pressed to open the previews
    function openPreview() {
        console.log("Open Preview button was clicked!") // working!
        const previewsArray = previewsData.data.preview
        setPodcastsPreviewData() // set what you want to display instead
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

    return (
        <main>
            <h1>This is Working!</h1>
            <div className="podcast-previews">
            {podcastsPreviewData.map(podcast => ( // parameter 'podcast' represents each item in the array during each iteration of the .map function (see README.md for more of an explanation)
                <div key={podcast.id} className="podcast-preview">
                    <div className="preview--image">
                        <img onMouseOver={hoverPreview} src={podcast.image} className="podcast--image" />  
                        {/* SELECT PODCAST BUTTON */}
                        <img 
                            className="open--preview--button"
                            onMouseOver={hoverPreviewButton}
                            onClick={openPreview}
                            src="open-preview-button.png"    
                        />  
                        {/* FAVORITES BUTTON */}
                        <img onClick={toggleFavorite} className="favorite--icon" src={isFavorite ? "./filled-heart-icon.png" : "./empty-heart-icon.png" } />
                        {/* (*5*) UNFAVORITE PODCAST (user clicks "x" icon from sidebar.jsx) */}
                        <Sidebar xClicked={podcastsPreviewData.isFavorite} handleClick={toggleFavorite} />
                    </div>                    
                    <h2>{podcast.title}</h2>
                    <p>{podcast.description.split(' ').slice(0, 20).join(' ')}...</p> {/* 'split' splits description into array of individual words. 'slice 0,20' extract first 20 words from array, which we join back together. Then append with '...' */}
                    <p>Seasons: {podcast.seasons}</p>
                    <p>Genres: {podcast.genres.map(genreId => genreMapping[genreId]).join(', ')}</p>
                    <p>Updated: {podcast.updated}</p>
                    {/* add preview button here */}
                    {/* also need to add a isFavorite property that can be true or false */}
                    

                    
                    <img 
                        // src="{`./${heartIcon}`}"
                        // src={podcast.isFavorite ? "./filled-heart-icon.png" : "./empty-heart-icon.png"}
                        // onClick={toggleFavorite}
                        // className="favorite--icon"
                    />

                    <div>
                        {/* {isFavorite && <img src="./filled-heart-icon.png" onClick={toggleFavorite} />}
                        {!isFavorite && <img src="./empty-heart-icon.png" onClick={toggleFavorite} />} */}

                        {/* if isFavorite is true, then display filled heart, otherwise empty heart */}
                        {/* <img onClick={toggleFavorite} src={isFavorite ? "./filled-heart-icon.png" : "./empty-heart-icon.png"} /> */}


                    </div>


  
                </div>
                
            ))}
            </div>
            <footer className="footer">
            <h1> © 2023 devkirstenm development. All rights reserved.</h1>
            </footer>
        </main>
    )
    // SEE 'const mainDisplay' ! this has to do with that
        // return (
        //     <div>
        //       {selectedPodcast ? renderPodcastPreview() : renderHomepage()}
        //     </div>
        //   );

}


