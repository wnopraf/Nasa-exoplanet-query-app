import React, { useState, useEffect } from "react"
import Selector from "../components/selector"
import SearchButton from "../components/SearchButton"
import ClearButton from "../components/ClearButton"
import planets from "../planets_2020.json"
import { search } from "../lib/filter"
import { DataTable } from "../components/DataTable"

import { isNotSelected } from "../lib/utils"
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

  let itemsPerPage = 100
  let totalPages = Math.round(planets.length / 100)
  let actualPage
  const [filteredData, setFilteredData] = useState([])
  console.log(filters, "filters state")
  /*  useEffect(() => {
    console.log("second effect")
    window.addEventListener("scroll", onScroll)
    function onScroll(e) {
      const scrollLimit = e.target.scrollingElement.scrollHeight
      if (window.scrollY + window.innerHeight === scrollLimit) {
        if (actualPage < totalPages) {
          console.log("fkeys", filters)
          const newData = [
            ...filteredData,
            ...planets.slice(itemsPerPage, itemsPerPage * actualPage)
          ]
          if (isNotFiltered(filters.formFilters)) {
            console.log("filtered data")
            search(filters, setFilteredData, newData)
          } else {
            setFilteredData(newData)
          }

          actualPage += 1
        }
      }

      console.log("page", actualPage)
    }
    actualPage = 1
    return () => window.removeEventListener("scroll", onScroll)
  }, [filters]) */

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
