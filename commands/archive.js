exports.run = (client, message, args) => {

	if (!message.isAdmin) {
		return false;
	}
	
	let category = message.guild.channels.find(c => c.name == "Sign Up Archives" && c.type == "category");
	message.channel.setParent(category.id).then((channel) => {
		channel.lockPermissions();
	});
}