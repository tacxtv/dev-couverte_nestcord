import { NestFactory } from "@nestjs/core"
import { AppModule } from "./app.module"

declare const module: any;
(async () => {
  const app = await NestFactory.createApplicationContext(AppModule)
  app.enableShutdownHooks()

  if (module.hot) {
    module.hot.accept()
    module.hot.dispose(() => app.close())
  }
})()
