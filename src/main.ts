import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";
import { ResponseInterceptor } from "./common/interceptors/response.interceptor";
import { AllExceptionFilters } from "./common/filters/all-exceptions.filter";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());

  app.useGlobalInterceptors(new ResponseInterceptor());

  app.useGlobalFilters(new AllExceptionFilters());

  const config = new DocumentBuilder()
    .setTitle("Nest Course API")
    .setDescription("API documentation for nest course")
    .setVersion('1.0.0')
    .setContact('TeaCoder Team', 'https://google.com', 'tala0413.m1@gmail.com')
    .build();

  const document = SwaggerModule.createDocument(app, config, {
    include: [AppModule]
  });

  SwaggerModule.setup('/docs', app, document)

  //глобальный профекс - ставит api перед названиями контроллеров(http://localhost:3000/api/...)
  // app.setGlobalPrefix('api')

  await app.listen(3000);
}
bootstrap();
