import { isNotSelected } from "./utils"

const search = (filters, setFilters, setFilteredData, data) => {
  const { formFilters } = filters
  const filteredKeys = Object.keys(formFilters).filter(
    key => formFilters[key] !== "null"
  )

  if (isNotSelected(formFilters)) {
    setFilters({ formFilters: { ...formFilters }, isNotFiltered: true })
    setFilteredData([])
    return
  }

  data = data.filter(e => {
    switch (filteredKeys.length) {
      case 1:
        return e[filteredKeys[0]] === formFilters[filteredKeys[0]]

      case 2:
        return (
          e[filteredKeys[0]] === formFilters[filteredKeys[0]] &&
          e[filteredKeys[1]] === formFilters[filteredKeys[1]]
        )
      case 3:
        return (
          e[filteredKeys[0]] === formFilters[filteredKeys[0]] &&
          e[filteredKeys[1]] === formFilters[filteredKeys[1]] &&
          e[filteredKeys[2]] === formFilters[filteredKeys[2]]
        )
      case 4:
        return (
          e[filteredKeys[0]] === formFilters[filteredKeys[0]] &&
          e[filteredKeys[1]] === formFilters[filteredKeys[1]] &&
          e[filteredKeys[2]] === formFilters[filteredKeys[2]] &&
          e[filteredKeys[3]] === formFilters[filteredKeys[3]]
        )
    }
  })

  setFilteredData(data)
}

export { search }
