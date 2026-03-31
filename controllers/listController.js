const List = require("../models/listModel");

const getAllLists = async (req, res) => {
  try {
    const lists = await List.find();
    res.status(200).json(lists);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error retrieving lists", error: err.message });
  }
};

const getSingleList = async (req, res) => {
  try {
    const list = await List.findById(req.params.id);
    if (!list) return res.status(404).json({ message: "List not found" });
    res.status(200).json(list);
  } catch (err) {
    res.status(400).json({ message: "Invalid ID", error: err.message });
  }
};

const getListsByUser = async (req, res) => {
  try {
    const userLists = await List.find({ user: req.params.userId });
    if (!userLists || userLists.length === 0) {
      return res.status(404).json({ message: "No lists found for this user" });
    }
    res.status(200).json(userLists);
  } catch (err) {
    res.status(400).json({ message: "Invalid User ID", error: err.message });
  }
};

module.exports = { getAllLists, getSingleList, getListsByUser };
