const { pool } = require("../config/connection");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const bcrypt = require("bcrypt");
const { v4: uuidv4 } = require("uuid");
const {
  allUser,
  createUser,
  updateUser,
  deleteUser,
  findUserByEmail,
  createUserWithToken,
  verifyUserToken,
} = require("../models/users");

const saltRounds = 10;
const jwtSecret = process.env.JWT_SECRET; // Ambil dari .env

// Fungsi untuk mengirim email verifikasi
const sendVerificationEmail = async (email, token) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER, // Ambil dari .env
      pass: process.env.EMAIL_PASS, // Ambil dari .env
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Account Verification",
    text: `Click the link to verify your account: http://localhost:3000/verify-email?token=${token}`,
  };

  return transporter.sendMail(mailOptions);
};

// Fungsi Register
const register = async (req, res) => {
  try {
    const { username, email, fullname, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const token = uuidv4();

    const result = await createUserWithToken(
      username,
      email,
      fullname,
      hashedPassword,
      token
    );
    await sendVerificationEmail(email, token);

    res.status(201).json({
      message:
        "User registered. Please check your email to verify your account.",
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

// Fungsi Login
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await findUserByEmail(email);

    if (!user) {
      return res
        .status(404)
        .json({ message: "Email or password is incorrect" });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res
        .status(401)
        .json({ message: "Email or password is incorrect" });
    }

    const token = jwt.sign({ userId: user.id }, jwtSecret, { expiresIn: "1h" });
    res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    res.status(500).json(error);
  }
};

// Fungsi Verifikasi Email
const verifyEmail = async (req, res) => {
  try {
    const { token } = req.query;
    const verified = await verifyUserToken(token);

    if (!verified) {
      return res.status(400).json({ message: "Invalid verification token" });
    }

    res.status(200).json({ message: "Email verified successfully" });
  } catch (error) {
    res.status(500).json(error);
  }
};

const getAllUsers = async (req, res) => {
  try {
    let result = await allUser();
    res.json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

const createNewUsers = async (req, res) => {
  try {
    let result = await createUser(req.body.nama, req.body.email);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

const updateUsers = async (req, res) => {
  try {
    let result = await updateUser(req.body.nama, req.body.email, req.params.id);
    res.json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

const deleteUsers = async (req, res) => {
  try {
    let result = await deleteUser(req.params.id);
    res.status(204).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

const getDetailUsers = (req, res) => {
  const sql = "SELECT * FROM user WHERE id = ? ";
  const values = [req.params.id];
  pool.execute(sql, values, (err, rows) => {
    if (err) {
      res.json({
        message: "Get Detail User",
        error: err.message,
      });
    } else {
      res.json({
        message: "success",
        data: rows,
      });
    }
  });
};

module.exports = {
  getAllUsers,
  createNewUsers,
  updateUsers,
  deleteUsers,
  getDetailUsers,
  register,
  login,
  verifyEmail,
};
