const DataTable = ({
  filteredData,
  filters: { formFilters, isNotFiltered },
  cleared
}) => {
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
      <table className=" table-fixed">
        <thead>
          <tr>
            {Object.keys(formFilters).map((name, i) => {
              return (
                <th className=" w-1/4" key={name}>
                  {name}
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
