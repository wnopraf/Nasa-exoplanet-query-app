import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai"

const DataTable = ({
  filteredData,
  setFilteredData,
  filters: { formFilters, isNotFiltered },
  cleared
}) => {
  const sort = (name, dir) => {
    filteredData.sort((a, b) => {
      switch (dir) {
        case "down":
          return a[name] > b[name] ? -1 : a[name] === b[name] ? 0 : 1
        case "up":
          return a[name] > b[name] ? 1 : a[name] === b[name] ? 0 : -1
      }
    })

    setFilteredData([...filteredData])
  }
  if (cleared) return null
  if (isNotFiltered) {
    return (
      <p>
        {" "}
        <span className=" text-red-500">Error</span> you must choose some filter
        to see results
      </p>
    )
  }
  return (
    (filteredData.length && (
      <table className=" table-fixed w-full table-min-width overflow-y-scroll">
        <thead>
          <tr>
            {Object.keys(formFilters).map((name, i) => {
              return (
                <th
                  className={
                    ((i === 0 || i === 3) && "w-1/6") ||
                    ((i === 1 || i === 2) && "w-2/6")
                  }
                  key={name}
                >
                  {name}
                  <span
                    onClick={e => sort(name, "up")}
                    className="caret-icon cursor-pointer inline-block align-text-top"
                  >
                    <AiFillCaretUp />
                  </span>
                  <span
                    onClick={e => sort(name, "down")}
                    className="caret-icon cursor-pointer inline-block align-text-top "
                  >
                    <AiFillCaretDown />
                  </span>
                </th>
              )
            })}
          </tr>
        </thead>

        <tbody>
          {filteredData.map((planet, i) => {
            return (
              <tr key={i}>
                {Object.keys(formFilters).map((name, i) => {
                  return <td key={i}>{planet[name]}</td>
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    )) || <p className="no-results">there's no results with that selection</p>
  )
}

export { DataTable }
