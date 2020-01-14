import { search } from "../lib/filter"

export default ({ filters, setFilters, data, setFilteredData, setCleared }) => {
  const doSearch = () => {
    setCleared(false)
    search(filters, setFilters, setFilteredData, data)
  }
  return (
    <button className=" button bg-gray-300 mr-1" onClick={doSearch}>
      Search
    </button>
  )
}
