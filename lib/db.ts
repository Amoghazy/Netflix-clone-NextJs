import mongoose from "mongoose";
export const DB = {
  isConnect: false,
  connect,
};

function connect() {
  if (DB.isConnect) return;
  else {
    mongoose
      .connect(process.env.MongoURI!)
      .then(() => {
        console.log("DataBase Connected");
      })
      .catch((err) => {
        console.log("==========++++++Error+++++============\n" + err);
      });
    DB.isConnect = true;
  }
}
