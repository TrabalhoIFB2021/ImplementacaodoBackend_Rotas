const mongoose = require('mongoose');
const NAPNE = require('../models/Napne');

module.exports = {
// lista todos usuarios
     async show(req, res)
    {
        let napnes = await NAPNE.find();
        return res.json(napnes);
    }, 
  //lista com filtro "email"
     async indexByIdUser(req,res)
    {
        let napnes = await NAPNE.find(
          { _idUser : req.query.id}
                                   );
        return res.json(napnes);
    },
  // adiciona usuario
  async store(req, res)
     {
        const napne =  await NAPNE.create(req.body);

        return res.json(napne);
     },
  // deleta usuario
  async destroy(req,res){
      let napne = await NAPNE.findByIdAndRemove(req.params.id);
         return res.json(napne);
    },

  // altera usuario
  // devesse passar dois dados: o id via param e o json via body
   async update(req,res){
        let napne = await NAPNE.findByIdAndUpdate(req.params.id,req.body,{new:true}); 
        return res.json(napne);
    }

};