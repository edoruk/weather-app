[Live Website](https://edoruk.github.io/weather-app/)

# Weather App

WeatherApp is an weather website with

1. Current

   - temperature
   - weather condition
   - wind speed

2. Weekly
   - low-high temperatures
   - weather conditions

informations. The data has fetched from 2 APIs;

- [openweathermap](openweathermap.org) for convertion of city name to coordinate

- [open-meteo](https://open-meteo.com/) for fetch info with these coordinates.

Used libraries are `framer-motion` and `axios`.

## Installation

Before cloning project, you should need an API key from [openweathermap](openweathermap.org) and paste that key to URL link of `getCoord` function.

Use the npm or yarn package managers to run on your local environment.

```
npm run dev
```

or

```
yarn dev
```
