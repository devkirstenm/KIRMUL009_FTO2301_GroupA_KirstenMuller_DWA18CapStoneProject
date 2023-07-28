import React, { useRef } from "react"
import {BsArrowLeftShort} from "react-icons/bs"
import {BsArrowRightShort} from "react-icons/bs"
import {FaPlay} from "react-icons/fa"
import {FaPause} from "react-icons/fa"


export default function AudioPlayer() {

    // state
    const [isPlaying, setIsPlaying] = React.useState(false); // by default, player is not playing automatically
    const [duration, setDuration] = React.useState(0); // default is 0
    const [currentTime, setCurrentTime] = React.useState(0);

    // references
    const audioPlayer = useRef(); // reference to the audio component
    const progressBar = useRef(); // reference to the progress bar
    const animationRef = useRef(); // reference to the animation (tracking progress bar)

    // logic
    React.useEffect(() => {
        const seconds = Math.floor(audioPlayer.current.duration);
        setDuration(seconds);
        progressBar.current.max = seconds;
    }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState]); // component will run as soon as the audio player has loaded (metadata/audio player is ready/exists). audio file may have not loaded yet so you will want to include this

    const calculateTime = (secs) => {
        const minutes = Math.floor(secs / 60);
        const returnedMinutes = minutes < 10 ?  `0${minutes}` : `${minutes}`; // return minutes with a 0 in front
        const seconds = Math.floor(secs % 60); // % = to get the remainder
        const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`; 
        return `${returnedMinutes} : ${returnedSeconds}`;
    }          

    const togglePlayPause = () => {
        const prevValue = isPlaying; // needs to know what it what the prevValue was (play or pause) to provide the opposite
        setIsPlaying(!prevValue) 
        if (!prevValue) {
            audioPlayer.current.play();
            animationRef.current = requestAnimationFrame(whilePlaying) // reference the animation. "request animation frame" is a built is JS function
        }
        else {
            audioPlayer.current.pause();
            cancelAnimationFrame(animationRef.current) // JS function
        }
    }

    const whilePlaying = () => {
        progressBar.current.value = audioPlayer.current.currentTime;
        changePlayerCurrentTime()
        animationRef.current = requestAnimationFrame(whilePlaying) 
    }

    const changeRange = () => {
        audioPlayer.current.currentTime = progressBar.current.value;
        changePlayerCurrentTime()
    }

    const changePlayerCurrentTime = () => {
        progressBar.current.style.setProperty('--seek-before-width', `${progressBar.current.value / duration * 100}%`)
        setCurrentTime(progressBar.current.value)
    }

    const backTen = () => {
        progressBar.current.value = Number(progressBar.current.value - 10)
        changeRange()
    }

    const forwardTen = () => {
        progressBar.current.value = Number(progressBar.current.value + 10)
        changeRange()
    }

    return (
        <div className="audio--player">
            <audio ref={audioPlayer} src="https://podcast-api.netlify.app/placeholder-audio.mp3"></audio>
            <button className="forward--backward--button" onClick={backTen}><BsArrowLeftShort className="forward--backward--button"/> 10</button>
            <button onClick={togglePlayPause} className="play--pause--button">
                { isPlaying ? <FaPause className="pause--button" /> : <FaPlay className="play--button"/> } {/* conditional: if it's playing (aka it's true), then display pause icon, otherwise the play button */}
            </button>
            <button className="forward--backward--button" onClick={forwardTen}>10 <BsArrowRightShort className="forward--backward--button"/></button>

            {/* current time */}
            <div className="current--time">{calculateTime(currentTime)}</div> {/* calculateTime is a function to display the format of time correctly */}

            {/* progress bar */}
            <div className="progress--bar">
                <input type="range" defaultValue="0" ref={progressBar} onChange={changeRange}/>
            </div>

            {/* duration */}
            <div className="duration">{(duration && !isNaN(duration)) && calculateTime(duration)}</div> {/* *not working* needed to add conditional statement because of bug. Bug: time display NaN when audio isn't playing - it's trying to display the duration before it's ready */}


        </div>
    )
}
