const Discord = require("discord.js")
const color = require("../../colors.json")
const { logo } = require("../../config.json")

module.exports = {
    name: 'invite',
    description: 'The invite to the Potato Bot Discord Server',
    async execute(bot, message, args) {

        message.channel.send("https://discord.gg/yGXRqnPh2k")
    }
}
