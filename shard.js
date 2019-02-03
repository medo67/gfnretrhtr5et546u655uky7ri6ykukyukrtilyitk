const Discord = require('discord.js');
const Manager = new Discord.ShardingManager('./bot.js'); //اسم ملف بوتك 
Manager.spawn(2);
