const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send("User List");
})

router.get('/new', (req, res) => {
    res.render("users/new")
})

router.post('/', (req, res) => {
    const isValid = false
    if (isValid) {
        users.push({ firstName: req.body.firstName })
        res.redirect(`/users/${users.length - 1}`)
    }
    else {
        console.log("Error")
        res.render("users/new", { firstName: req.body.firstName })
    }
})

router
    .route('/:id')
    .get((req, res) => {
        res.send(`Get User with ID: ${req.params.id}`)
    })
    .put((req, res) => {
        res.update(`Update User with ID: ${req.params.id}`)
    })
    .delete((req, res) => {
        res.delete(`Delete User with ID: ${req.params.id}`)
    })

const users = [{ name: "Ali", name: "Kylie" }]

router.param("id", (req, res, next, id) => {
    req.user = users[id]
    next()
})

module.exports = router