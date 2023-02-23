export const ICON_MAP = new Map()

const today = new Date()
let time = today.getHours()
console.log(time)

if (time <= 18 && time > 6) {
  addMapping([0, 1, 2, 3], "day")
  addMapping([45, 48], "cloudy")
  addMapping([51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82], "rainy-1")
  addMapping([71, 73, 75, 77, 85, 86], "snowy-1")
} else {
  addMapping([0, 1, 2, 3], "night")
  addMapping([45, 48], "cloudy")
  addMapping([51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82], "rainy-7")
  addMapping([71, 73, 75, 77, 85, 86], "snowy-4")
}

addMapping([95, 96, 99], "thunder")

function addMapping(values, icon) {
  values.forEach((value) => {
    ICON_MAP.set(value, icon)
  })
}
