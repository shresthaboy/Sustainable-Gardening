import mongoose from 'mongoose'

const connectDB = async ()=>{
  try{
        const conn =  await mongoose.connect(process.env.MONGO_URI,{
          useUnifiedTopology:true,
          useNewUrlParser: true,
          useCreateIndex:true
        })
        console.log('mongo database is connected!!! ${con.connection.host}')
  }catch(error){
    console.error('Error: ${error}')
    process.exit(1) //passing 1 - will exit the process with error
  }
}
export default connectDB