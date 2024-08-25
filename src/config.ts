import { GatewayIntentBits, IntentsBitField } from "discord.js"
import { NecordModuleOptions } from "necord"

export interface ConfigInstance {
  necord: {
    options: NecordModuleOptions
  }
}

export default async (): Promise<ConfigInstance> => ({
  necord: {
    options: {
      token: process.env.NECORD_TOKEN,
      intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMessages,
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
      ],
      development: [process.env.NECORD_DEVELOPMENT_GUILD_ID],
    },
  },
})
