// importation des modules
const express = require('express')
const ejs = require('ejs')
const bodyParser = require('body-parser')
const cors = require('cors')


const bdd = require('./bdd')

const app = express()

app.set('view engine','ejs')

app.use('/assets',express.static('public'))
app.use(cors())
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())




app.get('/',(req,res)=>{
    res.render('pages/index')
})

app.get('/getComments',(req,res)=>{
    bdd.query('SELECT * FROM commentaires ORDER BY id DESC LIMIT 0,3',(err,rows)=>{
        if(err) throw err
 
        res.render('ajax/comments',{commentaires:rows})
    })
 })
 app.get('/Alls',(req,res)=>{
    bdd.query('SELECT * FROM commentaires ORDER BY id DESC',(err,rows)=>{
        if(err) throw err
 
        res.render('pages/all',{commentaires:rows})
    })
 })

// ajout du commentaire
app.post('/addComments',(req,res)=>{
if(req.body.comment != ''){
    
    bdd.query('INSERT INTO commentaires SET commentaire = ?',[req.body.comment],(err,result)=>{
        if(err) throw err
    })
   
}
    
})


// suppression de commentaire
app.post('/deleteComments',(req,res)=>{
    var id = req.body.id
    bdd.query('DELETE FROM commentaires WHERE id = ?',[id],(err,resultat)=>{
        if(err) throw err
        res.send('commentaire supprimé')
    })
})

// edition de commentaire

app.post('/editComments',(req,res)=>{
    var id = req.body.id
    var newValue = req.body.update

    bdd.query('UPDATE commentaires SET commentaire = ? WHERE id = ?',[newValue,id],(err,result)=>{
        if(err) throw err
        res.redirect('/Alls')
    })
})


// delete all

app.get('/deleteAlls',(req,res)=>{
    
    bdd.query('TRUNCATE commentaires',(err,resultat)=>{
        if(err) throw err
        res.redirect('/Alls')
    })
})



app.listen(5050)