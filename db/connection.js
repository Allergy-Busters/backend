const mongoose = require("mongoose");

const mongoURI = "mongodb://127.0.0.1:27017/entries";

// Need to change the above to: 
// const MONGODB_URI = process.env.MONGODB_URI

// You'd also need to change below to:
// mongoose.connect(MONGO_URI, {...})

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(instance => {
    console.log(`Connected to the db: ${instance.connections[0].name}`);
  })
  .catch(err => console.log(`Connection failed`, err));

module.exports = mongoose;
