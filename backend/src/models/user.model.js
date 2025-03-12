import mongoose from "mongoose";
import { Schema } from "mongoose";

const userSchema = new Schema({
    email: {type: String, required: true, unique: true},
    fullName: {type: String, required: true},
    password: {type: String, required: true},
    profilePic: {type: String, default: ""},
    friend: [{
        type: Schema.Types.ObjectId,
        ref: "User"
    }],
    friendRequest: [{
        type: Schema.Types.ObjectId,
        ref: "User"
    }],
},{
    timestamps: true
});

const User = mongoose.model("User", userSchema);
export default User;