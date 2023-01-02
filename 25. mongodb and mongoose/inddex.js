const mangoose = require("mongoose");

const mongoURI =
  "mongodb+srv://amir:Amir@335@cluster0.ijadpmx.mongodb.net/?retryWrites=true&w=majority";
mangoose.connect(
  mongoURI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: ServerApiVersion.v1,
  },
  () => {
    console.log("mongodb connected");
  }
);
