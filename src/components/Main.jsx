//  User can mark specific episodes as favorites to find them again
import React from "react"
import { format } from 'date-fns';

export default function Main() {

    // Homepage of previews
    const [allPodcastsView, setAllPodcastsView] = React.useState([])
    // [[allPodcastsView]]

    React.useEffect(() => { // to manage side effects issues (code that affects an outside system)
        // callback function:
        fetch("https://podcast-api.netlify.app/shows") // fetch request to the previews of all the shows
            .then(res => res.json()) // fetch receives a response in json, which we convert to a js object so we can access its properties (id, image etc.)
            .then(data => setAllPodcastsView(data))
    // need to provide 2nd parameter (dependencies array) to React.useEffect, to stop the rerender issue
    }, []) // empty []: means i want this callback function to run once, & there's no dependencies [] to watch to trigger it to run again
    // NOTE: if you do need it to run again: watch this https://scrimba.com/learn/learnreact/useeffect-dependencies-array-co4fc423992f2d9737eaa55f2 & https://scrimba.com/learn/learnreact/useeffect-for-fetching-data-cof924a3f92d4ca7648780a8d

    // ------------------------------------
    // when user clicks to open a podcast

    const [selectedPodcast, setSelectedPodcast] = React.useState(null);
    // The initial value of selectedPodcast should be set to null instead of undefined, since it will be updated with an object (the data fetched from the API) later on.
    
    const handlePodcastSelection = async (id) => {
        try {
          // Fetch the data for the selected podcast using the provided ID
          const response = await fetch(`https://podcast-api.netlify.app/id/${id}`);
          const data = await response.json();
          console.log("Fetched data:", data);
          setSelectedPodcast(data);
        } catch (error) {
          // Handle any errors that occur during the fetch
          console.error('Error fetching podcast:', error);
        }
      };
      
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

    // return statements:

    return (
        <main>
            <h1 className="recommendations--title" >Top Picks!</h1>
            <h2 className="recommendations--subtitle" >Podcast recommendations just for you</h2>
            {/* sorting options */}
            <form className="sorting--options">
                <label htmlFor="sorting">Sort by:</label>
                <br />
                <select id="sorting">
                    <option value="a-z">A-Z</option>
                    <option value="z-a">Z-A</option>
                    <option value="genre">Genre</option>
                    <option value="date-newest-first">Data: Newest first</option>
                    <option value="date-oldest-first">Date: Oldest first</option>
                </select>
            </form>

            {/* display all podcasts */}
            <div className="podcast-previews">
            {allPodcastsView.map(podcast => ( // parameter 'podcast' represents each item in the array during each iteration of the .map function (see README.md for more of an explanation)
                <div key={podcast.id} className="podcast-preview">
                    <div className="preview--image">
                        <img onMouseOver={hoverPreview} src={podcast.image} className="podcast--image" />  
                        {/* SELECT PODCAST BUTTON */}
                        <button
                            className="open--preview--button"
                            onMouseOver={hoverPreviewButton}
                            onClick={() => handlePodcastSelection(podcast.id)}
                            >
                            <img src="open-preview-button.png" alt="Open Preview" />
                        </button>
                        {/* FAVORITES BUTTON */}
                        <img onClick={toggleFavorite} className="favorite--icon" src={isFavorite ? "./filled-heart-icon.png" : "./empty-heart-icon.png" } />
                        {/* (*5*) UNFAVORITE PODCAST (user clicks "x" icon from sidebar.jsx) */}
                        {/* <Sidebar xClicked={allPodcastsView.isFavorite} handleClick={toggleFavorite} /> */}
                    </div >  
                    <div className="preview--text">     
                        <h2>{podcast.title}</h2>
                        <p>{podcast.description.split(' ').slice(0, 20).join(' ')}...</p> {/* 'split' splits description into array of individual words. 'slice 0,20' extract first 20 words from array, which we join back together. Then append with '...' */}
                        <p><span class="preview--bold--text">Seasons:</span> {podcast.seasons}</p>
                        <p><span class="preview--bold--text">Genres:</span> {podcast.genres.map(genreId => genreMapping[genreId]).join(', ')}</p>
                        <p><span class="preview--bold--text">Updated:</span> {format(new Date(podcast.updated), "d MMMM yyyy, HH:mm a")}</p>
                    </div> 
                </div> 
            ))}
            </div>

            {selectedPodcast && (
                <div className={`modal--overlay ${selectedPodcast ? '' : 'hidden'}`}>
                    <div className="modal--content">
                        <p className="podcast--title">{selectedPodcast.title}</p>
                        <img src={selectedPodcast.image} className="selected--podcast--image" />
                        <p className="podcast--description">{selectedPodcast.description}</p>

                        {/* Display the seasons */}
                        <div>
                            <h3 className="podcast--seasons--title">Seasons:</h3>
                            {selectedPodcast.seasons.map(season => (
                                <div> 
                                    <div className="podcast--seasons--season" key={season.season}></div>
                                    <p>{season.title}</p>
                                    <img src={season.image} className="selected--podcast--season--image"/>

                                        {/* Display the episodes*/}
                                        <div>
                                            <h4 className="podcast--episodes--title">Episodes:</h4>
                                            {season.episodes.map(episode => ( // for each episode, return...
                                                <div key={episode.episode}>
                                                    <p>{`Episode ${episode.episode}: ${episode.title}`}</p>
                                                    <p>{episode.description}</p>
                                                    <p>{episode.file}</p>
                                                </div>
                                            ))}
                                        </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                )}
        
            <footer className="footer">
            <h1> © 2023 devkirstenm development. All rights reserved.</h1>
            </footer>
        </main>
    )
}

