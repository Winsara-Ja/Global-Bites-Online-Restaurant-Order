const Catering = require("../models/CateringSchema");
const Menu = require("../models/CateringMenu")

const getCatering = async (req, res) => {
  try {
    const data = await Catering.find({});
    res.json({ success: true, data: data });
  } catch (error) {
    console.log(error);
  }
};

const createCatering = async (req, res) => {
  try {
    const { date, location, headcount, request, id, userID, UserName, total } = req.body;
    const data = await Catering.create({
      UserID: userID,
      UserName: UserName,
      Date: date,
      Location: location,
      Headcount: headcount,
      Special_request: request,
      Price: total,
      Menu_id: id,
    });
    if (data) {
      res.send({ success: true, message: "data created successfuly" });
    }
    if (!data) {
      res.send({ success: false, message: "data Not created" });
    }
  } catch (error) {
    console.log(error);
  }
};

const updateCatering = async (req, res) => {
  try {
    const { id, ...rest } = req.body;
    const data = await Catering.updateOne({ _id: id }, rest);
    res.send({ success: true, message: "updated successfuly", data: data });
  } catch (error) {
    console.log(error);
  }
};

const deleteCatering = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Catering.deleteOne({ _id: id });
    res.send({ success: true, message: "deleted successfully", data: data });
  } catch (error) {
    console.log(error);
  }
};

const getCount = async (req, res) => {
  try {
    const users = await Catering.find({});

    return res.status(200).json({
      count: users.length,
      data: users,
    });
  } catch (err) {
    console.log(err.message);
    res.json({
      success: true,
      message: "distributor count successfully",
      data: data,
    });
  }
};

const getUser = async (req, res) => {
  const id = req.params.id;

  try {
    const discount = await Catering.findById(id);

    if (!discount) {
      return res
        .status(404)
        .send({ success: false, message: "User not found" });
    }

    res.send({
      success: true,
      message: "User fetched successfully",
      data: discount,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({ success: false, message: "Internal Server Error" });
  }
};

const getCateringMenu = async (req, res) => {
  try {
    const data = await Menu.find({});
    res.json(data);
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getCatering,
  createCatering,
  updateCatering,
  deleteCatering,
  getCateringMenu,
  getCount,
  getUser,
};
