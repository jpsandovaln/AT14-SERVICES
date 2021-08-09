const FileModel = require("../database/fileModel");

const getData = async (req, res) => {
    const data = await FileModel.find().lean().exec();
    res.status(200).send({ data });
};

const findDataById = async (req, res) => {
    const data = await FileModel.findById(req.params.id);
    res.status(200).send({ data });
};

const deleteDataById = async (req, res) => {
    const deleteData = await FileModel.deleteOne({ _id: req.params.id });
    res.status(200).send({ deleteData });
};

const updateDataById = async (req, res) => {
    const updatedData = await FileModel.updateOne(
        { _id: req.params.id },
        { $set: { name: req.body.name } }
    );
    res.status(200).send({ updatedData });
};

module.exports = {
    getData,
    deleteDataById,
    findDataById,
    updateDataById,
};
