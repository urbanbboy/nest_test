import { Controller, Get, UseFilters, UseGuards } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
// import { AuthGuard } from "./common/guards/auth.guard";
// import { UserAgent } from "./common/decorators/user-agent.decorator";
// import { AllExceptionFilters } from "./common/filters/all-exceptions.filter";

@ApiTags("App")
@Controller()
export class AppController {
  
  // @UseGuards(AuthGuard)
  // // @UseFilters(AllExceptionFilters)
  // @Get("@me")
  // getProfile(@UserAgent() userAgent: string) {
  //   return {
  //     id: 1,
  //     email: 'support@teacoder.ru',
  //     userAgent
  //   }
  // }
}