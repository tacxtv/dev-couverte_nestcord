import { IntentsBitField } from "discord.js"
import { NecordModuleOptions } from "necord"

export interface ConfigInstance {
  necord: {
    options: NecordModuleOptions
  }
}

export default async (): Promise<ConfigInstance> => ({
  necord: {
    options: {
      token: 'DISCORD_BOT_TOKEN',
      intents: [IntentsBitField.Flags.Guilds],
    },
  },
})
