var React = require('react');
var Weather = require('Weather');

var WeatherMessage = ({temp, location}) => {
    return(
      <p>It is {temp} in {location}</p>
    );
}

module.exports = WeatherMessage;
