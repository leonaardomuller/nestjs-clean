import { Body, Controller, Post, UseGuards } from '@nestjs/common'
import { JwtAuthGuard } from '@/auth/jwt-auth.guard'
import { ZodValidationPipe } from '@/pipes/zod-validation-pipe'
import { PrismaService } from '@/prisma/prisma.service'
import { z } from 'zod'
import { CurrentUser } from '@/auth/current-user-decorator'
import { UserPayload } from '@/auth/firebase-jwt.strategy'

const createEventBodySchema = z.object({
  title: z.string(),
  description: z.string(),
  gender: z.string(),
  latitude: z.number(),
  longitude: z.number(),
  imagesUrl: z.string().array(),
  startsAt: z.string(),
  finishAt: z.string(),
})

const bodyValidationPipe = new ZodValidationPipe(createEventBodySchema)

type CreateEventBodySchema = z.infer<typeof createEventBodySchema>

@Controller('/events')
@UseGuards(JwtAuthGuard)
export class CreateEventController {
  constructor(private prisma: PrismaService) {}

  @Post()
  async handle(
    @Body(bodyValidationPipe) body: CreateEventBodySchema,
    @CurrentUser() user: UserPayload,
  ) {
    const {
      title,
      description,
      gender,
      latitude,
      longitude,
      imagesUrl,
      startsAt,
      finishAt,
    } = body

    const userId = user.sub

    await this.prisma.event.create({
      data: {
        authorId: userId,
        title,
        description,
        gender,
        latitude,
        longitude,
        imagesUrl,
        startsAt,
        finishAt,
      },
    })

    return 'ok'
  }
}
