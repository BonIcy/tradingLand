let TipoDinero = require('../models/tipoDinero.js');

// Controlador para obtener todos los registros
let getTipoDinero = async (req, res) => {
    try {
        let tipoDinero = await TipoDinero.find();
        res.json(tipoDinero);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener' });
    }
};

// Controlador para agregar un nuevo registro
let postTipoDinero = async (req, res) => {
    try {
        let nuevoTipoDinero = new TipoDinero(req.body);
        let resultado = await nuevoTipoDinero.save();
        res.json(resultado);
    } catch (error) {
        res.status(500).json({ message: 'Error al agregar' });
    }
};

// Controlador para eliminar un registro
let deleteTipoDinero = async (req, res) => {
    try {
        let { id } = req.params;
        let resultado = await TipoDinero.findByIdAndDelete(id);
        if (resultado) {
            res.json({ message: 'Registro eliminado' });
        } else {
            res.status(404).json({ message: 'Registro no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar' });
    }
};

// Controlador para actualizar un registro
let putTipoDinero = async (req, res) => {
    try {
        let { id } = req.params;
        let updatedData = req.body;
        let resultado = await TipoDinero.findByIdAndUpdate(id, updatedData, { new: true });
        if (resultado) {
            res.json(resultado);
        } else {
            res.status(404).json({ message: 'Registro no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar' });
    }
};

// Controlador para actualizar parcialmente un registro
let patchTipoDinero = async (req, res) => {
    try {
        let { id } = req.params;
        let updatedData = req.body;
        let resultado = await TipoDinero.findByIdAndUpdate(id, updatedData, { new: true });
        if (resultado) {
            res.json(resultado);
        } else {
            res.status(404).json({ message: 'Registro no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar parcialmente' });
    }
};

module.exports = {
    getTipoDinero,
    postTipoDinero,
    deleteTipoDinero,
    putTipoDinero,
    patchTipoDinero
};
