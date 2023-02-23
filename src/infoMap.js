export const INFO_MAP = new Map()

addMapping([0], "Clear sky")
addMapping([1, 2, 3], "Mainly clear")
addMapping([45, 48], "Fog")
addMapping([51, 53, 55], "Drizzle")
addMapping([56, 57], "Freezing Drizzle")
addMapping([61, 63, 65], "Rain")
addMapping([66, 67], "Freezing Rain")
addMapping([71, 73, 75], "Snow fall")
addMapping([77], "Snow grains")
addMapping([80, 81, 82], "Rain showers")
addMapping([85, 86], "Snow showers")
addMapping([95], "Thunderstorm")
addMapping([96, 99], "Thunderstorm with slight and heavy hail")

function addMapping(values, text) {
  values.forEach((value) => {
    INFO_MAP.set(value, text)
  })
}
