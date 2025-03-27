const mongoose = require("mongoose");

const PrinterModelSchema = new mongoose.Schema({
    modelName: { type: String, required: true },
    requiresLogin: { type: Boolean, default: false },
    automationSteps: { type: Array }, // Passos para automação com Python
});

module.exports = mongoose.model("PrinterModel", PrinterModelSchema);
