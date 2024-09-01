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
            .setAssetsLargeImage("https://media.discordapp.net/attachments/1108805442030796970/1267857713786781797/ngrp.gif?ex=66d32e82&is=66d1dd02&hm=1774165947b87810e0cb94e59694aa03bbbe4e66db12a759c02f1c965c1a6ee9&")
            .setAssetsLargeText("gg")
            .addButton('Join Discord', "https://discord.gg/ngrp-kerala-official-776666577546117151"),

        new discord.RichPresence()
            .setApplicationId("1256607227444330606")
            .setType("PLAYING")
            .setName("Zepeto")
            .setDetails()
            .setState()
            .setStartTimestamp(global.startTime)
            .setAssetsLargeImage("https://cdn.discordapp.com/attachments/1136290202118279270/1277878748015886440/WhatsApp_Image_2024-08-27_at_11.55.27_9bd04763.jpg?ex=66d2b953&is=66d167d3&hm=686704e81f0b8d2e3f0e9689408d6ea8fd9796cb2de0a98f70bc0fd3d673d0e5&")
            .setAssetsLargeText("Music"), // <-- Added missing comma here

        new discord.RichPresence()
            .setApplicationId("1256607227444330606")
            .setType("PLAYING")
            .setName("Avakin Life")
            .setDetails()
            .setState()
            .setStartTimestamp(global.startTime)
            .setAssetsLargeImage("https://cdn.discordapp.com/attachments/1136290202118279270/1277879716442804234/WhatsApp_Image_2024-08-27_at_11.59.31_cdde403e.jpg?ex=66d2ba3a&is=66d168ba&hm=5e2647ea13b4dcd358677d17a9577739d6dc315234cbd0cf8acd056689049ea1&")
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
