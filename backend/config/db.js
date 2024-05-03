import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://rishisaxena:Ri5hi51x5n1@cluster0.cj5ofof.mongodb.net/food-del"
    )
    .then(() => console.log("DB Connected"));
};
