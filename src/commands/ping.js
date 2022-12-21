const { SlashCommandBuilder } = require("discord.js");
const pingHandler = require("../command.handlers/ping.handler");

module.exports = {
	data: new SlashCommandBuilder()
		.setName("ping")
		.setDescription("replies with Bread!"),
	async execute(interaction) {
		pingHandler(interaction);
	},
};
