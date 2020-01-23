import { resetFilter } from "../lib/utils"

export default ({ setCleared, setFilters }) => {
  const clear = () => {
    setFilters(previousState => {
      const { formFilters, isNotFiltered } = previousState

      resetFilter(formFilters)
      return {
        formFilters,
        isNotFiltered
      }
    })
    setCleared(true)
  }

  return (
    <button
      className="button button-texture focus:outline-none ml-1"
      onClick={clear}
    >
      Clear
    </button>
  )
}
