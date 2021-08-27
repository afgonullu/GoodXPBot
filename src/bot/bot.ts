import tmi, { ChatUserstate, Client } from 'tmi.js';
import config from '../config';
// import globalCommand from '../models/globalCommand';

const handleMessages = (client: Client) => {
  const onMessageHandler = async (
    channel: string,
    _userState: ChatUserstate,
    message: string,
    self: boolean,
  ): Promise<void> => {
    if (self) {
      return;
    }

    // const commandName = message.trim();

    // const commands = await globalCommand.find();

    // commands.forEach(async (command) => {
    //   if (command.name === commandName.substr(1)) {
    //     // eslint-disable-next-line @typescript-eslint/no-floating-promises
    //     await client.say(channel, `deneme ${command.response}`);
    //   }
    // });

    if (message === '!dice') {
      const num = rollDice();
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      try {
        await client.say(channel, `Hiya, You rolled a ${num}`);
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log(`* Unknown command ${message}`);
    }
  };

  client.on('message', onMessageHandler);
};

const init = (username: string, password: string, channels: string[]): Client => {
  const opts = {
    identity: {
      username,
      password,
    },
    channels,
  };

  const client = new tmi.Client(opts);

  const onConnectedHandler = (addr: any, port: any) => {
    console.log(`* Connected to ${addr}:${port}`);
  };

  handleMessages(client);
  // client.addListener("message", ) .on() .on('message', onMessageHandler);
  client.on('connected', onConnectedHandler);

  // eslint-disable-next-line @typescript-eslint/no-floating-promises
  client.connect();

  return client;
};

const join = async (client: Client, channel: string) => {
  await client.join(channel);
  return client;
};

function rollDice() {
  const sides = 6;
  return Math.floor(Math.random() * sides) + 1;
}

init('cgrbot', config.BOT_OAUTH, ['goodxpgames']);

export default { init, join };
