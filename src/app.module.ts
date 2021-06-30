import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './Api/V1/Users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './Api/V1/Auth/auth.module';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { LoggingInterceptor } from './Api/V1/interceptors/logging.interceptor';

@Module({
  imports: [TypeOrmModule.forRoot(), UsersModule, AuthModule],
  controllers: [AppController],
  providers: [
    AppService,

    // interceptor: logging interceptor implemented globally
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor,
    },
  ],
})
export class AppModule {}
