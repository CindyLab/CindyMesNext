import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {StartupDataEntity} from './entities/startup.entity';
import {join} from 'path';
import {ServeStaticModule} from '@nestjs/serve-static'
import {StartupModule} from './startup/startup.module';
import {UnifourAgeingModule} from './unifourageing/unifourageing.module';
import {UnifourAgeingData} from './entities/unifourageing.entity';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', '..', '..', 'dist', 'apps', 'kety-mes-zm')
    }),
    TypeOrmModule.forRoot({
      type: 'oracle',
      host: 'ows-cindy02',
      username: 'CINDY',
      password: 'Ci12dy',
      port: 1521,
      sid: 'TSTCINDY',
      autoLoadEntities: true,
      synchronize: true,
      entities: [StartupDataEntity,
        UnifourAgeingData],
      logging: true,
    }),
    StartupModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
