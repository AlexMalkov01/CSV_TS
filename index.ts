import { log } from "console"
import { appendFileSync } from "fs"
import { CsvWriter } from "./csvWriter"

export interface IPeymant {
    id:number ,
    to:string,
    from:string,
    notes:string ,
    amount:number,
}


type ColumnPaymant = ("id" | "Кому"| "От кого"| "Сумма" | "Комментарий")[];


const writer = new CsvWriter<IPeymant> (["id" , "Кому", "От кого", "Сумма" , "Комментарий"]
    ,["id", "to" , "from" , "notes" , "amount" ])

writer.addRows([{id:1,to:"Alex",from:"Nastia",notes:"Спасибо" , amount:50000},{id:2,to:"Alexei",from:"Nastia",notes:"Спасибо" , amount:5000}])

writer.save("data/data.csv")

