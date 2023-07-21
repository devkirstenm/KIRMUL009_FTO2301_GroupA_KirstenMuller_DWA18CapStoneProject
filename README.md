# Notes (to come back to)

## STEP-BY-STEP: GETTING AND INTERACTING WITH THE API DATA
 STEP 1. pull data from API
 ```js
    fetch("https://podcast-api.netlify.app/shows")
                .then(res => res.json()) 
                .then(data => setPodcastsPreviewData(data))
```
STEP 2. map over array of data to display items on screen
 ```js
 return (
    {podcastsPreviewData.map(podcast => ( // parameter 'podcast' represents each item (EACH PODCAST) in the array during each iteration of the .map function. It could be called anything!
        <div key={podcast.id}>
            <img src={podcast.image} />                         
            <h2>{podcast.title}</h2>
        </div>
```
STEP 3. To interact with these items we are still missing something



## Conditional rendering
When should you use &&, when should you use a ternary operator, and when should you use a regular if statement.

```js
 const [isFavorite, setIsFavorite] = React.useState(false)
        
        function toggleFavorite() {
            setIsFavorite(prevFavorite => !prevFavorite)

return (
    <div>
        {/* 1. '&&' IS USEFUL IF YOU WANT SOMETHING TO DISPLAY OR NOT*/}
        {/* if both of these are true, e.g., if isFavorite === true, display seasons. The computer first checks the truthiness of the first statement, and if it's not truthy (it's false), it completely skips what comes after since it already knows this condition will not satisfy what the && is expecting (both to be true). Therefore this is useful is you want to display/hide an element is something is true/false */}

        {isFavorite && <p>Seasons: {podcast.seasons}</p>}
        
        {/* 2. TERNARY (? :) IS USEFUL IF YOU WANT TO CHOOSE BETWEEN WHAT GETS DISPLAYED (e.g., black or white pic*/}
        <img onClick={toggleFavorite} src={isFavorite ? "./filled-heart-icon.png" : "./empty-heart-icon.png"} />
    </div
)
```

        3. IF STATEMENTS are useful if you have to choose between more than 2 elements to display, then use a regular if statement
```js
        if() {
            else
        }
```

## Receiving props in a component
Regarding this first line in this extract from my Main.jsx
```js
{podcastsPreviewData.map(podcast => ( // parameter 'podcast' represents each item in the array during each iteration of the .map function (see README.md for more of an explanation)
    <div key={podcast.id} className="podcast-preview">
        <img src={podcast.image} />                       
        <h2>{podcast.title}</h2>
```
These notes may help you understand (or look at lesson 10 of Airbnb)
```js
// in contact.js: "whatever" contains...
// an object that has...
// 4 properties...
// that match what we have as our prop in app.js

// SOME OF THE CODE:
export default function Contact(whatever) { // props
    console.log(whatever) // props
    return (
        <div className="contact-card">
            <img src="./images/mr-whiskerson.png"/>
            <h3>Mr. Whiskerson</h3>
            <div className="info-group">
                <img src="./images/phone-icon.png" />
                <p>(212) 555-1234</p>
            </div>

CONSOLE:
{image: "./images/mr-whiskerson.png", name: "Mr. Whiskerson", phone: "(212) 555-1234", email: "mr.whiskaz@catnap.meow"}
›{img: "./images/fluffykins.png", name: "Fluffykins", phone: "(212) 555-2345", email: "fluff@me.com"}
›{img: "./images/felix.png", name: "Felix", phone: "(212) 555-4567", email: "thecat@hotmail.com"}
›{img: "./images/pumpkin.png", name: "Pumpkin", phone: "(0800) CAT KING", email: "pumpkin@scrimba.com"}
```
And thats why we access these properties using for example "whatever.img" (usually the name "props" is used instead of whatever)

## .map lesson
https://scrimba.com/learn/learnreact/review-array-map-co4f44cfb9e4575776dc759eb

IMPORTANT TO UNDERSTAND: you use .map to access specific items from data that may contain multiple items. These items are assigned unique keys. 

This is the correlation between ".map" & "key=" as they will be used together.

## key prop lesson
Used to access a specific item/show/person that's assigned a unique key
e.g., key={props.id} 
https://scrimba.com/learn/learnreact/project-key-prop-cod824954b2c1feecf545bc49

## display "sold out" badge on only specific items
https://scrimba.com/learn/learnreact/project-sold-out-badge-cod6a41078bdec8db3c39513b

## lesson 25: spread operator
```js
<Card
    key={item.id}
    {...item} // spread operator
    
/>
 ```

 ## We started learning about state - Meme generator, lesson 11

 ## REVISE STATE:
LESSON 11: FIRST STATE LESSONS
```JS
/** first value (result) is the default value for state variable, and the 2nd value (the function) is how you want to change the state - which becomes the new verSion of state */
React.useState("Hello")
           console.log(result) // displays: ["Hello", ƒ()]
         
```

LESSON 13: DESTRUCTURING
```JS
const [sayHello, func] = React.useState("Hello")
            console.log(sayHello) // displays: Hello
```

LESSON 13: CHANGING STATE
```JS
// normal variable way:
let isImportant = "Yes"
isImportant = "No" // (can do this with variables.. but not state!)

// state way: 
const [isImportant, func] = React.useState("Yes")
    isImportant = "No" (can't do it like this!)
             
// instead, we are given a 'func' that allows us to make these changes. Name convention: set(+ variable name we called our state)
const [isImportant, setIsImportant] = React.useState("Yes")
    setIsImportant("No") // whatever value we provide is going to be the new version of state
```
THIS ^ WON'T ACTUALLY WORK, it's just an example to show how we change state, because you would actually do it like this:
```js
    const [isImportant, setIsImportant] = React.useState("Yes")
    
    function handleClick() {
        setIsImportant("No")
    }
    
    return (
            <div onClick={handleClick}> // updates the text once clicked
                <h1>{isImportant}</h1> // this is the text to display
            </div>
        </div>
    )
```
            