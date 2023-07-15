let Dinero = require('../models/dinero.js');


let getDinero = async (req, res) => {
    try {
        let dinero = await Dinero.find();
        res.json(dinero);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener' });
    }
};


let postDinero = async (req, res) => {
    try {
        let nuevoDinero = new Dinero(req.body);
        let resultado = await nuevoDinero.save();
        res.json(resultado);
    } catch (error) {
        res.status(500).json({ message: 'Error al agregar' });
    }
};


let deleteDinero = async (req, res) => {
    try {
        let { id } = req.params;
        let resultado = await Dinero.findByIdAndDelete(id);
        if (resultado) {
            res.json({ message: 'Registro eliminado' });
        } else {
            res.status(404).json({ message: 'Registro no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar' });
    }
};


let putDinero = async (req, res) => {
    try {
        let { id } = req.params;
        let updatedData = req.body;
        let resultado = await Dinero.findByIdAndUpdate(id, updatedData, { new: true });
        if (resultado) {
            res.json(resultado);
        } else {
            res.status(404).json({ message: 'Registro no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar' });
    }
};


let patchDinero = async (req, res) => {
    try {
        let { id } = req.params;
        let updatedData = req.body;
        let resultado = await Dinero.findByIdAndUpdate(id, updatedData, { new: true });
        if (resultado) {
            res.json(resultado);
        } else {
            res.status(404).json({ message: 'No encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar' });
    }
};

module.exports = {
    getDinero,
    postDinero,
    deleteDinero,
    putDinero,
    patchDinero
};
