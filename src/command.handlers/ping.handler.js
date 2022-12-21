const {
	ActionRowBuilder,
	ButtonBuilder,
	ButtonStyle,
	EmbedBuilder,
} = require("discord.js");
const wait = require("node:timers/promises").setTimeout;

async function pingHandler(interaction) {
	const cmd = interaction.client.commands.get(interaction.commandName);
	if (!cmd) console.log("no command found");

	const row = new ActionRowBuilder().addComponents(
		new ButtonBuilder()
			.setCustomId("Ya gon get rick rolled soon")
			.setLabel("Click me to get THE BREAD")
			.setStyle(ButtonStyle.Primary)
	);

	const embeds = new EmbedBuilder()
		.setColor(0xdc143c)
		.setTitle("A fresh loaf of bread and brocollii to the rescue!")
		.setURL(
			"https://www.youtube.com/watch?v=HPk-VhRjNI8&list=PL3KnTfyhrIlcudeMemKd6rZFGDWyK23vx&index=1&ab_channel=Baj%C3%A0Blast"
		)
		.setDescription("Hmm Hmm 👍");

	try {
		await interaction.reply("BREEEAAAADDD!!!!");
		await wait(2000);
		await interaction.editReply(
			"ITS ABOUT GODDAMN TIME WE HAD SOME GOOD BREAD"
		);
		await wait(2000);
		const message = await interaction.followUp({
			content: "I seem to have solved the problem...",
			embeds: [embeds],
		});
		message.react("🗿");
	} catch (error) {
		console.log(error);
		await interaction.reply("something went wrong");
	}
}

module.exports = pingHandler;
