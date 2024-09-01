const discord = require("discord.js-selfbot-v13");

function reloadPresence(client) {
    if (!global.startTime) {
        global.startTime = Date.now();
    }

    const presences = [
        new discord.RichPresence()
            .setApplicationId("1256607227444330606")
            .setType("PLAYING")
            .setName("NGRP Kerala BETA")
            .setDetails()
            .setState()
            .setStartTimestamp(global.startTime)
            .setAssetsLargeImage("https://media.discordapp.net/attachments/1108805442030796970/1267857713786781797/ngrp.gif?ex=66d528c2&is=66d3d742&hm=40b0a178099e560b115a9fd9eb52e2053083c285b9ee596c048efdf9a62a8fe9&")
            .setAssetsLargeText("gg")
            .addButton('Join Discord', "https://discord.gg/ngrp-kerala-official-776666577546117151"),

        new discord.RichPresence()
            .setApplicationId("1256607227444330606")
            .setType("PLAYING")
            .setName("Zepeto")
            .setDetails()
            .setState()
            .setStartTimestamp(global.startTime)
            .setAssetsLargeImage("https://cdn.discordapp.com/attachments/1136290202118279270/1277878748015886440/WhatsApp_Image_2024-08-27_at_11.55.27_9bd04763.jpg?ex=66d55c53&is=66d40ad3&hm=d4999dab27d9c9a07b0fad0e1f551a3e249eab2e5928eea348da46a11fd1fca9&")
            .setAssetsLargeText("Music"), // <-- Added missing comma here

        new discord.RichPresence()
            .setApplicationId("1256607227444330606")
            .setType("PLAYING")
            .setName("Avakin Life")
            .setDetails()
            .setState()
            .setStartTimestamp(global.startTime)
            .setAssetsLargeImage("https://cdn.discordapp.com/attachments/1136290202118279270/1277879716442804234/WhatsApp_Image_2024-08-27_at_11.59.31_cdde403e.jpg?ex=66d55d3a&is=66d40bba&hm=71ff16a094d8359e0b5aa59ba20bbd245dec6c88488edabd0e80f219df55d9b7&")
            .setAssetsLargeText("Streams")
    ];

    let currentIndex = 0;

    function updatePresence() {
        client.user.setPresence({
            status: "online",
            activities: [presences[currentIndex].toJSON()]
        });

        currentIndex = (currentIndex + 1) % presences.length;
    }

    // Initial presence update
    updatePresence();

    // Update presence every 2 hours (7200000 ms)
    setInterval(updatePresence, 2 * 60 * 60 * 1000);
}

module.exports = reloadPresence;
