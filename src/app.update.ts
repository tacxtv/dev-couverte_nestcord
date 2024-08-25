import { Injectable, Logger } from "@nestjs/common"
import { Client } from "discord.js"
import { Context, ContextOf, On, Once } from "necord"

@Injectable()
export class AppUpdate {
  private readonly logger = new Logger(AppUpdate.name)

  public constructor(
    private readonly client: Client,
  ) {
    this.logger.log("AppUpdate has been initialized 🔴")
  }

  @Once('ready')
  public onReady(@Context() [client]: ContextOf<'ready'>) {
    this.logger.log(`Bot logged in as ${client.user.username}`)
  }

  @On('warn')
  public onWarn(@Context() [message]: ContextOf<'warn'>) {
    this.logger.warn(message)
  }
}
