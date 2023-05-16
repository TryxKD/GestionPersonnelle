const path = require('path')
const express = require('express')
// const mongoose = require('mongoose')
const app = express()
const port = 3001

// mongoose.connect("mongodb://localhost:27017/Test", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })

// Pour demander à Node de servir les fichiers à partir du build de React
app.use(express.static(path.resolve(__dirname, '../frontend/client/build')))

// Pour Gérer les requêtes GET vers la route /api
app.get('/api', (req, res) => {
    res.json({message: 'Hello world!'});
})

// Pour les requêtes non traitées par le code précédent, ceci affiche l'appli React
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, "../frontend/client/build", "index.html"))
})

app.listen(port, () => {
    console.log(`app is running in port $(port)`);
})