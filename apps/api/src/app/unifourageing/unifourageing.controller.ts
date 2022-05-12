import {Controller, Get} from "@nestjs/common";
import {UniforAgeing} from "libs/api-interfaces/src/lib/unifourageing/interface/unifourageing.interface";
import {UnifourAgeingService} from "./unifourageing.service";


@Controller('unifourageing')
export class UnifourAgeingController {

  constructor(private readonly unifourageingService: UnifourAgeingService){}

  @Get()
  async get(): Promise<UniforAgeing[]>{
    return this.unifourageingService.findAll();
  }

}