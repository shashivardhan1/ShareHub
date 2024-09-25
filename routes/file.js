const router = require("express").Router();
const multer = require("multer");
const { v4: uuidv4 } = require("uuid");
const File = require("../models/file");
const sendRoute = require("./send");
const fs = require("fs");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const dir = "./uploads/";
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }
    cb(null, dir);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 10 * 1024 * 1024 },
}).single("file");

router.use("/send", sendRoute);

router.post("/upload", (req, res) => {
  upload(req, res, async (err) => {
    if (err instanceof multer.MulterError) {
      return res.status(400).json({ error: err.message });
    } else if (err) {
      return res
        .status(500)
        .json({ error: "Something went wrong with the upload." });
    }

    if (!req.file) {
      return res.status(400).json({ error: "File is required" });
    }

    try {
      const file = new File({
        filename: req.file.filename,
        uuid: uuidv4(),
        path: req.file.path,
        size: req.file.size,
      });

      const response = await file.save();
      return res.json({
        shareLink: `${process.env.APP_BASE_URL}/file/${response.uuid}`,
      });
    } catch (saveError) {
      return res.status(500).json({ error: "Error saving file data" });
    }
  });
});

module.exports = router;
