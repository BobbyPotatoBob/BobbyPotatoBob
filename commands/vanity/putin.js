const Discord = require("discord.js")
const dig = require("discord-image-generation")
const { prefix } = require("../../config.json")

module.exports = {
    name: 'putin',
    description: 'Putin has an idol?',
    usage: `${prefix}putin <@user>`,
    async execute(bot, message, args) {

        let user = message.mentions.users.first() || message.author

        let av = user.displayAvatarURL({ dynamic: false, format: 'png' })
        let img = await new dig.Poutine().getImage(av)
        let attach = new Discord.MessageAttachment(img, 'putin.png')

        message.channel.send(attach)
    }
}
