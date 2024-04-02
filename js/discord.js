function getDiscordUserCount() {
    $.ajax({
        url: "https://discordapp.com/api/guilds/1218844840209678447/widget.json",
        dataType: "json",
        method: "GET",
        success: function (result) {
            if (result["online"] != false) {
                $("#discordUsers").html(result["presence_count"]);
            }
        }
    });
}
/*function getDiscordServerName() {
    $.ajax({
        url: "https://discordapp.com/api/guilds/1218844840209678447/widget.json",
        dataType: "json",
        method: "GET",
        success: function (result) {
            if (result["online"] != false) {
                $("#discordName").html(result["name"]);
            }
        }
    });
}*/
getDiscordUserCount();
//getDiscordServerName();
setInterval(function () {
    getDiscordUserCount();
}, 5000);