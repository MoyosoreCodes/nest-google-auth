import { Injectable } from '@nestjs/common';
import { OAuth2Client } from 'google-auth-library';

@Injectable()
export class AuthService {
  protected readonly authClient: OAuth2Client;
  constructor() {
    this.authClient = new OAuth2Client(
      process.env.GOOGLE_CLIENT_ID,
      process.env.GOOGLE_CLIENT_SECRET,
    );
  }
  async googleSignin() {
    return 'google sign in';
  }

  async handleGoogleRedirect() {
    return 'google redirect';
  }

  async verifyAuthIdToken(token: string) {
    const ticket = await this.authClient.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    return ticket.getPayload();
  }
}
