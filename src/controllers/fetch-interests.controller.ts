import { Controller, Get, UseGuards } from '@nestjs/common'
import { JwtAuthGuard } from '@/auth/jwt-auth.guard'
import { PrismaService } from '@/prisma/prisma.service'

@Controller('/interests')
@UseGuards(JwtAuthGuard)
export class FetchInterestsController {
  constructor(private prisma: PrismaService) {}

  @Get()
  async handle() {
    const interests = await this.prisma.interest.findMany()

    return {
      interests,
    }
  }
}
