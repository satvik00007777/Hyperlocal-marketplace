import mongoose from 'mongoose';

const userSchema = new mongoose.Scehma({ 
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['customer', 'provider', 'admin'],
        default: 'customer'
    },
}, {
    timestamps: true
});

const User = mongoose.model('User', userSchema);

export default User;