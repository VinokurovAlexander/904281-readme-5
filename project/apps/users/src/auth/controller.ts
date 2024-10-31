import {Controller, Post, Body, HttpStatus} from "@nestjs/common";
import {fillDto} from "@project/utils";
import {UserRdo} from "../user/rdo";
import { CreateUserDto, LoginUserDto } from "../user/dto";
import { AuthService } from "./service";
import { ApiResponse } from "@nestjs/swagger";

@Controller('/')
export class AuthController {

  constructor(private readonly authService: AuthService) {}

  @ApiResponse({
    type: UserRdo,
    status: HttpStatus.CREATED,
    description: 'The new user has been successfully created.'
  })
  @Post('register')
  public async register(@Body() dto: CreateUserDto){
    const user = await this.authService.register(dto)

    return fillDto(UserRdo, user.toPOJO())
  }

  @ApiResponse({
    type: UserRdo,
    status: HttpStatus.OK,
    description: 'User has been successfully logged'
  })
  @ApiResponse({
    status: HttpStatus.UNAUTHORIZED,
    description: 'User password is wrong'
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'User not found'
  })
  @Post('login')
  public async login(@Body() dto: LoginUserDto) {
    const user = await this.authService.verifyUser(dto)

    return fillDto(UserRdo, user.toPOJO())
  }
}
