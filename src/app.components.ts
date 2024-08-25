import { Injectable } from '@nestjs/common'
import { Context, Button, ButtonContext, ComponentParam, StringSelect, StringSelectContext, SelectedStrings, UserSelect, UserSelectContext, ISelectedUsers, ISelectedMembers, SelectedMembers, SelectedUsers } from 'necord'

@Injectable()
export class AppComponents {
  @Button('confirm/:id')
  public onConfirm(
    @Context() [interaction]: ButtonContext,
    @ComponentParam('id') id: string,
  ) {
    return interaction.reply({
      content: 'Button confirm! : ' + id,
      ephemeral: true,
    })
  }

  @Button('cancel/:id')
  public onCancel(
    @Context() [interaction]: ButtonContext,
    @ComponentParam('id') id: string,
  ) {
    return interaction.reply({
      content: 'Button cancel! : ' + id,
      ephemeral: true,
    })
  }


  @StringSelect('select/:id')
  public async onStringSelect(
    @Context() [interaction]: StringSelectContext,
    @SelectedStrings() selected: string[],
  ) {
    return interaction.reply({
      content: `Your selected color - ${selected.join(' ')}`,
      ephemeral: true,
    })
  }

  @UserSelect('gugus/:id')
  public onUserSelect(
    @Context() [interaction]: UserSelectContext,
    @SelectedUsers() users: ISelectedUsers,
    @SelectedMembers() members: ISelectedMembers,
  ) {
    return interaction.reply({
      content: `
        Selected users - ${users.map(user => user.username).join(',')}\n
        Selected members - ${members.map(member => member.user?.username).join(',')}
        `,
      ephemeral: true,
    });
  }
}
