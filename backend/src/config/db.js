const mongoose=require('mongoose');

const connectDB =async()=>{
    //   console.log("connectDB FUNCTION CALLED");  // <- add this

    try {
        const conct=await mongoose.connect(process.env.MONGO_URL,{
            useNewUrlParser:true,
            useUnifiedTopology: true
        });
        console.log(`mongoDbConnected:${conct.connection.host}`);
        
    } catch (error) {
        console.error('mongoDb connection failed',error.message);
        process.exit(1)
    }
}

module.exports=connectDB;