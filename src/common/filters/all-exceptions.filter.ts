import {
  type ArgumentsHost,
  Catch,
  type ExceptionFilter,
  HttpException,
  Logger,
} from "@nestjs/common";
import { type Response } from "express";

@Catch()
export class AllExceptionFilters implements ExceptionFilter {
  private readonly logger = new Logger(AllExceptionFilters.name);

  catch(exception: unknown, host: ArgumentsHost) {
    const context = host.switchToHttp();
    const response = context.getResponse() as Response;

    const status =
      exception instanceof HttpException ? exception.getStatus() : 500;
    const message =
      exception instanceof HttpException
        ? exception.message
        : "Internal server errorrrrr";

    this.logger.error(message)

    response.status(status).json({
        status: status,
        message,
        timestamp: new Date().toISOString(),
        path: context.getRequest().url,
    })
  }
}
