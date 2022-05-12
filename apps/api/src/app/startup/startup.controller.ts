import {Body, Controller, Get, Post, Query} from "@nestjs/common";
import {UserDataPerMachine} from 'libs/api-interfaces/src/lib/userdatapermachine/interface/UserDataPerMachine.interface';
import {StartupDataEntity} from "../entities/startup.entity";
//import {UserDataPerMachine} from "libs/api-interfaces/src/lib/userdatapermachine/interface/UserDataPerMachine.interface";
//import {ReadStartupDto} from "./dto/ReadStartupDto";
//import {StartupData} from "../entities/startup.entity";
import {StartupService} from "./startup.services";
//import {ReadStartupDto} from "./dto/ReadStartupDto"

@Controller('startupdata')
export class StartupController {

  constructor(private readonly startupService: StartupService){}

  @Get()
  async get(): Promise<StartupDataEntity[]>{
    return this.startupService.findAll();
  }


}
