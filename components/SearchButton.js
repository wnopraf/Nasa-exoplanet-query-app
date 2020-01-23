import { search } from "../lib/filter"

export default ({ filters, setFilters, data, setFilteredData, setCleared }) => {
  const { formFilters } = filters
  const doSearch = () => {
    setCleared(false)
    setFilters({ formFilters, isNotFiltered: false })
    search(filters, setFilters, setFilteredData, data)
  }
  return (
    <button
      className=" button button-texture focus:outline-none bg-gray-300 mr-1"
      onClick={doSearch}
    >
      Search
    </button>
  )
}
