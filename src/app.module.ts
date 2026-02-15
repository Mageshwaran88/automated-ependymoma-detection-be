import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ScansModule } from './scans/scans.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        const dbUrl = config.get<string>('DATABASE_URL');

        if (!dbUrl) {
          console.warn('DATABASE_URL not set — DB features will fail. Set DATABASE_URL in Railway Variables (e.g. Neon connection string).');
        }

        if (dbUrl) {
          return {
            type: 'postgres',
            url: dbUrl,
            autoLoadEntities: true,
            synchronize: false,
            ssl: { rejectUnauthorized: false },
          };
        }

        // fallback local (will fail on Railway if DATABASE_URL is missing)
        return {
          type: 'postgres',
          host: 'localhost',
          port: 5432,
          username: 'postgres',
          password: 'root',
          database: 'automated-ependymoma-detection',
          autoLoadEntities: true,
          synchronize: true,
        };
      }
    }),

    ScansModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
