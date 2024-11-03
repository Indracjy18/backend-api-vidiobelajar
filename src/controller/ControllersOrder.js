const {
  allOrder,
  createOrder,
  updateOrder,
  deleteOrder,
  detailOrder,
} = require("../models/modelOrder");

const getAllOrder = async (req, res) => {
  try {
    const result = await allOrder(req.params.id);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

const createOrderSaya = async (req, res) => {
  try {
    let result = await createOrder(
      req.body.user_id,
      req.body.produk_kelas_id,
      req.body.tanggal_order,
      req.body.status
    );
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

const updateOrderSaya = async (req, res) => {
  try {
    let result = await updateOrder(
      req.body.user_id,
      req.body.produk_kelas_id,
      req.body.tanggal_order,
      req.body.status,
      req.params.id
    );
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

const deleteOrderSaya = async (req, res) => {
  try {
    let result = await deleteOrder(req.params.id);
    res.status(204).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

const detailOrderSaya = async (req, res) => {
  try {
    let result = await detailOrder(req.params.id);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};
module.exports = {
  getAllOrder,
  createOrderSaya,
  updateOrderSaya,
  deleteOrderSaya,
  detailOrderSaya,
};
