import React from "react"

export default function SinglePodcastView() {
    // when user clicks to open a podcast
    const [selectedPodcast, setSelectedPodcast] = React.useState([])
    
    // make a call to the API
    React.useEffect(function() {
        fetch("https://podcast-api.netlify.app/id/<ID>")
            .then(res => res.json())
            .then(data => setSelectedPodcast(data))
        })
    
    return (
        <div>
            {selectedPodcast.map(podcast => (
                <div key={podcast.id} >
                    {/* podcast overall info */}
                    <img src={podcast.image} />
                    <h1>{podcast.title}</h1>
                    <p>{podcast.description}</p>
                    <p>{podcast.seasons}</p>
                        {/* podcast seasons */}
                        <h2>{podcast.seasons.season}</h2>
                        <h3>{podcast.seasons.title}</h3>
                        <img src={podcast.seasons.image} />
                        <p>{podcast.seasons.episodes}</p>
                            {/* podcast episodes */}
                            <h4>{podcast.seasons.episodes.title}</h4>
                            <p>{podcast.seasons.episodes.description}</p>
                            <p>{podcast.seasons.episodes.episode}</p>
                            <div>{podcast.seasons.episodes.file}</div>
                </div>
            ))}
        </div>
    )
}


