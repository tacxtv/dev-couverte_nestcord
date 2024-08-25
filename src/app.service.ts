import { Injectable } from "@nestjs/common"
import { EmbedBuilder, User } from "discord.js";
import { Context, SlashCommand, SlashCommandContext, TargetUser, UserCommand, UserCommandContext } from "necord"

@Injectable()
export class AppService {
  @SlashCommand({
    name: 'ping',
    description: 'Ping command!'
  })
  public async onPing(@Context() [interaction]: SlashCommandContext) {
    return interaction.reply({ content: 'Pong!' });
  }

  @UserCommand({ name: 'Get avatar' })
  public async getUserAvatar(
    @Context() [interaction]: UserCommandContext,
    @TargetUser() user: User,
  ) {
    return interaction.reply({
      embeds: [
        new EmbedBuilder()
          .setTitle(`${user.tag}'s avatar`)
          .setImage(user.displayAvatarURL())
      ],
    })
  }
}
