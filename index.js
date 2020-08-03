const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.token;
const welcomeChannelName = "입장-퇴장";
const byeChannelName = "입장-퇴장";
const welcomeChannelComment = "님! Team.kimhui9027에 오신 것을 환영합니다!";
const byeChannelComment = "님이 Team.kimhui9027에서 나가신다니 아쉽네요,";

client.on('ready', () => {
  console.log('kimhui9027 bot has enabled');
  client.user.setActivity('"후이야 도움말"을 쳐서 도움말을 볼 수 있습니다.', {type : 'PLAYING'});
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

  if(message.content === '후이야 시끄러워') {
    message.reply('닥쳐.');
  }

  if(message.content === '후이야 화려한조명이') {
    message.reply('노래 못한다니깐');
  }

  if(message.content === '후이야 無') {
    message.channel.send('의사양반 : 어.. 그러니까... 없어요');
  }

  if(message.content === '후이야 시끄러워') {
    message.reply('닥쳐.');
  }

  if(message.content === '후이야 왜 쉬었어?') {
    message.reply('삽소리 하지마세요.');
  }

  if(message.content === '후이야 후라이') {
    message.channel.send('팬');
  }

  if(message.content === '후이야 코로나') {
    message.reply('나는 코로나다!');
    message.channel.send('[비명소리]');
  }

  if(message.content === '후이야 강화해줘') {
    message.reply('제가 그걸 어떻게 하나요.');
  }

  if(message.content === '후아야 :heart:') {
    message.reply('드러워.');
  }

  if(message.content === '후아야:heart:') {
    message.reply('드러워.');
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

  if(message.content === '후이야 치킨 시켜줘') {
    message.channel.send('시러.');
  }

  if(message.content === '후이야 치킨좀') {
    message.channel.send('시러! 안된다고!');
  }
  
  if(message.content === '후이야 울어') {
    message.channel.send(':cry:');
  }

  if(message.content === '후이야 넌') {
    message.reply('넌 나에게 모욕감을 줬어.');
  }

  if(message.content === '후이야 나 귀여워?') {
    message.reply('님 착각하지 마세요.');
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

  if(message.content === '후이야 자폭해') {
    message.channel.send(':exploding_head:');
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

  if(message.content === '후이야 후이야') {
    message.channel.send('왜 두번 부르시나요?');
  }

  if(message.content === '후이야 배고파') {
    message.channel.send('내가 니엄마냐 알아서 처먹어');
  }

  if(message.content === '후이야 밥줘') {
    message.channel.send('난 봇일 뿐이란다. 밥은 니 엄마한테 해달라고 해.');
  }

  if(message.content === '후이야 버전') {
    message.channel.send('버전은 ver.1.8.2 입니다.');
  }

  if(message.content === '후이야 kimhui9027') {
    message.channel.send('위대하신(?) 저의 제작자군요.');
  }

  if(message.content === '후이야 하이') {
    message.reply('hello world!');
  }

  if(message.content == '후이야 도움말') {
    let img = '';
    let embed = new Discord.RichEmbed()
      .setTitle('후이봇의 도움말')
      .setURL('')
      .setAuthor('', img, '')
      .setThumbnail(img)
      .addBlankField()
      .addField('후이야 도움말 후이봇과 놀기, 후이야 도움말2', '후이봇과 노는 법을 알여줌')
      .addField('후이야 도움말 공지, 후이야 도움말3', '후이봇이 전해주는 공지의 사용법을 알려줌', true)
      .addField('후이야 버전', '후이봇의 버전을 알 수 있음', true)
      .addField('후이야 업데이트 내역', '후이봇의 업데이트 내역을 볼 수 있음', true)
      .addField('.투표 투표제목.투표1.투표2.~', '후이봇으로 투표를 할 수 있음', true)
      .addBlankField()
      .setTimestamp()
      .setFooter('', img)

    message.channel.send(embed)
  } else if(message.content == 'embed2') {
    let helpImg = 'https://images-ext-1.discordapp.net/external/RyofVqSAVAi0H9-1yK6M8NGy2grU5TWZkLadG-rwqk0/https/i.imgur.com/EZRAPxR.png';
    let commandList = [
      {name: 'ping', desc: '현재 핑 상태'},
      {name: 'embed', desc: 'embed 예제1'},
      {name: 'embed2', desc: 'embed 예제2 (help)'},
      {name: '!전체공지', desc: 'dm으로 전체 공지 보내기'},
    ];
    let commandStr = '';
    let embed = new Discord.RichEmbed()
      .setAuthor('Help of 콜라곰 BOT', helpImg)
      .setColor('#186de6')
      .setFooter(`콜라곰 BOT ❤️`)
      .setTimestamp()
    
    commandList.forEach(x => {
      commandStr += `• \`\`${changeCommandStringLength(`${x.name}`)}\`\` : **${x.desc}**\n`;
    });

    embed.addField('Commands: ', commandStr);

    message.channel.send(embed)
  }

  if(message.content == '후이야 도움말 후이봇과 놀기') {
    let img = '';
    let embed = new Discord.RichEmbed()
      .setTitle('후이봇과 놀기')
      .setURL('')
      .setAuthor('', img, '')
      .setThumbnail(img)
      .addBlankField()
      .addField('후이야', '후이봇을 부른다.', true)
      .addField('후이야?', '후이봇을 또 부른다.', true)
      .addField('후이야 후이야', '후이봇을 두번 더 부른다.', true)
      .addField('후이야 안녕', '후이봇과 인사를 할 수 있음.', true)
      .addField('후이바보, 후이 바보, 후이야 바보', '후이봇과 후이봇관리자를 기분나쁘게 한다.', true)
      .addField('후이야 너 못생겼어', '같이 기분나쁘게 하는거지만 맞는 말이다.', true)
      .addField('후이야 흠', '흠.', true)
      .addField('후이야 후라이', '깡!', true)
      .addField('후이야 無', '이보시오.. 이보시오... 의사양반!', true)
      .addField('후이야 배고파, 후이야 밥줘', '후이봇한테 밥을 얻어먹을 수 있다.(없다)', true)
      .addField('후이야 시끄러워', '흐으음...', true)
      .addField('후이야 안녕, 하이', '후이봇에게 인사를 한다.', true)
      .addField('후이야 빡대갈이야?', '후이봇과 후이봇 관리자를 더 기분나쁘게 한다.', true)
      .addField('후이야 하트', '우웩.', true)
      .addField('후이야 코로나', '이시국에?', true)
      .addField('후이야 자폭해', '[폭발음]', true)
      .addField('후이야 치킨 시켜줘', '오늘 저녁은 치킨이닭?', true)
      .addField('후이야 크시는 어때?', '우웨웩.', true)
      .addField('후이야 넌', '넌 나에게 모욕감을 줬어.', true)
      .addField('후이야 앗!', '야생의 일반유저가 나왔다!', true)
      .addField('후이야 화려한조명이', '나를 감싸네.', true)
      .addField('후이야 노래해줘, 후이야 강화해줘,후이야 배워', '후이봇이 못 하는것.', true)
      .addField('후이야 빡대갈이야?', '후이봇과 후이봇 관리자를 더 기분나쁘게 한다.', true)
      .addBlankField()
      .setTimestamp()
      .setFooter('그 외는 관리자에게 물어보시오.')

    message.channel.send(embed)
  } else if(message.content == 'embed2') {
    let helpImg = 'https://images-ext-1.discordapp.net/external/RyofVqSAVAi0H9-1yK6M8NGy2grU5TWZkLadG-rwqk0/https/i.imgur.com/EZRAPxR.png';
    let commandList = [
      {name: 'ping', desc: '현재 핑 상태'},
      {name: 'embed', desc: 'embed 예제1'},
      {name: 'embed2', desc: 'embed 예제2 (help)'},
      {name: '!전체공지', desc: 'dm으로 전체 공지 보내기'},
    ];
    let commandStr = '';
    let embed = new Discord.RichEmbed()
      .setAuthor('Help of 콜라곰 BOT', helpImg)
      .setColor('#186de6')
      .setFooter(`콜라곰 BOT ❤️`)
      .setTimestamp()
    
    commandList.forEach(x => {
      commandStr += `• \`\`${changeCommandStringLength(`${x.name}`)}\`\` : **${x.desc}**\n`;
    });

    embed.addField('Commands: ', commandStr);

    message.channel.send(embed)
  }

  if(message.content == '후이야 도움말2') {
    let img = '';
    let embed = new Discord.RichEmbed()
      .setTitle('후이봇과 놀기')
      .setURL('')
      .setAuthor('', img, '')
      .setThumbnail(img)
      .addBlankField()
      .addField('후이야', '후이봇을 부른다.', true)
      .addField('후이야?', '후이봇을 또 부른다.', true)
      .addField('후이야 후이야', '후이봇을 두번 더 부른다.', true)
      .addField('후이야 안녕', '후이봇과 인사를 할 수 있음.', true)
      .addField('후이바보, 후이 바보, 후이야 바보', '후이봇과 후이봇관리자를 기분나쁘게 한다.', true)
      .addField('후이야 너 못생겼어', '같이 기분나쁘게 하는거지만 맞는 말이다.', true)
      .addField('후이야 흠', '흠.', true)
      .addField('후이야 후라이', '깡!', true)
      .addField('후이야 無', '이보시오.. 이보시오... 의사양반!', true)
      .addField('후이야 배고파, 후이야 밥줘', '후이봇한테 밥을 얻어먹을 수 있다.(없다)', true)
      .addField('후이야 시끄러워', '흐으음...', true)
      .addField('후이야 안녕, 하이', '후이봇에게 인사를 한다.', true)
      .addField('후이야 빡대갈이야?', '후이봇과 후이봇 관리자를 더 기분나쁘게 한다.', true)
      .addField('후이야 하트', '우웩.', true)
      .addField('후이야 코로나', '이시국에?', true)
      .addField('후이야 자폭해', '[폭발음]', true)
      .addField('후이야 치킨 시켜줘', '오늘 저녁은 치킨이닭?', true)
      .addField('후이야 크시는 어때?', '우웨웩.', true)
      .addField('후이야 넌', '넌 나에게 모욕감을 줬어.', true)
      .addField('후이야 앗!', '야생의 일반유저가 나왔다!', true)
      .addField('후이야 화려한조명이', '나를 감싸네.', true)
      .addField('후이야 노래해줘, 후이야 강화해줘,후이야 배워', '후이봇이 못 하는것.', true)
      .addField('후이야 빡대갈이야?', '후이봇과 후이봇 관리자를 더 기분나쁘게 한다.', true)
      .addBlankField()
      .setTimestamp()
      .setFooter('그 외는 관리자에게 물어보시오.')

    message.channel.send(embed)
  } else if(message.content == 'embed2') {
    let helpImg = 'https://images-ext-1.discordapp.net/external/RyofVqSAVAi0H9-1yK6M8NGy2grU5TWZkLadG-rwqk0/https/i.imgur.com/EZRAPxR.png';
    let commandList = [
      {name: 'ping', desc: '현재 핑 상태'},
      {name: 'embed', desc: 'embed 예제1'},
      {name: 'embed2', desc: 'embed 예제2 (help)'},
      {name: '!전체공지', desc: 'dm으로 전체 공지 보내기'},
    ];
    let commandStr = '';
    let embed = new Discord.RichEmbed()
      .setAuthor('Help of 콜라곰 BOT', helpImg)
      .setColor('#186de6')
      .setFooter(`콜라곰 BOT ❤️`)
      .setTimestamp()
    
    commandList.forEach(x => {
      commandStr += `• \`\`${changeCommandStringLength(`${x.name}`)}\`\` : **${x.desc}**\n`;
    });

    embed.addField('Commands: ', commandStr);

    message.channel.send(embed)
  }
  
  if(message.content == '후이야 도움말 공지') {
    let img = '';
    let embed = new Discord.RichEmbed()
      .setTitle('후이봇이 전해주는 공지')
      .setURL('')
      .setAuthor('', img, '')
      .setThumbnail(img)
      .addBlankField()
      .addField('후이야 전체공지 [메시지]', '서버에 접속해있는 모든 유저에게 DM으로 공지를 보낸다.', true)
      .addBlankField()
      .setTimestamp()
      .setFooter('', img)

    message.channel.send(embed)
  } else if(message.content == 'embed2') {
    let helpImg = 'https://images-ext-1.discordapp.net/external/RyofVqSAVAi0H9-1yK6M8NGy2grU5TWZkLadG-rwqk0/https/i.imgur.com/EZRAPxR.png';
    let commandList = [
      {name: 'ping', desc: '현재 핑 상태'},
      {name: 'embed', desc: 'embed 예제1'},
      {name: 'embed2', desc: 'embed 예제2 (help)'},
      {name: '!전체공지', desc: 'dm으로 전체 공지 보내기'},
    ];
    let commandStr = '';
    let embed = new Discord.RichEmbed()
      .setAuthor('Help of 콜라곰 BOT', helpImg)
      .setColor('#186de6')
      .setFooter(`콜라곰 BOT ❤️`)
      .setTimestamp()
    
    commandList.forEach(x => {
      commandStr += `• \`\`${changeCommandStringLength(`${x.name}`)}\`\` : **${x.desc}**\n`;
    });

    embed.addField('Commands: ', commandStr);

    message.channel.send(embed)
  }
  
  if(message.content == '후이야 도움말3') {
    let img = '';
    let embed = new Discord.RichEmbed()
      .setTitle('후이봇이 전해주는 공지')
      .setURL('')
      .setAuthor('', img, '')
      .setThumbnail(img)
      .addBlankField()
      .addField('후이야 전체공지 [메시지]', '서버에 접속해있는 모든 유저에게 DM으로 공지를 보낸다.', true)
      .addBlankField()
      .setTimestamp()
      .setFooter('', img)

    message.channel.send(embed)
  } else if(message.content == 'embed2') {
    let helpImg = 'https://images-ext-1.discordapp.net/external/RyofVqSAVAi0H9-1yK6M8NGy2grU5TWZkLadG-rwqk0/https/i.imgur.com/EZRAPxR.png';
    let commandList = [
      {name: 'ping', desc: '현재 핑 상태'},
      {name: 'embed', desc: 'embed 예제1'},
      {name: 'embed2', desc: 'embed 예제2 (help)'},
      {name: '!전체공지', desc: 'dm으로 전체 공지 보내기'},
    ];
    let commandStr = '';
    let embed = new Discord.RichEmbed()
      .setAuthor('Help of 콜라곰 BOT', helpImg)
      .setColor('#186de6')
      .setFooter(`콜라곰 BOT ❤️`)
      .setTimestamp()
    
    commandList.forEach(x => {
      commandStr += `• \`\`${changeCommandStringLength(`${x.name}`)}\`\` : **${x.desc}**\n`;
    });

    embed.addField('Commands: ', commandStr);

    message.channel.send(embed)
  }
  
  if(message.content == '후이야 도움말 정보') {
    let img = '';
    let embed = new Discord.RichEmbed()
      .setTitle('후이봇이 생각하는 분들')
      .setURL('')
      .setAuthor('', img, '')
      .setThumbnail(img)
      .addBlankField()
      .addField('후이야 정보 아랍전자', '아랍전자님의 정보를 볼 수 있습니다.(kimhui9027이 생각하는 정보입니다.)', true)
      .addField('후이야 정보 흠메이터', '흠메이터의 정보를 볼 수 있습니다.(kimhui9027이 생각하는 정보입니다.)')
      .addField('후이야 정보 kimhui9027', '제가 그냥 만들어본겁니다.')
      .addBlankField()
      .setTimestamp()
      .setFooter('kimhui9027에게 문의하면 추가해 드립니다.', img)

    message.channel.send(embed)
  } else if(message.content == 'embed2') {
    let helpImg = 'https://images-ext-1.discordapp.net/external/RyofVqSAVAi0H9-1yK6M8NGy2grU5TWZkLadG-rwqk0/https/i.imgur.com/EZRAPxR.png';
    let commandList = [
      {name: 'ping', desc: '현재 핑 상태'},
      {name: 'embed', desc: 'embed 예제1'},
      {name: 'embed2', desc: 'embed 예제2 (help)'},
      {name: '!전체공지', desc: 'dm으로 전체 공지 보내기'},
    ];
    let commandStr = '';
    let embed = new Discord.RichEmbed()
      .setAuthor('Help of 콜라곰 BOT', helpImg)
      .setColor('#186de6')
      .setFooter(`콜라곰 BOT ❤️`)
      .setTimestamp()
    
    commandList.forEach(x => {
      commandStr += `• \`\`${changeCommandStringLength(`${x.name}`)}\`\` : **${x.desc}**\n`;
    });

    embed.addField('Commands: ', commandStr);

    message.channel.send(embed)
  }

  if(message.content == '후이야 업데이트 내역') {
    let img = '';
    let embed = new Discord.RichEmbed()
      .setTitle('업데이트 내역')
      .setURL('')
      .setAuthor('', img, '')
      .setThumbnail(img)
      .addBlankField()
      .addField('2020.07.01', '업데이트 내역 추가, 도움말에 업데이트 내역 사용법 추가')
      .addField('2020.07.01', '업데이트 내역 수정, commands fixed.')
      .addField('2020.07.07', '후이야 정보, 후이야 도움말 정보, 후이야 도움말4 추가 완료.')
      .addField('2020.08.03', '투표봇과 통합 완료. (후이야 도움말에 있습니다.), 오타 ')
      .addField('버전', 'ver.1.8.2', true)
      .addBlankField()
      .setTimestamp()
      .setFooter('', img)

    message.channel.send(embed)
  } else if(message.content == 'embed2') {
    let helpImg = 'https://images-ext-1.discordapp.net/external/RyofVqSAVAi0H9-1yK6M8NGy2grU5TWZkLadG-rwqk0/https/i.imgur.com/EZRAPxR.png';
    let commandList = [
      {name: 'ping', desc: '현재 핑 상태'},
      {name: 'embed', desc: 'embed 예제1'},
      {name: 'embed2', desc: 'embed 예제2 (help)'},
      {name: '!전체공지', desc: 'dm으로 전체 공지 보내기'},
    ];
    let commandStr = '';
    let embed = new Discord.RichEmbed()
      .setAuthor('Help of 콜라곰 BOT', helpImg)
      .setColor('#186de6')
      .setFooter(`콜라곰 BOT ❤️`)
      .setTimestamp()
    
    commandList.forEach(x => {
      commandStr += `• \`\`${changeCommandStringLength(`${x.name}`)}\`\` : **${x.desc}**\n`;
    });

    embed.addField('Commands: ', commandStr);

    message.channel.send(embed)
  }

  if(message.content == '후이야 정보 아랍전자') {
    let img = '';
    let embed = new Discord.RichEmbed()
      .setTitle('아랍전자')
      .setURL('')
      .setAuthor('', img, '')
      .setThumbnail(img)
      .addBlankField()
      .setColor('#00ff00')
      .addField('GYCG Entertainments 디스코드를 만든 분.', '대단하다.')
      .addBlankField()
      .setTimestamp()
      .setFooter('아랍전자님의 유튜브 링크 : https://www.youtube.com/channel/UCoHPNRunRSlDtdMvqnsFTrA', img)

    message.channel.send(embed)
  } else if(message.content == 'embed2') {
    let helpImg = 'https://images-ext-1.discordapp.net/external/RyofVqSAVAi0H9-1yK6M8NGy2grU5TWZkLadG-rwqk0/https/i.imgur.com/EZRAPxR.png';
    let commandList = [
      {name: 'ping', desc: '현재 핑 상태'},
      {name: 'embed', desc: 'embed 예제1'},
      {name: 'embed2', desc: 'embed 예제2 (help)'},
      {name: '!전체공지', desc: 'dm으로 전체 공지 보내기'},
    ];
    let commandStr = '';
    let embed = new Discord.RichEmbed()
      .setAuthor('Help of 콜라곰 BOT', helpImg)
      .setColor('#186de6')
      .setFooter(`콜라곰 BOT ❤️`)
      .setTimestamp()
    
    commandList.forEach(x => {
      commandStr += `• \`\`${changeCommandStringLength(`${x.name}`)}\`\` : **${x.desc}**\n`;
    });

    embed.addField('Commands: ', commandStr);

    message.channel.send(embed)
  }

  if(message.content == '후이야 정보 흠메이터') {
    let img = '';
    let embed = new Discord.RichEmbed()
      .setTitle('흠메이터')
      .setURL('')
      .setAuthor('', img, '')
      .setThumbnail(img)
      .addBlankField()
      .setColor('#00ffff')
      .addField('kimhui9027과 많이 싸우지만 여기 있는걸 보니 마음에 들어하는거 같기도.', '이거 만든 날에도 싸움')
      .addBlankField()
      .setTimestamp()
      .setFooter('이 자식의 유튜브 링크 : https://www.youtube.com/channel/UCekWUxzMP9cYNsZBbiNoAig', img)

    message.channel.send(embed)
  } else if(message.content == 'embed2') {
    let helpImg = 'https://images-ext-1.discordapp.net/external/RyofVqSAVAi0H9-1yK6M8NGy2grU5TWZkLadG-rwqk0/https/i.imgur.com/EZRAPxR.png';
    let commandList = [
      {name: 'ping', desc: '현재 핑 상태'},
      {name: 'embed', desc: 'embed 예제1'},
      {name: 'embed2', desc: 'embed 예제2 (help)'},
      {name: '!전체공지', desc: 'dm으로 전체 공지 보내기'},
    ];
    let commandStr = '';
    let embed = new Discord.RichEmbed()
      .setAuthor('Help of 콜라곰 BOT', helpImg)
      .setColor('#186de6')
      .setFooter(`콜라곰 BOT ❤️`)
      .setTimestamp()
    
    commandList.forEach(x => {
      commandStr += `• \`\`${changeCommandStringLength(`${x.name}`)}\`\` : **${x.desc}**\n`;
    });

    embed.addField('Commands: ', commandStr);

    message.channel.send(embed)
  }

  if(message.content == '후이야 정보 kimhui9027') {
    let img = '';
    let embed = new Discord.RichEmbed()
      .setTitle('kimhui9027')
      .setURL('')
      .setAuthor('', img, '')
      .setThumbnail(img)
      .addBlankField()
      .setColor('#f00ff0')
      .addField('나의 제작자.', '솔직히 이거 쓰기 귀찮았음')
      .addBlankField()
      .setTimestamp()
      .setFooter('내 제작자의 유튜브 링크 : https://www.youtube.com/channel/UC5DKCdBWdo7ECfu5Edir6eA?view_as=subscriber', img)

    message.channel.send(embed)
  } else if(message.content == 'embed2') {
    let helpImg = 'https://images-ext-1.discordapp.net/external/RyofVqSAVAi0H9-1yK6M8NGy2grU5TWZkLadG-rwqk0/https/i.imgur.com/EZRAPxR.png';
    let commandList = [
      {name: 'ping', desc: '현재 핑 상태'},
      {name: 'embed', desc: 'embed 예제1'},
      {name: 'embed2', desc: 'embed 예제2 (help)'},
      {name: '!전체공지', desc: 'dm으로 전체 공지 보내기'},
    ];
    let commandStr = '';
    let embed = new Discord.RichEmbed()
      .setAuthor('Help of 콜라곰 BOT', helpImg)
      .setColor('#186de6')
      .setFooter(`콜라곰 BOT ❤️`)
      .setTimestamp()
    
    commandList.forEach(x => {
      commandStr += `• \`\`${changeCommandStringLength(`${x.name}`)}\`\` : **${x.desc}**\n`;
    });

    embed.addField('Commands: ', commandStr);

    message.channel.send(embed)
  }

  if(message.content == '후이야 정보 김샌드') {
    let img = '';
    let embed = new Discord.RichEmbed()
      .setTitle('김샌드')
      .setURL('')
      .setAuthor('', img, '')
      .setThumbnail(img)
      .addBlankField()
      .setColor('#f0f0f0')
      .addField('GYCG에서 초창기멤버 이다. 메니저였다가 후이에게 물려주고 나갔다가 몇번 왔다갔다 하지만 지금은 C등급으로 활동중이다.', '와!')
      .addBlankField()
      .setTimestamp()
      .setFooter('김샌드님의 유튜브 채널 링크 : https://www.youtube.com/channel/UCy5UjqKAvI6qXTdnhHxh1WA', img)

    message.channel.send(embed)
  } else if(message.content == 'embed2') {
    let helpImg = 'https://images-ext-1.discordapp.net/external/RyofVqSAVAi0H9-1yK6M8NGy2grU5TWZkLadG-rwqk0/https/i.imgur.com/EZRAPxR.png';
    let commandList = [
      {name: 'ping', desc: '현재 핑 상태'},
      {name: 'embed', desc: 'embed 예제1'},
      {name: 'embed2', desc: 'embed 예제2 (help)'},
      {name: '!전체공지', desc: 'dm으로 전체 공지 보내기'},
    ];
    let commandStr = '';
    let embed = new Discord.RichEmbed()
      .setAuthor('Help of 콜라곰 BOT', helpImg)
      .setColor('#186de6')
      .setFooter(`콜라곰 BOT ❤️`)
      .setTimestamp()
    
    commandList.forEach(x => {
      commandStr += `• \`\`${changeCommandStringLength(`${x.name}`)}\`\` : **${x.desc}**\n`;
    });

    embed.addField('Commands: ', commandStr);

    message.channel.send(embed)
  }

  if(message.content == '후이야 정보 H.SHRIMP') {
    let img = '';
    let embed = new Discord.RichEmbed()
      .setTitle('H.SHRIMP')
      .setURL('')
      .setAuthor('', img, '')
      .setThumbnail(img)
      .addBlankField()
      .setColor('#0f0ff0')
      .addField('아 쓸게 없네.', '쓸게 없었음 .')
      .addBlankField()
      .setTimestamp()
      .setFooter('그냥 추가하고 싶지 않음(어차피 모름)', img)

    message.channel.send(embed)
  } else if(message.content == 'embed2') {
    let helpImg = 'https://images-ext-1.discordapp.net/external/RyofVqSAVAi0H9-1yK6M8NGy2grU5TWZkLadG-rwqk0/https/i.imgur.com/EZRAPxR.png';
    let commandList = [
      {name: 'ping', desc: '현재 핑 상태'},
      {name: 'embed', desc: 'embed 예제1'},
      {name: 'embed2', desc: 'embed 예제2 (help)'},
      {name: '!전체공지', desc: 'dm으로 전체 공지 보내기'},
    ];
    let commandStr = '';
    let embed = new Discord.RichEmbed()
      .setAuthor('Help of 콜라곰 BOT', helpImg)
      .setColor('#186de6')
      .setFooter(`콜라곰 BOT ❤️`)
      .setTimestamp()
    
    commandList.forEach(x => {
      commandStr += `• \`\`${changeCommandStringLength(`${x.name}`)}\`\` : **${x.desc}**\n`;
    });

    embed.addField('Commands: ', commandStr);

    message.channel.send(embed)
  }

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
