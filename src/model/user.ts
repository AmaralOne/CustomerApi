import { model, Schema, Model, Document } from 'mongoose';
import {User} from '../entities/User'
import bcrypt from "bcryptjs"



const UserSchema: Schema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true , selected: false},
    createdAt: { type: Date, default: Date.now}
})

UserSchema.pre('save', async function (next) {
    if(!this.isModified('password')){
        return next();
    }

    this.password = await bcrypt.hash(this.password,10)
    console.log(this.password)

    next();
});


const userModel = model<User>('User', UserSchema);

export default userModel