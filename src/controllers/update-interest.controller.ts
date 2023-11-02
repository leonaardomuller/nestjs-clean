import { Body, Controller, Put, UseGuards } from '@nestjs/common'
import { CurrentUser } from '@/auth/current-user-decorator'
import { JwtAuthGuard } from '@/auth/jwt-auth.guard'
import { UserPayload } from '@/auth/firebase-jwt.strategy'
import { PrismaService } from '@/prisma/prisma.service'
import { z } from 'zod'
import { ZodValidationPipe } from '@/pipes/zod-validation-pipe'

const updateInterestBodySchema = z.object({
  interestIds: z.string().uuid().array(),
})

const bodyValidationPipe = new ZodValidationPipe(updateInterestBodySchema)

type UpdateInterestBodySchema = z.infer<typeof updateInterestBodySchema>

@Controller('/interests')
@UseGuards(JwtAuthGuard)
export class UpdateInterestController {
  constructor(private prisma: PrismaService) {}

  @Put()
  async handle(
    @Body(bodyValidationPipe) body: UpdateInterestBodySchema,
    @CurrentUser() user: UserPayload,
  ) {
    const { interestIds } = body
    const userId = user.sub

    await this.prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        interests: {
          connect: interestIds.map((id) => ({ id })),
        },
      },
    })

    return 'ok'
  }
}
