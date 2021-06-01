const express = require('express');
const router = express.Router();

const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

const Content = require('./Content');

// ADD NEW CONTENT
router.post('/create/content', (req, res) => {
    Content.create({
        author: req.body.author,
        title: req.body.title,
        body: req.body.body,
        published_on: req.body.published_on,
    },
    (err, content) => {
        if (err) {
            return res.send("There was a problem while adding the information to the database.")
        }
        res.send(content)
    })
})

// GET ALL CONTENT FROM DB
router.get('/', (req, res) => {
    Content.find({}, (err, content) => {
        if (err) {
            return res.json(err)
        }
        res.send(content)
    })
})

// GET A PARTICULAR CONTENT (using /:id)
router.get('/get/:id', (req, res) => {
    Content.findById(req.params.id, (err, content) => {
        if (err) {
            return res.send("There was a problem in finding the specified content.")
        }
        if (!content) {
            return res.send("No content found.")
        }
        res.send(content);
    })
})

// UPDATE A PARTICULAR CONTENT IN THE DATABASE
router.put('/update/:id', (req, res) => {
    Content.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, content) => {
        if (err) {
            return res.send("There was a problem in updating the content.")
        }
        res.send(content)
    })
})

// DELETE A PARTICULAR CONTENT FROM THE DATABASE
router.delete('/del/:id', (req, res) => {
    Content.findByIdAndRemove(req.params.id, (err, content) => {
        if (err) {
            return res.send("There was a problem deleting the content.")
        }
        res.send("Content of author: '"+ content.author +"' having title: '"+ content.title +"' was deleted.")
    })
})

module.exports = router;