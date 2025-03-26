const mongoose = require("mongoose");

const PrinterSchema = new mongoose.Schema({
    name: { type: String, required: true },
    model: { type: mongoose.Schema.Types.ObjectId, ref: "PrinterModel", required: true },
    ip: { type: String, required: true },
    serialNumber: { type: String },
    counters: { type: Object },
});

module.exports = mongoose.model("Printer", PrinterSchema);
