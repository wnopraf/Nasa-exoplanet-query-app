import React, { useState, useEffect } from "react"
import Selector from "../components/selector"
import SearchButton from "../components/SearchButton"
import ClearButton from "../components/ClearButton"
import planets from "../planets_2020.json"

import { DataTable } from "../components/DataTable"

import Layout from "../components/Layout"

export default function main() {
  const [filters, setFilters] = useState({
    formFilters: {
      pl_disc: "null",
      pl_discmethod: "null",
      pl_facility: "null",
      pl_hostname: "null"
    },
    isNotFiltered: false
  })
  const [cleared, setCleared] = useState(true)

  const [filteredData, setFilteredData] = useState([])
  console.log(filters, "filters state")

  return (
    <Layout>
      <div className="selectors sm:flex  justify-center items-center flex-wrap">
        <Selector
          stateLabel="pl_discmethod"
          filters={filters}
          setFilters={setFilters}
          data={planets}
          infoLabel="discovery method"
        />
        <Selector
          stateLabel="pl_disc"
          filters={filters}
          setFilters={setFilters}
          data={planets}
          infoLabel="discovery year"
        />
        <Selector
          stateLabel="pl_facility"
          filters={filters}
          setFilters={setFilters}
          data={planets}
          infoLabel="discovery facility"
        />
        <Selector
          stateLabel="pl_hostname"
          filters={filters}
          setFilters={setFilters}
          data={planets}
          infoLabel="host name"
        />
      </div>
      <div className="action_buttons my-6 flex justify-center items-center">
        <SearchButton
          setFilteredData={setFilteredData}
          setFilters={setFilters}
          filters={filters}
          data={planets}
          setCleared={setCleared}
        />
        <ClearButton
          setCleared={setCleared}
          data={planets}
          setFilters={setFilters}
        />
      </div>

      <DataTable
        filteredData={filteredData}
        filters={filters}
        cleared={cleared}
      />
    </Layout>
  )
}
