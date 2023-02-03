import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false,
    },
    image: {
        type: String,
        required: true,
        default: "f",
    },
});

const User = mongoose.models.User || mongoose.model("User", UserSchema);
export default User;