import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Pool } from 'pg';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: 'PG_POOL',
      useValue: new Pool({
        host: process.env.DB_HOST ?? 'localhost',
        port: 5432,
        user: 'mock',
        password: 'mock',
        database: 'mock',
      }),
    },
  ],
})
export class AppModule {}
