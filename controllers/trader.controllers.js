let Trader = require('../models/traders.js')

// Controlador para obtener todos los registros
let getTrader = async (req, res) => {
    try {
        let trader = await Trader.find();
        res.json(trader);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener' });
    }
};

// Controlador para agregar un nuevo registro
let postTrader = async (req, res) => {
    try {
        let nuevoTrader = new Trader(req.body);
        let resultado = await nuevoTrader.save();
        res.json(resultado);
    } catch (error) {
        res.status(500).json({ message: 'Error al agregar' });
    }
};

// Controlador para eliminar un registro
let deleteTrader = async (req, res) => {
    try {
        let { id } = req.params;
        let resultado = await Trader.findByIdAndDelete(id);
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
let putTrader = async (req, res) => {
    try {
        let { id } = req.params;
        let updatedData = req.body;
        let resultado = await Trader.findByIdAndUpdate(id, updatedData, { new: true });
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
let patchTrader = async (req, res) => {
    try {
        let { id } = req.params;
        let updatedData = req.body;
        let resultado = await Trader.findByIdAndUpdate(id, updatedData, { new: true });
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
    getTrader,
    postTrader,
    deleteTrader,
    putTrader,
    patchTrader
};
