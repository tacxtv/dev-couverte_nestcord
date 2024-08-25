import { Module } from "@nestjs/common"
import { AppService } from "./app.service"
import { NecordModule } from "necord"
import { ConfigModule, ConfigService } from "@nestjs/config"
import config from "./config"
import { AppUpdate } from "./app.update"

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config],
    }),
    NecordModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        ...configService.get('necord.options'),
      }),
    }),
  ],
  providers: [
    AppService,
    AppUpdate,
  ],
})
export class AppModule {
}
