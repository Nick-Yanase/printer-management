const Printer = require("../models/printer");

exports.getPrinters = async (req, res) => {
  try{
    const printers = await Printer.find().populate("model")
    res.json(printers)
  }catch(error){
    res.status(500).json({error:"erro ao buscar impressoras" })
  }
}

exports.addPrinters = async (req, res) => {
  try{
    const {name, model, ip} = req.body;
    const newPrinter = new Printer({name, model, ip})
  }catch(error){

  }
}