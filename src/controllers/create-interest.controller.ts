import { Body, Controller, Post, UseGuards } from '@nestjs/common'
import { JwtAuthGuard } from '@/auth/jwt-auth.guard'
import { ZodValidationPipe } from '@/pipes/zod-validation-pipe'
import { PrismaService } from '@/prisma/prisma.service'
import { z } from 'zod'

const createInterestBodySchema = z.object({
  gender: z.string(),
  imagesUrl: z.string().array(),
})

const bodyValidationPipe = new ZodValidationPipe(createInterestBodySchema)

type CreateInterestBodySchema = z.infer<typeof createInterestBodySchema>

@Controller('/interests')
@UseGuards(JwtAuthGuard)
export class CreateInterestController {
  constructor(private prisma: PrismaService) {}

  @Post()
  async handle(@Body(bodyValidationPipe) body: CreateInterestBodySchema) {
    const { gender, imagesUrl } = body

    await this.prisma.interest.create({
      data: {
        gender,
        imagesUrl,
      },
    })

    return 'ok'
  }
}
