let Acciones = require('../models/acciones.js');


let getAcciones = async (req, res) => {
    try {
        let acciones = await Acciones.find();
        res.json(acciones);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener' });
    }
};

let postAcciones = async (req, res) => {
    try {
        let nuevoAcciones = new Acciones(req.body);
        let resultado = await nuevoAcciones.save();
        res.json(resultado);
    } catch (error) {
        res.status(500).json({ message: 'Error al agregar' });
    }
};

let deleteAcciones = async (req, res) => {
    try {
        let { id } = req.params;
        let resultado = await Acciones.findByIdAndDelete(id);
        if (resultado) {
            res.json({ message: 'Registro eliminado' });
        } else {
            res.status(404).json({ message: 'Registro no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar' });
    }
};

let putAcciones = async (req, res) => {
    try {
        let { id } = req.params;
        let updatedData = req.body;
        let resultado = await Acciones.findByIdAndUpdate(id, updatedData, { new: true });
        if (resultado) {
            res.json(resultado);
        } else {
            res.status(404).json({ message: 'Registro no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar' });
    }
};

let patchAcciones = async (req, res) => {
    try {
        let { id } = req.params;
        let updatedData = req.body;
        let resultado = await Acciones.findByIdAndUpdate(id, updatedData, { new: true });
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
    getAcciones,
    postAcciones,
    deleteAcciones,
    putAcciones,
    patchAcciones
};
