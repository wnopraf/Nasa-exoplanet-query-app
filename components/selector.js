import React from "react"
import { FaCaretDown } from "react-icons/fa"
export default ({ stateLabel, infoLabel, data, filters, setFilters }) => {
  const { formFilters, isNotFiltered } = filters
  return (
    <div className="py-3 sm:w-1/2 sm:px-2 lg:w-1/4 relative">
      <label className="capitalize pl-2" htmlFor={stateLabel}>
        {infoLabel}
      </label>
      <select
        className=" block w-full  mt-2 py-1 pl-3 border border-gray-500 select-shadow cursor-pointer bg-gray-200 select-gradient focus:outline-none"
        onChange={e => {
          console.log("selected", e.target.value)
          setFilters({
            formFilters: {
              ...formFilters,
              [stateLabel]: e.target.value
            },
            isNotFiltered
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
      <i className="absolute position-right-middle">
        <FaCaretDown />
      </i>
    </div>
  )
}
