const React = require('react')

function New (props) {
    return(
        <div>
            <h1>New Veggie Page</h1>
            <a href='/vegetables'>Go back to Index Page</a>
            <form action="/vegetables" method="POST">
                Name: <input type="text" name="name" /><br/>
                Color: <input type="text" name="color" /><br/>
                Is Ready To Eat :<input type="checkbox" name="readyToEat" /><br/>
                <input type="submit" value="Create Veggie" />
            </form>
        </div>
    )
}

module.exports = New
