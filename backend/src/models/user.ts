import mongoose, { Schema, model} from 'mongoose';

mongoose.connect(process.env.MongoString || "")
.then(()=>{console.log("Connected to database")})

interface userType {
    firstName: string,
    lastName: string,
    userName: string,
    password: string,
    wishlist: string[]
};

const userSchema = new Schema<userType>({
    firstName : {type: String, required: true},
    lastName : {type: String, required: true},
    userName: {type: String, required: true},
    password: {type: String, required: true},
    wishlist: [{type: String}]
});

export const User = model<userType>('User', userSchema);