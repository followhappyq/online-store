import mongoose from "mongoose"

mongoose.connect(
  "mongodb+srv://happyq:4ea250e09802@cluster0-irap9.mongodb.net/online-store?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  }
)
