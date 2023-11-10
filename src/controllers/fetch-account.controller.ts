import { Controller, Get, UseGuards, Request } from '@nestjs/common'
import { JwtAuthGuard } from '@/auth/jwt-auth.guard'
import { PrismaService } from '@/prisma/prisma.service'
import { Request as ExpressRequest } from 'express'

interface RequestWithUser extends ExpressRequest {
  user: { uid: string }
}

@Controller('/account')
@UseGuards(JwtAuthGuard)
export class FetchUserController {
  constructor(private prisma: PrismaService) {}

  @Get()
  async handle(@Request() req: RequestWithUser) {
    const userId = req.user.uid
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        email: true,
        name: true,
        interests: true,
      },
    })

    return {
      user,
    }
  }
}
