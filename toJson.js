const fs = require("fs")
const csvToJson = require("csvtojson")
const csvPath = "./planets_2020.csv"

csvToJson()
  .fromFile(csvPath)
  .then(data => {
    fs.writeFileSync("./planets_2020.json", JSON.stringify(data, null, 2))
  })
  .catch(e => console.log(e))
