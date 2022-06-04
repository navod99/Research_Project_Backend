const multer = require('multer');
let path = require('path');

module.exports = multer({
    storage: multer.diskStorage({}),
    fileFilter: (req, file, cb) => {
      let ext = path.extname(file.originalname);  
      if (ext !== ".pdf" && ext !== ".docs" && ext !== ".ptx"&& ext !== ".ppt"&& ext !== ".pptx"&& ext !== ".docx"&& ext !== ".doc") {
        cb(new Error("File type is not supported"), false);
        return;
      }
      cb(null, true);
    },
  });