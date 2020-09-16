module.exports = {
    getRandomName: function() {
        let randomName = Math.floor(Math.random() * 100 + 1)
        return `name${new Date().getTime().toString()}${randomName}`
    },
}