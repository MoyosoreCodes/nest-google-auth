import { Controller, Get } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('google/login')
  googleSignin() {
    return this.authService.googleSignin();
  }

  @Get('google/redirect')
  handleRedirect() {
    return this.authService.handleGoogleRedirect();
  }

  @Get("/google/token")
  verifyToken() {
    return this.authService.verifyAuthIdToken("token")
  }
}
