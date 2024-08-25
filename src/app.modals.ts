import { Injectable } from "@nestjs/common"
import { Ctx, Modal, ModalContext } from "necord";

@Injectable()
export class AppModals {
  @Modal('pizza/:id')
  public onModal(@Ctx() [interaction]: ModalContext) {
    return interaction.reply({
      content: `Your fav pizza : ${interaction.fields.getTextInputValue('pizza')}`
    });
  }
}
