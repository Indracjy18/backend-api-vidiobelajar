const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/images");
  },
  filename: (req, file, cb) => {
    const timestamp = new Date().getTime();
    const fileName = file.fieldname;
    const extension = path.extname(file.originalname);
    cb(null, `${timestamp}-${fileName}${extension}`);
  },
});

const apload = multer({ storage: storage });

module.exports = apload;
