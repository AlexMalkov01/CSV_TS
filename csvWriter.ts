import { log } from "console"
import { appendFileSync } from "fs"
import { IPeymant } from "./index"
 
 export class CsvWriter<K>  {
    private csv:string 
    constructor (private columns:string[] ,private columnKey:(keyof K)[]) {
    this.csv = columns.join(",") + "\n" 
    }

    addRows(rows:K[]):void {
       const resRows = rows.map(row=> this.formatRow(row)).join("\n")

       this.csv += resRows
       console.log(this.csv);
       
       
    }

    formatRow(row:K):string{
        return this.columnKey.map((key)=> row[key] ).join(",")
    }

    save(fileName:string):void {
        appendFileSync(fileName,this.csv)
        this.csv = ""
    }
}