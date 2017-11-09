const maps = require('./maps');
const config = require('./config');
const request = require('request-promise');

function callAPI(location) {
  return request({
    uri: config.api.endpoint,
    qs: {
      q: location,
      APPID: config.api.token
    },
    headers: {
        'User-Agent': 'Emoji Weather'
    },
    json: true
  });
}

function weatherToEmoji(data = {}) {

  const defaultTile = '📗';

  if(!data.weather || data.weather.length === 0) {
    return defaultTile;
  }

  // Match OWM Conditions (http://openweathermap.org/weather-conditions)
  const weatherCode = data.weather[0].id;
  const weatherCodeGroup = Math.floor(data.weather[0].id / 100);
  switch(weatherCodeGroup) {
    case 2: return config.icons.thunder;
    case 3: return config.icons.drizzle;
    case 5: return config.icons.rain;
    case 6: return config.icons.snow;
    case 7: return config.icons.fog;
    case 8: 
      if(weatherCode === 802) return config.icons.cloudy;
      
      const currentHour = new Date().getHours();
      if(currentHour >= 6 && currentHour <= 18) {
        return config.icons.sun;
      }
      else{
        return config.icons.moon;
      }
    case 9:
      if(weatherCode === 900) return config.icons.tornado;
      if(weatherCode === 905) return config.icons.wind;
      if(weatherCode <= 955) return config.icons.wind;
      if(weatherCode > 955) return config.icons.extreme;
      return defaultTile;
    default: 
      return defaultTile;
  }
}

function makeWeatherMap(location) {
  if(maps.hasOwnProperty(location)) {

    const map = maps[location];
    const cityList = map.getLocations();

    const weather = cityList.map( async (city) => {
      try {
        return weatherToEmoji( await callAPI(city) );
      }
      catch(err) {
        console.error(err);
        return weatherToEmoji({});
      }
    });

    Promise.all(weather).then(function(results) {
      console.log(map.weatherMapString(results));
      process.exit(0);
    });
  }
  else{
    console.log("🙁 Sorry, unknown location");
    process.exit(-1);
  }
}

makeWeatherMap('ireland');