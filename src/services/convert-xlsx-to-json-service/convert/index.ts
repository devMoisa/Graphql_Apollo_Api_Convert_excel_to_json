let xlsx = require("xlsx");
let path = require("path");
// import fs from "fs";
// import la from './../../../tmp/uploads/'

export const convert = async (streamPipe: any, filename: any) => {
  let wb = xlsx.readFile(`./src/tmp/uploads/${filename}`);

  let sheetName = wb.SheetNames[0];
  let sheetValue = wb.Sheets[sheetName];
  let excelData = xlsx.utils.sheet_to_json(sheetValue);

  // console.log("DEBUG!!!: \n", sheetValue);
  console.log(excelData);
  console.log("\n \n \n \n \n \n");
};
