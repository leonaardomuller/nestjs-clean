// firebase-jwt.strategy.ts

import { Injectable, UnauthorizedException } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'
import { Strategy, ExtractJwt } from 'passport-firebase-jwt'
import { FirebaseService } from './firebase.service'
import { z } from 'zod'

const tokenPayloadSchema = z.object({
  sub: z.string().uuid(),
})

export type UserPayload = z.infer<typeof tokenPayloadSchema>

@Injectable()
export class JwtFirebaseStrategy extends PassportStrategy(Strategy) {
  constructor(private firebaseService: FirebaseService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    })
  }

  async validate(token: string) {
    try {
      const decodedToken = await this.firebaseService
        .getAdmin()
        .verifyIdToken(token, true)
      console.log({ decodedToken })
      return decodedToken
    } catch (err) {
      console.error(err)
      throw new UnauthorizedException()
    }
  }
}
