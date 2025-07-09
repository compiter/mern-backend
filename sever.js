import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/userRoute.js";
dotenv.config();
const app = express();
app.use(express.json());
app.use(express.static("public"));
const dbuser = encodeURIComponent(process.env.DBUSER);
const dbpass = encodeURIComponent(process.env.DBPASS);

// mongoose.connect(`mongodb://localhost:27017/merncafe`).then(() => {
//   app.listen(8080, () => {
//     console.log("Server started");
//   });
// });

// mongoose
// .connect(`mongodb+srv://${dbuser}:${dbpass}@cluster0.tiuin8d.mongodb.net/merncafe?retryWrites=true&w=majority&appName=Cluster0`

// )
// .then(() => {
//     app.listen(8080, () => {
//     console.log("Server started");
//     });
// });

// app.use("/api/users", userRouter);


mongoose
.connect(`mongodb+srv://${dbuser}:${dbpass}@cluster0.tiuin8d.mongodb.net/merncafe?retryWrites=true&w=majority&appName=Cluster0`)
.then(() => {
app.listen(8080, () => {
console.log("✅ Server started");
});
})
.catch((err) => {
console.error(" MongoDB connection error:", err.message);
});

app.use("/api/users", userRouter);