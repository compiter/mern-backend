// import express from "express";
// import mongoose from "mongoose";
// import dotenv from "dotenv";
// import userRouter from "./routes/userRoute.js";
// dotenv.config();
// const app = express();
// app.use(express.json());
// app.use(express.static("public"));
// const dbuser = encodeURIComponent(process.env.DBUSER);
// const dbpass = encodeURIComponent(process.env.DBPASS);

// // mongoose.connect(`mongodb://localhost:27017/merncafe`).then(() => {
// //   app.listen(8080, () => {
// //     console.log("Server started");
// //   });
// // });

// // mongoose
// // .connect(`mongodb+srv://${dbuser}:${dbpass}@cluster0.tiuin8d.mongodb.net/merncafe?retryWrites=true&w=majority&appName=Cluster0`

// // )
// // .then(() => {
// //     app.listen(8080, () => {
// //     console.log("Server started");
// //     });
// // });

// // app.use("/api/users", userRouter);


// mongoose
// .connect(`mongodb+srv://${dbuser}:${dbpass}@cluster0.tiuin8d.mongodb.net/merncafe?retryWrites=true&w=majority&appName=Cluster0`)
// .then(() => {
// app.listen(8080, () => {
// console.log("✅ Server started");
// });
// })
// .catch((err) => {
// console.error(" MongoDB connection error:", err.message);
// });

// app.use("/api/users", userRouter);


import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import userRouter from "./routes/userRoute.js";

// Load environment variables
dotenv.config();

const app = express();
app.use(cors())

// Middlewares
app.use(express.json());
app.use(express.static("public"));

// Read and encode DB credentials
const dbuser = encodeURIComponent(process.env.DBUSER);
const dbpass = encodeURIComponent(process.env.DBPASS);

// Connect to MongoDB Atlas
mongoose
.connect(
    `mongodb+srv://${dbuser}:${dbpass}@cluster0.tiuin8d.mongodb.net/merncafe?retryWrites=true&w=majority&appName=Cluster0`
)
.then(() => {
    app.listen(8080, () => {
    console.log("Server started on http://localhost:8080");
    });
})
.catch((err) => {
    console.error(" MongoDB connection error:", err.message);
});

// Routes
app.use("/api/users", userRouter);





// mongosh mongodb+srv://kynyay5678:Abc_2004@cluster0.tiuin8d.mongodb.net/merncafe?retryWrites=true&w=majority&appName=Cluster0