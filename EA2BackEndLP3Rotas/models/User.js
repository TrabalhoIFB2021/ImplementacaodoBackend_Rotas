const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
    {
          nickname: String,
          email: String,
          password: String
    }
);

module.exports = mongoose.model('User', UserSchema);

/*
{
   "nickname" : "Percentgordura",
   "email": "trabalhoifb2022@gmail.com",
   "password" : "123456asdf"
}




*/