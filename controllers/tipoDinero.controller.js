let TipoDinero = require('../models/tipoDinero.js');


let getTipoDinero = async (req, res) => {
    try {
        let tipoDinero = await TipoDinero.find();
        res.json(tipoDinero);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener' });
    }
};


let postTipoDinero = async (req, res) => {
    try {
        let nuevoTipoDinero = new TipoDinero(req.body);
        let resultado = await nuevoTipoDinero.save();
        res.json(resultado);
    } catch (error) {
        res.status(500).json({ message: 'Error al agregar' });
    }
};


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


let putTipoDinero = async (req, res) => {
    try {
        let { id } = req.params;
        let updatedData = req.body;
        let resultado = await TipoDinero.findByIdAndUpdate(id, updatedData, { new: true });
        if (resultado) {
            res.json(resultado);
        } else {
            res.status(404).json({ message: 'No encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar' });
    }
};


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
        res.status(500).json({ message: 'Error al actualizar' });
    }
};

module.exports = {
    getTipoDinero,
    postTipoDinero,
    deleteTipoDinero,
    putTipoDinero,
    patchTipoDinero
};
