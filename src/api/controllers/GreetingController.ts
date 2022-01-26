import { Controller, Get, Route, Path } from 'tsoa';

@Route('greeting')
export class GreetingController extends Controller {
  @Get('/')
  public async getGreeting() {
    return { message: 'Hello World' };
  }

  @Get('{yourMessage}')
  public async getMessage(@Path() yourMessage: string) {
    return { message: yourMessage };
  }
}
