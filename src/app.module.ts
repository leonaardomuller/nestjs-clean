import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { PrismaService } from './prisma/prisma.service'
import { CreateAccountController } from './controllers/create-account.controller'
import { envSchema } from './env'
import { AuthModule } from './auth/auth.module'
import { AuthenticateController } from './controllers/authenticate.controller'
import { CreateQuestionController } from './controllers/create-question.controller'
import { FetchRecentQuestionController } from './controllers/fetch-recent-questions.controller'
import { CreateInterestController } from './controllers/create-interest.controller'
import { UpdateInterestController } from './controllers/update-interest.controller'
import { FetchInterestsController } from './controllers/fetch-interests.controller'
import { CreateEventController } from './controllers/create-event.controller'
import { FetchEventsController } from './controllers/fetch-events.controller'

@Module({
  imports: [
    ConfigModule.forRoot({
      validate: (env) => envSchema.parse(env),
      isGlobal: true,
    }),
    AuthModule,
  ],
  controllers: [
    CreateAccountController,
    AuthenticateController,
    CreateQuestionController,
    CreateInterestController,
    CreateEventController,
    UpdateInterestController,
    FetchRecentQuestionController,
    FetchInterestsController,
    FetchEventsController,
  ],
  providers: [PrismaService],
})
export class AppModule {}
