const express = require('express')
const Robot = require('./Robot')
const router = express.Router()

// all robots
router.get('/', (req, res) => {
    Robot.find()
    .then(robots => {
        res.status(200).json(robots)
    })
    .catch(err => {
        res.status(500).json({error: err.message})
    })
})

router.post('/', (req, res) => {
    const robot = new Robot(req.body)
    robot.save()
    .then(()=> {
        res.status(201).json(robot)
    })
    .catch(err => {
        res.status(500).json({error: err.message})
    })
})

router.get('/robots/:id', async(req, res) => {
    const id = req.params.id
    try {
        const robot = await Robot.find(id)
        res.status(200).json(robot)
    } catch(err){
        res.status(500).json(err)
    }
})

module.exports = router