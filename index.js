const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.token;
const welcomeChannelName = "입장-퇴장";
const byeChannelName = "입장-퇴장";
const welcomeChannelComment = "님! Team.kimhui9027에 오신 것을 환영합니다!";
const byeChannelComment = "님이 Team.kimhui9027에서 나가신다니 아쉽네요,";

client.on('ready', () => {
  console.log('kimhui9027 bot has enabled');
});

client.on("guildMemberAdd", (member) => {
  const guild = member.guild;
  const newUser = member.user;
  const welcomeChannel = guild.channels.find(channel => channel.name == welcomeChannelName);

  welcomeChannel.send(`<@${newUser.id}> ${welcomeChannelComment}\n`);

  member.addRole(guild.roles.find(role => role.name == "게스트"));
});

client.on("guildMemberRemove", (member) => {
  const guild = member.guild;
  const deleteUser = member.user;
  const byeChannel = guild.channels.find(channel => channel.name == byeChannelName);

  byeChannel.send(`<@${deleteUser.id}> ${byeChannelComment}\n`);
});

client.on('message', (message) => {
  if(message.author.bot) return;

  if(message.content === '후이야 안녕') {
    message.reply('안녕하세요');
  }

  if(message.content === '후이야') {
    message.reply('부르셨어요?');
  }

  if(message.content === '후이야 강화해줘') {
    message.reply('제가 그걸 어떻게 하나요.');
  }

  if(message.content === '후이야 노래해줘') {
    message.reply('음치라서 안돼요!');
  }

  if(message.content === '후이야 앗!') {
    message.channel.send('야생의 일반유저가 나타났다!');
  }

  if(message.content === '후이야 뭐해?') {
    message.reply('kimhui9027님의 명령 프롬프트에 의해 조종당하고 있어요.');
  }

  if(message.content === '후이야 넌') {
    message.reply('넌 나에게 모욕감을 줬어.');
  }

  if(message.content === '후이야 나 귀여워?') {
    message.reply('님 착각하지 마세요');
  }

  if(message.content === '후이야 너 못생겼어') {
    message.reply('너어는 진짜...');
  }

  if(message.content === '후이야 크시는 어때?') {
    message.channel.send('우웩');
  }

  if(message.content === '후이야 하트') {
    message.channel.send('우웨웩...');
  }

  if(message.content === '후이야 안경빨') {
    message.channel.send('뽀로로');
  }

  if(message.content === '후이야?') {
    message.channel.send('여기 있는데 왜 그러시나요');
  }

  if(message.content === '후이바보') {
    message.channel.send('뭐이새꺄?');
  }

  if(message.content === '후이 바보') {
    message.channel.send('뭐이새꺄?');
  }

  if(message.content === '후이야 바보') {
    message.channel.send('뭐이새꺄?');
  }

  if(message.content === '후이야 배워') {
    message.reply('난 크시가 아니란다.');
  }

  if(message.content === '후이야 빡대갈이야?') {
    message.reply('뒤질래?');
  }

});

client.login(token);
