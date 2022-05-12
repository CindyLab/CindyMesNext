import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {StartupDataEntity} from '../entities/startup.entity';
import {StartupController} from './startup.controller';
import {StartupService} from './startup.services';



@Module({
  controllers: [StartupController],
  providers: [StartupService],
  exports:  [StartupService],
  imports: [
    TypeOrmModule.forFeature([StartupDataEntity])
  ],
})
export class StartupModule { }
