const isNotSelected = filter =>
  Object.keys(filter).every(key => filter[key] === "null")

const resetFilter = filters => {
  Object.keys(filters).forEach(key => (filters[key] = "null"))
}

const findPlanetName = (data, hostName) => {
  let name = data.find(planet => planet["pl_hostname"] === hostName)
  name = name["pl_name"]
  return name
}
export { isNotSelected, resetFilter, findPlanetName }
