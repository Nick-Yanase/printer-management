const PrinterModel = require("../models/printerModel");

exports.getModels = async (req, res) => {
    try {
        const models = await PrinterModel.find();
        res.json(models);
    } catch (error) {
        res.status(500).json({ error: "Erro ao buscar modelos" });
    }
};

exports.addModel = async (req, res) => {
    try {
        const { name, requiresLogin, automationSteps } = req.body;
        const newModel = new PrinterModel({ name, requiresLogin, automationSteps });
        await newModel.save();
        res.status(201).json(newModel);
    } catch (error) {
        res.status(400).json({ error: "Erro ao adicionar modelo" });
    }
};
