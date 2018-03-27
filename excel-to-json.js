// npm install xlsx
var XLSX = require('xlsx');

function readExcelFile(fileName, sheetIdx) {
	var workbook = XLSX.readFile(fileName);
	var sheetNameList = workbook.SheetNames;	// sheetList
	var worksheet = workbook.Sheets[sheetNameList[sheetIdx]];	// 선택한 sheet 내용
	return XLSX.utils.sheet_to_json(worksheet);
};

var fileName = "동네예보조회서비스_격자_위경도.xlsx";
var sheetIdx = 0;
var data = readExcelFile(fileName, sheetIdx);

console.log(data);