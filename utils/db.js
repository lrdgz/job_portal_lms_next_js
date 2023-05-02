import mongoose, { mongo } from "mongoose";

const connection = {};

async function connectDB(){
  if(connection.isConnected) {
    console.log("Database already connected");
    return;
  }

  if(mongoose.connections.length > 0) {
    connection.isConnected = mongoose.connections[0].readyState;
    if(connection.isConnected === 1) {
      console.log("Use database previous connection");
      return;
    } 
    
    await mongoose.disconnect();
    const db = await mongoose.connect("mongodb://0.0.0.0:27017/lms");
    console.log("New connection to database");
    connection.isConnected = db.connections[0].readyState;
  }
}

const db = { connectDB };
export default db;