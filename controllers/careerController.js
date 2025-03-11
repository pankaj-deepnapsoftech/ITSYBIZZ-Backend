const asyncHandler = require("express-async-handler");
const careerModel = require("../Modals/careerModel");
const { mongooseError } = require("../middlewares/errorHandler");
const CareerDetail = asyncHandler(async (req, res) => {
  const newReq = req.body;
  try {
    await careerModel.create(newReq);
    res.send("Form Submited sucessfully")
  } catch (error) {
    mongooseError(error, res);
  }
});

const GetCareerDetail = async (req, res) => {
  try {
    const getCareer = await careerModel.find();
    if (getCareer.length > 0) {
      res.send(getCareer);
    } else {
      res.send("No user found");
    }
  } catch (error) {
    res.send(error.message);
  }
};

const DeleteCareer = async (req, res) => {
  try {
    const data = req.params.id;
    let deletecareer = await careerModel.deleteOne({ _id: data });
    if (!deletecareer) {
      res.status(400).send({
        success: false,
        message: "User can't be deleted",
      });
    } else {
      res.status(200).send({
        success: true,
        message: "User deleted successfully",
      });
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = { CareerDetail, GetCareerDetail, DeleteCareer };
