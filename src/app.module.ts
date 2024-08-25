import { Module } from "@nestjs/common"
import { AppService } from "./app.service"
import { NecordModule } from "necord"
import { ConfigModule, ConfigService } from "@nestjs/config"

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    NecordModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        ...configService.get('necord.options'),
      }),
    }),
  ],
  providers: [AppService],
})
export class AppModule {
}
