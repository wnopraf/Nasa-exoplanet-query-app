import React from "react"

export default ({ stateLabel, infoLabel, data, filters, setFilters }) => {
  const { formFilters } = filters
  return (
    <div className="py-3 sm:w-1/2 sm:px-2 lg:w-1/4">
      <label className="capitalize pl-2" htmlFor={stateLabel}>
        {infoLabel}
      </label>
      <select
        className=" block w-full  mt-2"
        onChange={e => {
          console.log("selected", e.target.value)
          setFilters({
            formFilters: {
              ...formFilters,
              [stateLabel]: e.target.value
            },
            isNotFiltered: false
          })
        }}
        id={stateLabel}
        value={formFilters[stateLabel]}
      >
        <option value={"null"}>{stateLabel}</option>
        {data.map((e, i) => {
          return (
            <option key={i} value={e[stateLabel]}>
              {e[stateLabel]}
            </option>
          )
        })}
      </select>
    </div>
  )
}
