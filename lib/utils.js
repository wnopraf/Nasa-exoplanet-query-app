const isNotSelected = filter =>
  Object.keys(filter).every(key => filter[key] === "null")

const resetFilter = filters => {
  Object.keys(filters).forEach(key => (filters[key] = "null"))
}

export { isNotSelected, resetFilter }
