import mongoose from 'mongoose';
mongoose.set('strictQuery', false);

const Connection = async (USERNAME, PASSWORD) => {

    const URL = `mongodb+srv://${USERNAME}:${PASSWORD}@flipkart.t4zjv50.mongodb.net/?retryWrites=true&w=majority`
    // mongodb+srv://abhishek:<password>@flipkart.t4zjv50.mongodb.net/?retryWrites=true&w=majority
    try {
        await mongoose.connect(URL, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        });
        console.log("Database has been Connected Successfully")
    } catch (error) {
        console.log("Error While Connecting to Database", error.message);
    }
}


export default Connection;