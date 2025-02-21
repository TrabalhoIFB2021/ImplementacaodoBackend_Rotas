const mongoose = require('mongoose');

const ChatGPTSchema = new mongoose.Schema(
        {
          _idUser: {
                 type: mongoose.Schema.Types.ObjectId, 
                 required: true
              },
          request: String,
          response: String,
          like: Boolean
        },
         { timestamps: true }
);

module.exports = mongoose.model('ChatGPT', ChatGPTSchema);

/*
{
  "_idUser" : "64a709c8fb522639c8e40995",
  "request" : "fale sobre a api axios",
  "response" : "vai estudar Guri !!!",
  "like" : true
} 



*/