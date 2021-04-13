const Discord = require("discord.js")
const color = require("../../colors.json")
const { logo } = require("../../config.json")

module.exports = {
    name: 'socials',
    description: 'All of Potatoes Social Media',
    async execute(bot, message, args) {

        const embed = new Discord.MessageEmbed()
            .setAuthor("#StayMystic", logo)
            .setThumbnail(logo)
            .setTitle("Mystic Esports Social Media")
            .addFields(
                { name: 'YouTube', value: 'https://www.youtube.com/channel/UCEjZROTGGOeUqGo37fp76Ww'},
                { name: 'Twitter', value: 'https://twitter.com/MysticPotatoBS'},
                { name: 'Reddit', value: 'https://www.reddit.com/r/BobbyPotatoBob/'},
                { name: 'Email', value: 'PotatoBotSupport@gmail.com'}
            )
            .setColor(color.blue)

        message.channel.send(embed)
    }
}
