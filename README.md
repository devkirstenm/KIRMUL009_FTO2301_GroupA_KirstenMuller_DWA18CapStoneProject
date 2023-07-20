# Notes (to come back to)

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