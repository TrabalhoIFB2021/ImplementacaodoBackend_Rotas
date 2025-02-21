//API REST Basic ...
// comentário para gerar novo commit
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

mongoose.connect('mongodb+srv://trabalhoifb2022:123456asdf@percentgordura.qaurgpo.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(cors());

// Controllers
const userController = require('./controllers/UserController');
const productController = require('./controllers/NapneController');
const orderController = require('./controllers/ChatGPTController');

// Tela Principal
app.post('/usuario', userController.criarConta);
app.get('/usuario', userController.usuario);
app.get('/usuario/sair', userController.sair);

// Professor routes
app.post('/professor/menu', userController.menu);
app.get('/professor/aluno', userController.aluno);
app.get('/professor/voltar', userController.voltar);

// Menu routes
app.post('/menu/cadastro', productController.cadastro);
app.get('/menu/registro', productController.registro);
app.get('/menu/suportia/:id', productController.suporteia);
app.delete('/menu/voltar/:id', productController.voltar);

// SuporteIA
app.post('/suporteia/ok', orderController.ok);
app.get('/suporteia/voltar', orderController.voltar);

app.get('/', (req, res) => {
    res.send('Alô REST API');
});

app.listen(3000, () => console.log('Server started on port 3000'));

