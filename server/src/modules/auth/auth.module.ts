import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [JwtModule.registerAsync({
    inject: [ConfigService],
    useFactory: (configService: ConfigService) => ({
      secret: configService.get("JWT_SECRET"),
      signOptions: {
        expiresIn: configService.get("JWT_EXPIRES_IN")
      }
    }),
    imports: [ConfigModule]
  })],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
