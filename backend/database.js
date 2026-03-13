import mongoose from "mongoose"

mongoose.connect("mongodb://localhost:27017/PriceSmartDB")

//Comprobar que todo funciona

const connection = mongoose.connection;

connection.once("open", ()=>{
    console.log("DB is connected")
})

connection.on("disconected", ()=>{
    console.log("DB is disconected")
})

connection.on("error", ()=>{
    console.log("error found" + error)
})