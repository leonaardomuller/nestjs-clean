import { Controller, Get, UseGuards } from '@nestjs/common'
import { JwtAuthGuard } from '@/auth/jwt-auth.guard'
import { PrismaService } from '@/prisma/prisma.service'

@Controller('/events')
@UseGuards(JwtAuthGuard)
export class FetchEventsController {
  constructor(private prisma: PrismaService) {}

  @Get()
  async handle() {
    const events = await this.prisma.event.findMany()

    return {
      events,
    }
  }
}
