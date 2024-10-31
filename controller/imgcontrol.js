// const express = require('express');
// const multer = require('multer');
// const path = require('path');

// const app = express();
 

// // Multer sozlamalari
// const storage = multer.diskStorage({
//   destination: './uploads/',
//   filename: (req, file, cb) => {
//     cb(null, `${Date.now()}-${file.originalname}`);
//   },
// });

// const upload = multer({ storage });

// // Rasm yuklash endpointi
// app.post('/upload', upload.single('image'), (req, res) => {
//   res.json({ filePath: `/uploads/${req.file.filename}` });
// });

// // Static fayllarni xizmat qilish
// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
 
