const multer = require("multer");

const storage = multer.memoryStorage();
let singleUpload = multer({ storage }).single("file");
module.exports = { singleUpload };
