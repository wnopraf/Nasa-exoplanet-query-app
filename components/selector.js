import React from "react"

export default ({ stateLabel, infoLabel, data, filters, setFilters }) => {
  const { formFilters } = filters
  return (
    <div className="w-4/5 py-3">
      <label className="capitalize pl-2" htmlFor={stateLabel}>
        {infoLabel}
      </label>
      <select
        className=" block w-full mt-2"
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
