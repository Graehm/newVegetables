const React = require('react')

function Index(props) {
    return (
        <div>
            <h1>Vegetable Index Page</h1>
            <a href="/vegetables/new">Creat A New Veggie Here</a>
            <ul>
                {
                    props.vegetables.map((vegetable) => {
                        return (
                            <li key={vegetable._id}>
                                 <a href={`/vegetables/${vegetable._id}`}>{vegetable.name}</a> is {vegetable.color}
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

module.exports = Index