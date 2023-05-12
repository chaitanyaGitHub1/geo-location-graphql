const fs = require("fs");
const { parse } = require("csv-parse");

console.log(__dirname);

fs.createReadStream(`${__dirname}/rawdata.csv`)
  .pipe(parse({ delimiter: ",", from_line: 2 }))
  .on("data", function (row) {
    // console.log(row);
    let obj = {
      first_name: row[2],
      last_name: row[3],
      gender: row[4],
      user_tracking: {
        data: { lat: row[0], lng: row[1] },
      },
    };
    console.log(obj);
  })
  .on("end", function () {
    console.log("finished");
  })
  .on("error", function (error) {
    console.log(error.message);
  });
