## Emoji-Weather Map

A little evening project to show weather maps using emojis inspired by this recent tweet by the [UK Met Office](https://twitter.com/metoffice/status/928234770684932096). 

Weather data is sourced from OpenWeatherMaps and requires an API token.

You can get a token by signing up for free at [openweathermap.org](https://openweathermap.org/api).

The only available map at the moment is Ireland, but this can be extended by creating a new map in the `maps` folder. 
In future it might be cool to integrate with Twitter, so beware the character limits (280 now?) when designing.
```
📘📘📘📘📘📗📗📗📘📘
📘📘📘📗📗🌧📗📗📗📘
📘📘📘📗📗📗📗📗🌧📘
📘📘📘📘🌧📗📗📗📘📘
📘📗📗📗📗📗📗📗📗📘
📘📘📗📗📗📗📗📗📗📘
📘📗📗📗📗📗📗📗🌛📘
📘📗📗📗📗📗📗📗📗📘
📘📘📘📗📗📗📗📗📗📘
📘📗📗📗📗📗📗📗📗📘
📘📗📗📗🌛📗📗☁️📘📘
📘📘📗📗📘📘📘📘📘📘
```
### Usage

```sh
git clone git@github.com:nigelhanlon/emoji-weather.git
cd emoji-weather
npm install
vim config.js <-- Add your own OpenWeatherMaps API Token
node index.js
```

### Defining a new Map

Each weather map should implement two methods, `weatherMapString` and `getLocations`. 

#### getLocations

This should return an Array of strings matching the format used by OpenWeatherMaps ( {city name},{country code} ).
The country code is not strictly required but it is a good idea to include it if the same city name is present in other countries.

#### weatherMapString

This should return the actual map string, taking as an argument an array of weather emojis in `getLocations` order. 

### Future Development

So many improvements to make, but the top ones would be:
1. Use the Open Weather Maps bulk query API instead of calling once per city. 
2. Improve the way `weatherMapString` is called. Seems messy right now. 
3. Only the primary weather condition is used.

### Contributing

All PRs welcome so feel free to submit. 

### License

This project is licensed under ISC. 