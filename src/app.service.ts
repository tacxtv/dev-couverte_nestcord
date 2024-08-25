import { Injectable } from "@nestjs/common"
import { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder, ModalActionRowComponentBuilder, ModalBuilder, StringSelectMenuBuilder, TextInputBuilder, TextInputStyle, User, UserSelectMenuBuilder } from "discord.js"
import { Arguments, Context, SlashCommand, SlashCommandContext, TargetUser, TextCommand, TextCommandContext, UserCommand, UserCommandContext } from "necord"

@Injectable()
export class AppService {
  @SlashCommand({
    name: 'ping',
    description: 'Ping command!',
  })
  public async onPing(@Context() [interaction]: SlashCommandContext) {
    return interaction.reply({ content: 'Pong!' })
  }

  @SlashCommand({
    name: 'button',
    description: 'Button command!',
  })
  public async onButton(@Context() [interaction]: SlashCommandContext) {
    const confirm = new ButtonBuilder()
      .setCustomId('confirm/12345')
      .setLabel('LABEL')
      .setStyle(ButtonStyle.Primary)

    const cancel = new ButtonBuilder()
      .setCustomId('cancel/12345')
      .setLabel('LABEL')
      .setStyle(ButtonStyle.Danger)

    const row = new ActionRowBuilder()
      .addComponents(confirm, cancel)

    return interaction.reply({
      content: `Are you sure?`,
      components: [row as any],
      ephemeral: true,
    })
  }

  @SlashCommand({
    name: 'select',
    description: 'Select command!',
  })
  public async onSelect(@Context() [interaction]: SlashCommandContext) {
    const select = new StringSelectMenuBuilder()
      .setCustomId('select/12345')
      .setPlaceholder('Select an option')
      .setOptions([
        { label: 'Option 1', value: '1' },
        { label: 'Option 2', value: '2' },
        { label: 'Option 3', value: '3' },
      ])

    const row = new ActionRowBuilder()
      .addComponents(select)

    return interaction.reply({
      content: `Are you sure?`,
      components: [row as any],
      ephemeral: true,
    })
  }

  @SlashCommand({
    name: 'gugus',
    description: 'Gugus command!',
  })
  public async onGugus(@Context() [interaction]: SlashCommandContext) {
    const select = new UserSelectMenuBuilder()
      .setCustomId('gugus/12345')
      .setPlaceholder('Select an option')
      .setMaxValues(1)
      .setMinValues(1)

    const row = new ActionRowBuilder()
      .addComponents(select)

    return interaction.reply({
      content: `Are you sure?`,
      components: [row as any],
      ephemeral: true,
    })
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
      ephemeral: true,
    })
  }

  @UserCommand({ name: 'Get a pizza' })
  public async getPizza(
    @Context() [interaction]: UserCommandContext,
    @TargetUser() user: User,
  ) {
    const modal = new ModalBuilder()
      .setTitle('What your fav pizza?')
      .setCustomId('pizza/12345')
      .setComponents([
        new ActionRowBuilder<ModalActionRowComponentBuilder>().addComponents([
          new TextInputBuilder()
            .setCustomId('pizza')
            .setLabel('???')
            .setStyle(TextInputStyle.Paragraph)
        ])
      ])

    return interaction.showModal(modal)
  }

  @TextCommand({
    name: 'ping',
    description: 'Ping command!',
  })
  public onPingText(@Context() [message]: TextCommandContext) {
    return message.reply('pong!')
  }

  @TextCommand({
    name: 'echo',
    description: 'Echo command!',
  })
  public onEcho(@Context() [message]: TextCommandContext, @Arguments() args: string[]) {
    return message.reply(args.join(' '));
  }
}
