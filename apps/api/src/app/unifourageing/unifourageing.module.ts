import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {UnifourAgeingData} from "../entities/unifourageing.entity";
import {UnifourAgeingController} from "./unifourageing.controller";
import {UnifourAgeingService} from "./unifourageing.service";

@Module({
  controllers: [UnifourAgeingController],
  providers: [UnifourAgeingService],
  exports:  [UnifourAgeingService],
  imports: [
    TypeOrmModule.forFeature([UnifourAgeingData])
  ],
})
export class UnifourAgeingModule {}