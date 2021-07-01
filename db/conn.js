const mongoose = require('mongoose')

const DB =
  'mongodb+srv://shubham:shubham@cluster0.sbwdt.mongodb.net/lightDatabase?retryWrites=true&w=majority'

mongoose
  .connect(process.env.MONGODB_URI || DB, {
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log('Connection Successful')
  })
  .catch((err) => {
    console.log(err)
  })
