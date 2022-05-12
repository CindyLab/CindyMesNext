import {Get, Injectable, OnModuleInit} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {StartupDataEntity} from "../entities/startup.entity";

@Injectable()
export class StartupService implements OnModuleInit {

  constructor(@InjectRepository(StartupDataEntity) private readonly startupRepository: Repository<StartupDataEntity>) { }

  async onModuleInit() {
    //this.getDataStartup();
    this.findAll();
  }


  async find(where?: Partial<StartupDataEntity>) {
    return this.startupRepository.find();
  }


  async findAll(): Promise<StartupDataEntity[]> {
    return this.startupRepository.find({ order: { press: 'ASC' } });
  }

  //async getDataStartup(): Promise<StartupData[]>{
  //  const query = this.startupRepository.createQueryBuilder();
  //  const alldata = await query.getMany();
  //  return alldata;
  //}

  //async getDataStartup() {
  //  const result = await this.startupRepository.
  //    createQueryBuilder('datastartup')
  //    //.select('datastartup.press', 'press')
  //    //.where('datastartup.press=1605')
  //    .getRawMany()
  //    return result;
  //}

}


