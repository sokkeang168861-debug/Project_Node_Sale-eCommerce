import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true
        },

        password: {
            type: String,
            required: true
        },

        first_name: {
            type: String,
            required: true
        },

        last_name: {
            type: String,
            required: true
        },

        is_active: {
            type: Boolean,
            default: true
        }
    },
    {
        timestamps: {
            createdAt: "created_at",
            updatedAt: false
        }
    }
);

export const User = mongoose.model("User", userSchema);