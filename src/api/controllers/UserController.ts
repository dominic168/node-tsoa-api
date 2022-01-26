import { Controller, Get, Route, Path, Query, SuccessResponse, Post, Body } from 'tsoa';
import { UserService } from '../service/userService';
import { User } from '../model/user';

@Route('users')
export class UserController extends Controller {
  @Get('{userId}')
  public async getUserById(@Path() userId: number, @Query() name?: string): Promise<User> {
    return new UserService().get(userId.toString(), name);
  }

  @SuccessResponse("201", "Created")
  @Post()
  public async createUser(@Body() requestBody: User): Promise<User> {
    this.setStatus(201);
    return new UserService().create(requestBody);
  }
}
