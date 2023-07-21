import React from "react"

export default function PodcastCard(props) { // props represents an object (refer to Readme)
    
    /** NB: The ID's come from the other API! the one that contains all the previews, 
    NOT this one below '/id' */

    const [podcastShow, setPodcastShow] = React.useState([])

    const showIDs = []

    React.useEffect(function() {
        console.log("PodcastCard file effect ran! well done")
        fetch("https://podcast-api.netlify.app/id/{<ID>}")
            .then(res => res.json) // json -> js object
            .then(data => setPodcastShow(data))

    })


    return (
        <div>
            {/* specific SHOW preview */}
            <div key={props.id}></div> {/* because this is used as a unique key to access a specific show, we use "key", and put it because the ">" because we aren't trying to display the id on the page, unlike with the properties below */}
            <img src={props.image} />
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <h2>{props.seasons}</h2>
                {/* specific SEASON preview */}
                <p>{props.seasons.season}</p>
                <p>{props.seasons.title}</p>
                <p>{props.seasons.image}</p>
                <p>{props.seasons.episodes}</p>
                    {/* specific EPISODE preview */}
                    <p>{props.seasons.episodes.title}</p>
                    <p>{props.seasons.episodes.description}</p>
                    <p>{props.seasons.episodes.episode}</p>
                    <p>{props.seasons.episodes.file}</p>


        </div>
    )


}

