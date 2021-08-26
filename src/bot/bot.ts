import tmi from 'tmi.js';
import config from '../config/config';
import globalCommand from '../models/globalCommand';

const opts = {
  identity: {
    username: 'botcgr',
    password: config.BOT_OAUTH,
  },
  channels: ['goodxpgames'],
};

const client = new tmi.Client(opts);

const botInstance = client.connect();

function rollDice() {
  const sides = 6;
  return Math.floor(Math.random() * sides) + 1;
}

async function onMessageHandler(target: string, tags: any, msg: string, self: any) {
  if (self) {
    return;
  }

  const commandName = msg.trim();

  const commands = await globalCommand.find();

  commands.forEach(async (command) => {
    if (command.name === commandName.substr(1)) {
      const messageBack = await client.say(target, command.response);
    }
  });

  if (commandName === '!dice') {
    const num = rollDice();
    const messageBack = await client.say(target, `You rolled a ${num}`);
  } else {
    console.log(`* Unknown command ${commandName}`);
  }
}

function onConnectedHandler(addr: any, port: any) {
  console.log(`* Connected to ${addr}:${port}`);
}

client.on('message', onMessageHandler);
client.on('connected', onConnectedHandler);
