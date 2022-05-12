import {Injectable, OnModuleInit} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {UnifourAgeingData} from "../entities/unifourageing.entity";


@Injectable()
export class UnifourAgeingService implements OnModuleInit {

  constructor(@InjectRepository(UnifourAgeingData) private readonly unifourageingRepository: Repository<UnifourAgeingData>) {}

  async onModuleInit() {

  }

  async findAll(): Promise<UnifourAgeingData[]>{
    return this.unifourageingRepository.find();
  }
}