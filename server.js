
const express = require("express");
const cors = require("cors");
const router = require("./routes/motorRoutes");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const multer = require("multer");
const path = require("path");
// const upload = require("./controller/motorcontrol")

const authRouter = require("./routes/auth.router");
const caravanRouter = require("./routes/caravanrout");
const tuningrouter = require("./routes/tuningrout");
// const usedCarRouter = require("./routes/usedcarrout");
const campplacerouter = require("./routes/campingplacerout");

dotenv.config();
const app = express();
const mongoUri = process.env.MONGO_URI || "mongodb://localhost:27017/camper";

// app.post('/upload', upload.single('file'));
app.use(cors());
app.use(express.json());
app.use('/auth', authRouter);
app.use(router);
app.use(caravanRouter);
app.use(tuningrouter);
// app.use(usedCarRouter);
app.use(campplacerouter);

// Multer sozlamalari
const storage = multer.diskStorage({
  destination: './uploads/',
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

// Rasm yuklash endpointi
app.post('/upload', upload.single('image'), (req, res) => {
  res.json({ filePath: `/uploads/${req.file.filename}` });
});

// Static fayllarni xizmat qilish
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const PORT = process.env.PORT || 5052;

mongoose
  .connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected to mongoDB");
    app.listen(PORT, () => {
      console.log("server running on port", PORT);
    });
  })
  .catch((error) => {
    console.error("MongoDB connection error", error);
  });
