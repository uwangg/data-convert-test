// npm install xlsx
var XLSX = require('xlsx');

function readExcelFile(fileName, sheetIdx) {
	var workbook = XLSX.readFile('./data/' + fileName);
	var sheetNameList = workbook.SheetNames;	// sheetList
	var worksheet = workbook.Sheets[sheetNameList[sheetIdx]];	// 선택한 sheet 내용
	
	var headers = {};
	var data = [];
	for( z in worksheet ) {
		if( z[0] === '!' ) continue;
		var col = z.substring(0, 1);	// A, B, C, D ..
		var row = parseInt(z.substring(1));	// 1, 2, 3, 4 ..
		var value = worksheet[z].v;

		// header 생성
		if( row == 1 ) {
			headers[col] = value;
			continue;
		}

		if( !data[row] ) data[row] = {};
		data[row][headers[col]] = value;
	}
	// 2번째부터 시작했으므로 shift처리
	data.shift();
	data.shift();
	return data;
};

// var fileName = "동네예보조회서비스_격자_위경도.xlsx";
// var sheetIdx = 0;
// var data = readExcelFile(fileName, sheetIdx);

var fileList = [{
	"fileName": "동네예보조회서비스_격자_위경도.xlsx",
	"sheetIdx": 0
},
{
	"fileName": "KIKmix.20180301.xlsx",
	"sheetIdx": 0
}];

var dataList = [];
for(var i = 0 ; i < fileList.length ; i++){
	if(i == 0) continue;
	var file = fileList[i];
	dataList.push(readExcelFile(file['fileName'], file['sheetIdx']));
}
