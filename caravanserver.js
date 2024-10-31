// const exprress = require("express");
// const cors = require('cors');
// const router = require("./routes/caravanrout");
// const mongoose = require("mongoose");

// const app = exprress();
// const mongoUri = process.env.MONGO_URI || "mongodb://localhost:27017/motor";

// app.use(cors());
// app.use(exprress.json());
// app.use(router);

// const PORT = process.env.PORT  || 5052;

// mongoose.connect(mongoUri,{
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// }).then(() =>{
//     console.log("Connected MongoDb");
//     app.listen(PORT, () => {
//         console.log('Running:', PORT);
//     });
    
// }).catch(error=>{
//     console.log("MongoDb connecting error");
// })
