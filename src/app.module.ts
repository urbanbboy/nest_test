import { type MiddlewareConsumer, Module, type NestModule } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { getTypeOrmConfig } from "./common/config/typeorm.config";
import { MovieModule } from "./movie/movie.module";
import { ReviewModule } from './review/review.module';
import { ActorModule } from './actor/actor.module';
import { LoggingMiddleware } from "./common/middlewares/logger.middleware";
import { AppController } from "./app.controller";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: getTypeOrmConfig,
      inject: [ConfigService]
    }),
    MovieModule,
    ReviewModule,
    ActorModule
  ],
  controllers: [AppController]
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggingMiddleware).forRoutes('*')
  }
}
