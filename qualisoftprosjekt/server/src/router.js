import express, { request, response } from 'express';

import database from './database'

const router = express.Router();

function authenticate(req, res) {
    const token = req.header('Authorization')

    const dbToken = database.getToken()

    if(token !== dbToken) {
        res.status(401).send("Unathorized")
        return false
    }
    else {
        return true
    }
}

router.post("/login", (req, res) => {
    const credentials = req.body;

    const user = database.getUser(credentials.username)

    if(credentials.password === user.password) {
        res.json({
            token: database.getToken()
        })
    }
    else {
        res.status(401).send("Unathorized")
    }
})


router.post('/suggestion', (req, res) => {
    const suggestion = req.body;
    database.storeSuggestion(suggestion)
    res.status(200).send("OK")
})

router.get('/suggestionList', (req, res) => {

    if(authenticate(req, res)) {
        const suggestionList = database.getSuggestionList()
    
       if(suggestionList){
           res.json(suggestionList)
       } else {
           res.status(404).send('List not found')
       }
    }
})

router.get('/suggestionList/:id', (req, res) => {
    const id = req.params.id
    const suggestionContent = database.getSuggestionContent(id)
    if(suggestionContent){
        res.json(suggestionContent)
    } else {
        res.status(404).send('Content not found')
    }
})





export default router;