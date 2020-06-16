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

  member.addRole(guild.roles.find(role => role.name == "기본유저"));
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

  if(message.content === '후이야 흠') {
    message.channel.send('메이터');
  }

  if(message.content === '후이야 버전') {
    message.channel.send('버전은 ver.1.3.2 입니다.');
  }

  if(message.content === '후이야 kimhui9027') {
    message.channel.send('위대하신(?) 저의 제작자군요.');
  }

  if(message.content === '후이야 하이') {
    message.reply('hello world!');
  }

  if(message.content === '후이야 도움말 후이봇과 놀기') {
    message.channel.send('후이와 놀기\n 후이야 안녕\n 후이야 너 못생겼어\n  후이바보, 후이 바보, 후이야 바보\n  후이야 흠\n 후이야 하이\n 후이야 빡대갈이야?\n  후이야?\n 후이야 안경빨\n 후이야 하트\n 후이야 넌\n 후이야 나 귀여워?\n 후이야 크시는 어때?\n 후이야 넌\n 후이야 앗!\n  후이야 뭐해?\n  후이야 노래해줘\n 후이야 강화해줘\n 후이야 배워 등');
  }

  if(message.content == '후이야 도움말') {
    let img = '';
    let embed = new Discord.RichEmbed()
      .setTitle('후이봇의 도움말')
      .setURL('http://www.naver.com')
      .setAuthor('', img, '')
      .setThumbnail(img)
      .addBlankField()
      .addField('후이야 도움말 후이봇과 놀기', '후이봇과 노는 법을 알여줌')
      .addField('후이야 도움말 공지', '공지의 사용법을 알려줌', true)
      .addField('후이야 버전', '후이봇의 버전을 알 수 있음', true)
      .addField('Inline field title', 'Some value here', true)
      .addField('Inline field title', 'Some value here1\nSome value here2\nSome value here3\n')
      .addBlankField()
      .setTimestamp()
      .setFooter('', img)

  if(message.content.startsWith('후이야 전체공지')) {
    if(checkPermission(message)) return
    if(message.member != null) { // 채널에서 공지 쓸 때
      let contents = message.content.slice('후이야 전체공지'.length);
      message.member.guild.members.array().forEach(x => {
        if(x.user.bot) return;
        x.user.send(`<@${message.author.id}> ${contents}`);
      });
  
      return message.reply('공지를 전송했습니다.');
    } else {
      return message.reply('채널에서 실행해주세요.');
    }
  }

});

function checkPermission(message) {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) {
    message.channel.send(`<@${message.author.id}> ` + "명령어를 수행할 관리자 권한을 소지하고 있지않습니다.")
    return true;
  } else {
    return false;
  }
}

client.login(token);
