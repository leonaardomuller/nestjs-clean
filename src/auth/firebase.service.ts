// firebase.service.ts

import { Injectable, OnModuleInit } from '@nestjs/common'
import * as admin from 'firebase-admin'

@Injectable()
export class FirebaseService implements OnModuleInit {
  private firebaseApp!: admin.app.App

  onModuleInit() {
    const serviceAccount = {
      type: 'service_account',
      project_id: 'friday-night-b442c',
      private_key_id: '3b1cfc648ac0bd59e075924c80184ac770a17904',
      private_key:
        '-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCu6LnGlQvZS61g\ncwVmZizDFpwJwFzneW7wF2o9kzNCSv65r2rge1O2V+au18JMtd71HUCQB6oKMdSM\nOVWO6IVxpNP0XuWJb8SlXZ6pXjpswTA2BQyAeqadW9zQ/XRyxUxZF7r0+Estdh+E\nYHB7IANbiMCx7D96dPjpECdQIKx6rZsx1u8V/M/F9hG+sEiJzmpYfiq9vFGLr5pr\n4eNMY3SrCqD8Z42KmBGk44BlMWdQyk2ihGGImj+YqRp2yX8njUmunEuWrSwNAbJo\nzfcnOa0wK2G9m+Am9T46bDjaAujQ+onJ0yvDbuXdr5K5JvfmavoUA0sHzf4t2E06\nWfw0Dza9AgMBAAECggEADJwGg0R3fYuGd5o93MCnoCDfJZd9RcrBWVm2yl2e/REp\nr/qaJTjUM3m+za1hpToaABMYdnRhqSkn05FxPkORFeegyCXskliWaqgx1K/7B6Ad\nzlHVhuWmDAN1YIkFKMkEf1/F61HYdEc8b8SsFz7wPwcVgpOE4q/QH1fkyFKysd1M\n+a5qjnNyW/0A8teNgeKQdzb7i2QZuJClKnCvAPcahU9QaXXsQeHd3bSeuPBJIc+8\nDfCrywT3YbwfzGpc7J1yjxbYLaWWhBa1zmA5cMm23j6lDmsZMaFmJ3tLbEv7BQuY\nHkkUc57SCHJwHirLY/G3gy9Rl6w4DRD9FWoCDsx0AQKBgQDZz1zxYk/TbubPYLsF\ntgRakXG5py2X8JETVp2YkWGnZxqBpO2L6IhGRuMZXV0yP2reEnwsKt9Iag0ThV2Z\n0oXDfcUAojJjQGlvdHQTDr4T3li3ccPGN0ce+DI7JO0QyJVG5K9WvidkRU74xGOq\nSUzQCGbBEiBj2inMncvTKReLgQKBgQDNk7VTzpY4g73TFP/l82SAmZms9X0SuFvO\nVH1ARiUfD3YB5WI3idEZc3fWGFGDKM4xz5F9A4cJK1AfeiLkVwg4Gd0A8xVhN6ro\nDDC4qF5JPQGyzLiD4U6yvDS0SuGl1tafcofZ97NZwXWO1W5wd9DIgH6yHDslSut4\nEJgDpgN5PQKBgAt8Y+pWxN7hekp1T2d9sb0U7mpb5oucpAnhB26EPCIXzc4IZH58\nRLNwCYnM4p1Dut77GpE5sYygCxB8d/MkpukoOLtP0lhpjSXTfkuC+4MQtpz14t0R\nDS8U55E24UmBSl3ysUxhurIO9ZsowBi6xNIznzePPSYG2y1vJNB92kABAoGAIFC9\nykTJPG0JI+tDJqSSAd0jWRrl5FFyrQZ/AeGE6FMH29hxDgXuBrAuAEumVJXPg+j7\nF8m8KmbSm4AZiAdeVWNLaGDN1ZBonz17Uyu0VpLud2rS/ngmZNZM+qJiwiz5Y+sf\nC9ZyLQPKNP+78pYDDeGVCO6DJaOXTDJfkwM/vIkCgYAMFhfrv6/OlVYbfMo3YQ04\nMEqzi6ERSQoTQYw1s/Iimz87hNcT4SHFJ2br2HwndqBPCCfo0NH6TMWKlmDTUatZ\nBM2GzvrLV4IchAp4Wn3jDb1ieUFNrNZoAcgUpC8Hl5WUIA8+IS8PXugiLYGKlEZT\nkN8YQyjk4Wl+TzgtYCDn1A==\n-----END PRIVATE KEY-----\n',
      client_email:
        'firebase-adminsdk-qne13@friday-night-b442c.iam.gserviceaccount.com',
      client_id: '109699382746680735279',
      auth_uri: 'https://accounts.google.com/o/oauth2/auth',
      token_uri: 'https://oauth2.googleapis.com/token',
      auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
      client_x509_cert_url:
        'https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-qne13%40friday-night-b442c.iam.gserviceaccount.com',
      universe_domain: 'googleapis.com',
    } as admin.ServiceAccount

    const config = {
      credential: admin.credential.cert(serviceAccount),
    }

    this.firebaseApp = admin.initializeApp(config)
  }

  getAdmin() {
    return this.firebaseApp.auth()
  }
}
