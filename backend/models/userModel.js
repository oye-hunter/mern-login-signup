const mongoose = require('mongoose');

const bcrypt = require('bcryptjs');

const userSchema = mongoose.Schema({
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
    isAdmin: {
        type: Boolean,
        default: false
    },
    picture: {
        type: String,
        default: 'https://st3.depositphotos.com/13159112/17145/v/1600/depositphotos_171453724-stock-illustration-default-avatar-profile-icon-grey.jpg'
    }
}, {
    timestamps: true
});

userSchema.pre('save', async function(next) {
    if(this.isModified('password')){
        next;
    }
    const salt = await bcrypt.genSalt(5);
    this.password = await bcrypt.hash(this.password, salt);
})

userSchema.methods.matchPassword = async function(enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password)
}

const User = mongoose.model('User', userSchema);

module.exports = User;