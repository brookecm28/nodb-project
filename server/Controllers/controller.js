//stories
const stories = require('../data.json')

module.exports = {
    getAllStories: (req, res) => {
        res.status(200).send(stories)
    },
    getOneStory: (req, res) => {
        const {title} = req.params
        
        const index = stories.findIndex(element => element.title === title)
        if (index === -1) {
            return res.status(404).send('Story does not exist')
        }

        res.status(200).send(stories[index])
    }
}