// Load up the discord.js library
const Discord = require("discord.js");

// This is your client. Some people call it `bot`, some people call it `self`, 
// some might call it `cootchie`. Either way, when you see `client.something`, or `bot.something`,
// this is what we're refering to. Your client.
const client = new Discord.Client();
let bot = client; 
//In var devs and ownerid you must use developer mode to copy your id and in devs you may also choose others to add.
var devs = ['insertyourid', 'insertid']
const ownerID = 'insertyourid'; 

// Here we load the config.json file that contains our token and our prefix values. 
const config = require("./config.json");
// config.token contains the bot's token
// config.prefix contains the message prefix.

client.on("ready", () => {
  // This event will run if the bot starts, and logs in, successfully.
  console.log(`botname was summoned, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} servers.`); 
    console.log(` `);
    console.log(`botname will now begin logging`);
    console.log(`====================================`);
    console.log(`Logs:`);
    console.log(` `);  
// Example of changing the bot's playing game to something useful. `client.user` is what the
  // docs refer to as the "ClientUser".
  bot.user.setGame('insertprefixhelp for commands','https://www.twitch.tv/Vargskelethor'); //Telling discord we are online and streaming.
  console.log(`Logged in as ${bot.user.tag}`);
});



client.on("guildCreate", guild => {
  // This event triggers when the bot joins a guild.
  console.log(`New server summoned botname: ${guild.name} (id: ${guild.id}). This server has ${guild.memberCount} members!`);
  });
client.on("guildMemberAdd", member => {
  console.log(`New User ${member.user.username} has joined ${member.guild.name}`);
//if(member.guild.id === '552561467241529354') client.channels.get('552566461554753578').send(`${member.user.username} has joined this server`);
});
client.on("guildDelete", guild => {
  // this event triggers when the bot is removed from a guild.
  console.log(`I have been banished from: ${guild.name} (id: ${guild.id})`);
});



client.on("message", async message => {
  // This event will run on every single message received, from any channel or DM.
  
  // It's good practice to ignore other bots. This also makes your bot ignore itself
  // and not get into a spam loop (we call that "botception").
  if(message.author.bot) return;
  
  // Also good practice to ignore any message that does not start with our prefix, 
  // which is set in the configuration file.
  if(message.content.indexOf(config.prefix) !== 0) return;
  
  // Here we separate our "command" name, and our "arguments" for the command. 
  // e.g. if we have the message "+say Is this the real life?" , we'll get the following:
  // command = say
  // args = ["Is", "this", "the", "real", "life?"]
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  
  // Let's go with a few common example commands! Feel free to delete or change those.
  
 
  //replace url with your own
  if(command === "twitch") {
    message.channel.send('follow me on twitch https://www.twitch.tv/txtfxck')
	message.channel.send('I sometimes stream there.')
	message.react("✅")
	console.log(`${message.author.tag} used the twitch command`);
 }

 if(command === "showmericardo") {
  message.react("🏳️‍🌈")
  console.log(`${message.author.tag} used the showmericardo command`);
  message.channel.send('DM sent, Enjoy your homosexual boner.')
  message.author.send('https://www.youtube.com/watch?v=Px8jVfUwlfQ&has_verified=1'); //Sends a Direct Message
};


 if(command === "1to100") {
 console.log(`${message.author.tag} used the 1to100 command`);
 message.channel.send(`${Math.floor(Math.random() * 100)}`);
}
 if(command === "mypp") {
	  console.log(`${message.author.tag} used the mypp command`);
 message.channel.send(`Your pp is ${Math.floor(Math.random() * 12)} inches.`);
}

   if(command === "reboot") {
    if(message.author.id !=="insertid") return;
	console.log(`${message.author.tag} used the reboot command`);
	message.channel.send('Reboot command sent.')
	client.destroy()
  }
   if(command === "maintenance") {
  if(message.author.id !=="insertid") return;
  console.log(`${message.author.tag} used the maintenance command`);
	message.channel.send('Bot is under maintenance.')
	client.user.setActivity(`maintenance`, {type: "watching"}) 
  }
  
   if(command === "unmaintenance") {
if(message.author.id !=="insertid") return; 
 console.log(`${message.author.tag} used the unmaintenance command`);
	message.channel.send('Maintenance is over')
	client.user.setActivity(`${client.users.size} people`, {type: "watching"}) 
  }
  if(command === "downtime") {
  if(message.author.id !=="insertid") return;
  console.log(`${message.author.tag} used the downtime command`);
	message.channel.send('Downtime is expected soon.')
	client.user.setActivity(`for downtime`, {type: "watching"}) 
  }
  
  
  
  if(command === "ufo") {
    message.channel.send('UFO PORNOOOOOOOOOOOOOOOOOOOOOOO!')
	message.channel.send('https://www.youtube.com/watch?v=x7RP6JqZgQ8')
	console.log(`${message.author.tag} used the ufo command`);
	}
	if(command === "face") {
    message.channel.send('👁👄👁')
	message.delete().catch(O_o=>{}); 
	console.log(`${message.author.tag} used the face command`);
	}
	if(command === "sweden") {
    message.channel.send('Subscribe to vargskelethor!')
	message.channel.send('https://www.youtube.com/watch?v=ynQsDFxTSU4')
	console.log(`${message.author.tag} used the sweden command`);
  }
if(command === "hug") {
	console.log(`${message.author.tag} used the hug command`);
	message.delete().catch(O_o=>{}); 
    if(message.mentions.members.size == 1) {
        let member = message.mentions.members.first()
        message.channel.send(`${message.author} gave ${member} a hug!`, {
            file: "https://media.giphy.com/media/CZpro4AZHs436/giphy.gif"
        });
    }
}

if(command === "love") {
	console.log(`${message.author.tag} used the love command`);
	message.delete().catch(O_o=>{}); 
    if(message.mentions.members.size == 1) {
        let member = message.mentions.members.first()
        message.channel.send(`${message.author} loves ${member}`, {
        });
    }
}

  if(command === "kiss") {
	  console.log(`${message.author.tag} used the kiss command`);
	  message.delete().catch(O_o=>{}); 
    if(message.mentions.members.size == 1) {
        let member = message.mentions.members.first()
        message.channel.send(`${message.author} kissed ${member}!`, {
            file: "https://media3.giphy.com/media/G3va31oEEnIkM/giphy.gif"
        });
    }
}
  
  if(command === "ping") {
    // Calculates ping between sending a message and editing it, giving a nice round-trip latency.
    // The second ping is an average latency between the bot and the websocket server (one-way, not round-trip)
    const m = await message.channel.send("Ping?");
    m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`)
	console.log(`${message.author.tag} used the ping command`);
  }
  
  if(command === "say") {
    // makes the bot say something and delete the message. As an example, it's open to anyone to use. 
    // To get the "message" itself we join the `args` back into a string with spaces: 
    const sayMessage = args.join(" ");
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    message.delete().catch(O_o=>{}); 
    // And we get the bot to say the thing: 
    message.channel.send(sayMessage);
	console.log(`${message.author.tag} used the say command`);
  }
  
  if(command === "kick") {
    // This command must be limited to mods and admins. In this example we just hardcode the role names.
    // Please read on Array.some() to understand this bit: 
    // https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/some?
    if(!message.member.roles.some(r=>["Kick", "kick"].includes(r.name)) )
      return message.reply("Sorry, you don't have permissions to use this!");
    
    // Let's first check if we have a member and if we can kick them!
    // message.mentions.members is a collection of people that have been mentioned, as GuildMembers.
    // We can also support getting the member by ID, which would be args[0]
    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!member)
      return message.reply("Please mention a valid member of this server");
    if(!member.kickable) 
      return message.reply("I cannot kick this user! Do they have a higher role? Do I have kick permissions?");
    
    // slice(1) removes the first part, which here should be the user mention or ID
    // join(' ') takes all the various parts to make it a single string.
    let reason = args.slice(1).join(' ');
    if(!reason) reason = "No reason provided";
    
    // Now, time for a swift kick in the nuts!
    await member.kick(reason)
      .catch(error => message.reply(`Sorry ${message.author} I couldn't kick because of : ${error}`));
    message.reply(`kicked ${member.user.tag} because: ${reason}`);
	console.log(`${message.author.tag} used the kick command. ${member.user.tag} has been kicked by ${message.author.tag} because: ${reason} `);

  }
  
  if(command === "ban") {
    // Most of this command is identical to kick, except that here we'll only let admins do it.
    // In the real world mods could ban too, but this is just an example, right? ;)
    if(!message.member.roles.some(r=>["Ban", "ban"].includes(r.name)) )
      return message.reply("Sorry, you don't have permissions to use this!");
    
    let member = message.mentions.members.first();
    if(!member)
      return message.reply("Please mention a valid member of this server");
    if(!member.bannable) 
      return message.reply("I cannot ban this user! Do they have a higher role? Do I have ban permissions?");

    let reason = args.slice(1).join(' ');
    if(!reason) reason = "No reason provided";
    
    await member.ban(reason)
      .catch(error => message.reply(`Sorry ${message.author} I couldn't ban because of : ${error}`));
    message.reply(`${member.user.tag} has been banned because: ${reason}`);
	console.log(`${message.author.tag} used the ban command. ${member.user.tag} has been banned by ${message.author.tag} because: ${reason} `);
  }
  
    if(command === "uptime") {
let totalSeconds = (bot.uptime / 1000);
let days = Math.floor(totalSeconds / 86400);
let hours = Math.floor(totalSeconds / 3600);
totalSeconds %= 3600;
let minutes = Math.floor(totalSeconds / 60);
  let uptime = `${days} days, ${hours} hours, and ${minutes} minutes`;
   message.channel.send(uptime)
    console.log(`${message.author.tag} used the uptime command`)
  }
  
  if(command === 'servers') {
	  if(!message.member.roles.some(r=>["insertyourrank"].includes(r.name)) )
      return message.reply("Sorry, you don't have permissions to use this!");
    var format = '\n'
    let slist = bot.guilds.map(g=>`${g.name} (${g.id})`).join(format)
    let sembed = new Discord.RichEmbed()
    .setTitle('Servers')
    .setDescription(slist)
    .setAuthor(message.author.tag, message.author.avatarURL)
    .setTimestamp()
    .setColor('BLURPLE')
    
    message.channel.send({embed: sembed}) 
    console.log(`${message.author.tag} used the servers command`)
  } 
  
  
  if(command === "purge") {
    // This command removes all messages from all users in the channel, up to 100.
    if(!message.member.roles.some(r=>["Purge", "purge"].includes(r.name)) )
      return message.reply("Sorry, you don't have permissions to use this!");
    // get the delete count, as an actual number.
    const deleteCount = parseInt(args[0], 10);
    
    // Ooooh nice, combined conditions. <3
    if(!deleteCount || deleteCount < 2 || deleteCount > 100)
      return message.reply("Please provide a number between 2 and 100 for the number of messages to delete");
    
    // So we get our messages, and delete them. Simple enough, right?
    const fetched = await message.channel.fetchMessages({limit: deleteCount});
    message.channel.bulkDelete(fetched)
      .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
	   console.log(`${message.author.tag} used the purge command`);
  }
  
    if(command === "cointoss") {

    var cointoss = [
        "Heads",
        "Tails"
    ]
    var randomCointoss = cointoss[Math.floor(Math.random() * cointoss.length)];

     message.channel.send("**" + randomCointoss + "**")
    console.log(`${message.author.tag} used the cointoss command`);
  } 
   if(command === "myppvisual") {

    var cointoss = [
        "8D",
		"8=D",
		"8==D",
		"8===D",
		"8====D",
		"8=====D",
		"8======D",
		"8=======D",
		"8========D",
		"8=========D",
		"8==========D",
		"8===========D",
        "8============D"
    ]
    var randomCointoss = cointoss[Math.floor(Math.random() * cointoss.length)];

     message.channel.send("**" + randomCointoss + "**")
    console.log(`${message.author.tag} used the myppvisual command`);
  } 
  if(command === "railroadcrossing") {

    var cointoss = [
        "🚂",
		"🚂🚃",
		"🚂🚃🚃",
		"🚂🚃🚃🚃",
		"🚂🚃🚃🚃🚃",
		"🚂🚃🚃🚃🚃🚃",
		"🚂🚃🚃🚃🚃🚃🚃",
		"🚂🚃🚃🚃🚃🚃🚃🚃",
		"🚂🚃🚃🚃🚃🚃🚃🚃🚃",
		"🚂🚃🚃🚃🚃🚃🚃🚃🚃🚃",
		"🚂🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃",
		"🚂🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃",
		"🚂🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃",
		"🚂🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃",
		"🚂🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃",
		"🚂🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃",
		"🚂🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃",
		"🚂🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃",
        "🚂🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃"
    ]
    var randomCointoss = cointoss[Math.floor(Math.random() * cointoss.length)];

     message.channel.send("**" + randomCointoss + "**")
    console.log(`${message.author.tag} used the railroad crossing command`);
  } 
  
   if(command === "russianroulette") {

    var cointoss = [
        "alive",
        "dead"
    ]
    var randomCointoss = cointoss[Math.floor(Math.random() * cointoss.length)];

     message.channel.send("BOOM! youre **" + randomCointoss + "**")
    console.log(`${message.author.tag} used the russian roulette command`);
  } 
  
  if(command === "amigay") {

    var cointoss = [
        "gay 🏳️‍🌈",
		"bisexual 🏳️‍🌈",
        "straight"
    ]
    var randomCointoss = cointoss[Math.floor(Math.random() * cointoss.length)];

     message.channel.send("youre **" + randomCointoss + "**")
    console.log(`${message.author.tag} used the amigay command`);
	
  } 
  
    if (command === "avatar") {
	if (!message.mentions.users.size) {
		return message.channel.send(`Your avatar: <${message.author.displayAvatarURL}>`);
	}

	const avatarList = message.mentions.users.map(user => {
		return `${user.username}'s avatar: <${user.displayAvatarURL}>`;
	});

	// send the entire array of strings as a message
	// by default, discord.js will `.join()` the array with `\n`
	message.channel.send(avatarList);
	 console.log(`${message.author.tag} used the avatar command`);
  }
  
    if(command === "mute") {
    if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.reply('You don\'t have permission to do that.');
    if(!message.guild.member(bot.user).hasPermission("MANAGE_MESSAGES")) return message.reply('I don\'t have the permission to do that, give me permissions!');

    let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if(!toMute) return message.reply("You need to write someones ID or mention someone!");

    if(toMute.id === message.author.id) return message.reply("You can\'t mute yourself!");
    if(toMute.id === bot.user.id) return message.reply("**nice try :)**");
    if(toMute.id === message.guild.owner.id) return message.reply("you can't mute the Owner of this Guild.")
    if(toMute.highestRole.position >= message.member.highestRole.position) return message.reply("You can\'t mute someone with a higher role or the same as yours!");

    let role = message.guild.roles.find(r => r.name === "Muted");
    if(!role) {
        try {
            role = message.guild.createRole({
                name: "Muted",
                color: "#000000",
                permissions: []
            });
        message.guild.channels.forEach((channel, id) => {
            channel.overwritePermissions(role, {
                SEND_MESSAGES: false,
                ADD_REACTIONS: false
            });
        });
        } catch(e) {
            console.log(e.stack);
        }
    }
    if(toMute.roles.has(role)) return message.reply("This user is already muted!");

    toMute.addRole(role);
    message.channel.send(`${toMute} successfully muted`).then(message => {
        message.react("✅")
    });
    console.log(`${toMute.user.tag} got muted by ${message.author.tag} in ${message.channel.name}`)
    toMute.send(`You got *muted* in the Discord server **${message.guild.name}**`)
  } 
  
  if(command === "unmute") {
    if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.reply('You don\'t have permission to do that.');
    if(!message.guild.member(bot.user).hasPermission("MANAGE_MESSAGES")) return message.reply('I don\'t have the permission to do that, give me permissions!');

    let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if(!toMute) return message.reply("You need to write someones ID or memtion someone!");

    let role = message.guild.roles.find(r => r.name === "Muted");

    if(!role || !toMute.roles.has(role.id)) return message.reply("This member is not muted!");

    toMute.removeRole(role);
    message.channel.send(toMute +" successfully unmuted!").then(message => {
        message.react("✅")
    });
    console.log(`${toMute.user.tag} got unmuted by ${message.author.tag} in ${message.channel.name}`)
    toMute.send("You got *unmuted* in the Discord server **MoneyDropLoby**")
    return;
  } 
  
    if(command === 'argsinfo') {
	if (!args.length) {
		return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
	}

	message.channel.send(`Command name: ${command}\nArguments: ${args}`);
   console.log(`${message.author.tag} used the argsinfo command`);
  }
  
    if(command === "whois") { //Checks if messages starts with "!whois"
        let memberToFind = message.mentions.members.first(); //Checks for a mentioned user (@eSkuzi#0001)
 
        if (!memberToFind) { //If no member is mentioned, throw this error
            return message.channel.send('You must mention a member for this command'); //Send message and stop executing code
        }
 
        let embed = new Discord.RichEmbed()
            .setAuthor(memberToFind.user.tag, memberToFind.user.avatarURL) //This will show the users tag and avatar - there was no need to stringify that text :P
            .addField('Account Created', memberToFind.user.createdAt, true) //Shows when the user was registered
            .addField('Joined this Server', message.guild.members.find('id', memberToFind.id).joinedAt, true) //Shows when the user joined the guild
            .addField('User ID', memberToFind.id, true) //Shows the user ID
            .setColor(`#0099ff`) //Make the embed white
            .setFooter('Searched User') //Add a footer
            .setTimestamp() //Timestamp the footer
 
        message.channel.send(embed);
    console.log(`${message.author.tag} used the whois command`);
	  
  } 
    if (command === "asl") {
  let age = args[0]; // Remember arrays are 0-based!.
  let sex = args[1];
  let location = args[2];
  message.reply(`Hello ${message.author.username}, I see you're a ${age} year old ${sex} from ${location}. Wanna date?`);
   console.log(`${message.author.tag} used the asl command`);
  } 
  
  
  if(command === "serverinfo") {

    let bots = 0;
    let humans = 0;
    
    message.guild.members.forEach(member => {
        if(member.user.bot) {
            bots++
        } else {
            humans++
        }
    });

   const sembed = new Discord.RichEmbed()
   .setAuthor(message.guild.name, message.guild.iconURL)
   .setColor(`#4286f4`)
   .setThumbnail(message.guild.iconURL)
   .addField("Owner", message.guild.owner, true)
   .addField("Members",`${humans} (${bots} Bots)`, true)
   .addField("ID", message.guild.id, true)
   .addField("Channels", message.guild.channels.size, true)
   .addField("Roles", message.guild.roles.size, true)
   .addField("Emojis", message.guild.emojis.size, true)
   .addField("Server Region", message.guild.region, true)
   .addField("Verification level", message.guild.verificationLevel, true)
   .setFooter(message.guild.createdAt);

    message.channel.send(sembed)
	  console.log(`${message.author.tag} used the serverinfo command`);
  } 

  if(command === 'usercount') {
    let total = bot.users.size
    let inserver = message.guild.members.size
    let cEmbed = new Discord.RichEmbed()
    .setTitle('User Count')
    .addField('In This Server', inserver)
    .addField('Total Users', total)
    message.channel.send(cEmbed)
    console.log(`${message.author.tag} used the usercount command`);
	
  }
  
    if(command === "help") {

    const embed = {
      "title": "Invite",
      "description": "This help page will show all of the commands. Click here to invite the bot.",
      "url": "insertboturl",
      "color": 81713,
      "timestamp": "2019-07-3T22:29:16.837Z",
      "footer": {
        "icon_url": "insertavatarurl",
        "text": "Happy to help! -Leviathan"
      },
      "author": {
        "name": "botname",
        "url": "insertboturl",
        "icon_url": "insertbotavatarurl"
      },
      "fields": [
	    {
          "name": "insertprefixupdates",
          "value": "insertprefixupdates   |   shows current and future progress on the bot"
        },
        {
          "name": "insertprefixkick",
          "value": "insertprefixkick @name <reason for kick>   |   Kicks a player from the server (Must have a role named Kick on your server)"
        },
        {
          "name": "insertprefixusercount",
          "value": "insertprefixusercount  |  Shows all the users the bot is connected to"
        },
        { 
          "name": "insertprefixban",
          "value": "insertprefixban @name <reason for ban>    |   Bans a player from the server (Must have a role named Ban on your server)"
        },
        {
          "name": "insertprefixpurge",
          "value": "insertprefixpurge <number between 5 and 1000>   |   Removes certain number of messages (Must have a role named Purge on your server)"
        },
        {
          "name": "insertprefixping",
          "value": "insertprefixping   |   Tells you how much delay the bot has"
        },
        {
          "name": "insertprefixwhois",
          "value": "insertprefixwhois @name   |   Shows some information about the user"
        },
        {
          "name": "insertprefixasl",
          "value": "insertprefixasl <age> <sex> <Location>   |   Sets your ASL (Age Sex Location)"
        },
        {
          "name": "insertprefixserverinfo",
          "value": "insertprefixserverinfo   |   Gives information about the server"
        },
        {
          "name": "insertprefixavatar",
          "value": "insertprefixavatar   |   Gets your avatar image   |   $avatar @name   |   Gets a players avatar image"  
        },
        {
          "name": "insertprefixuptime", 
          "value": "insertprefixuptime   | Shows the uptime of the bot"
        },
        { 
          "name": "insertprefixcointoss",
          "value": "insertprefixcointoss | Flips heads or tails"
        }, 
		{ 
          "name": "insertprefixrussianroulette",
          "value": "insertprefixrussianroulette | Play a friendly round of russian roulette"
        }, 
		{ 
          "name": "insertprefixamigay",
          "value": "insertprefixamigay | Tells if your sexual orientation"
        }, 
		{ 
          "name": "insertprefixrailroadcrossing",
          "value": "insertprefixrailroadcrossing | Get stuck behind a train and wait forever"
        }, 
		{ 
          "name": "insertprefixmypp",
          "value": "insertprefixmypp | Show off your pp size and amaze or horrify friends."
        }, 
		{ 
          "name": "insertprefixmyppvisual",
          "value": "insertprefixmyppvisual | Show off your pp size and amaze or horrify friends but this time with a twist."
        }, 
		{ 
          "name": "insertprefix1to100",
          "value": "insertprefix1to10   |   Picks a number from 1 to 100" 
        },
        { 
          "name": "insertprefixbeep",
          "value": "insertprefixbeep   |   boop" 
        },
        {
          "name": "insertprefixhelp",
          "value": "insertprefixhelp   |   Sends this message" 
        },
        {
          "name": "insertprefixsay",
          "value": "insertprefixsay <insert message here>   |   Have the bot say your message"
        },
		{
          "name": "insertprefixufo",
          "value": "insertprefixufo   |   Shows a youtube link"
        }, 
		{
          "name": "insertprefixsweden",
          "value": "insertprefixsweden   |   Shows a youtube link"
        }, 
		{
          "name": "insertprefixhug",
          "value": "insertprefixhug @name   |   hugs the person you tag (May be slow)"
        }, 
		{
          "name": "insertprefixlove",
          "value": "insertprefixlove @name   |   love the person you tag"
        }, 
		{
          "name": "insertprefixkiss",
          "value": "insertprefixkiss @name   |   kisses the person you tag (May be slow)"
        }, 
        { 
          "name": "insertprefixargsinfo",
          "value": "insertprefixargsinfo   |   Shows arguments about a given message"
        }
		
      ]
    };
    message.channel.send("Getting your help page...", { embed });
    console.log(`${message.author.tag} used the help command`);
  }
  
  
  if(command === "updates") {

    const embed = {
      "title": "Updates and news",
     "fields": [
       {
          "name": "Introduction of new mini games (7/9/2019)",
          "value": "I plan to add more than just dick jokes and reskinned minigames soon but for now I hope you enjoy. check back daily as this page WILL change"
        },        
	   { 
          "name": "Games added",
          "value": "The following commands are the new games added.   |   russianroulette, mypp, myppvisual, railroadcrossing, 1to100, amigay and cointoss "
        }
    ]
    };
    message.channel.send("Getting update list...", { embed });
    console.log(`${message.author.tag} used the updates command`);
  }
  
  if(command === "beep") {
    const m = await message.channel.send(`Gathering hot to boop....`);
     m.edit(`boop`);
	  console.log(`${message.author.tag} used the beep command`);


  } 
  
    if(command === "eval") {
    console.log(devs)
if(devs.includes(message.author.id)) {
      try {
        const code = args.join(" ");
        if(code.includes('process.env.TOKEN')) return message.channel.send('You can\'t reveal my token!')
        let evaled = eval(code);
        if (typeof evaled !== "string")
          evaled = require("util").inspect(evaled);
        console.log();((evaled), {code:"xl"});
      }catch (err) {
        console.log(`\`ERROR\` \`\`\`xl\n${(err)}\n\`\`\``);
      }
    }
  }
});

client.login(config.token);