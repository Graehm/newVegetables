const React = require('react')
function New ()  {
    return(<form action = 'vegetable/new' method= 'Post'>Name Your Veggie:<input type = 'text'></input><input type = 'submit'></input></form>)
}
module.exports = New 