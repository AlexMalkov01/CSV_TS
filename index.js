"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var CsvWriter = /** @class */ (function () {
    function CsvWriter(columns) {
        this.columns = columns;
        this.csv = columns.join(",") + "\n";
    }
    CsvWriter.prototype.addRows = function (rows) {
        var _this = this;
        var resRows = rows.map(function (row) { return _this.formatRow(row); }).join("\n");
        this.csv += resRows;
        console.log(this.csv);
    };
    CsvWriter.prototype.formatRow = function (row) {
        return this.columns.map(function (key) { return row[key]; }).join(",");
    };
    CsvWriter.prototype.save = function (fileName) {
        (0, fs_1.appendFileSync)(fileName, this.csv);
        this.csv = "";
    };
    return CsvWriter;
}());
var writer = new CsvWriter(["id", "to", "from", "notes", "amount"]);
writer.addRows([{ id: 1, to: "Alex", from: "Nastia", notes: "Спасибо", amount: 50000 }, { id: 2, to: "Alexei", from: "Nastia", notes: "Спасибо", amount: 24000 }]);
writer.save("data/data.csv");