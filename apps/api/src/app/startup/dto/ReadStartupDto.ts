
import {Type} from 'class-transformer';
import {IsInt, IsOptional} from 'class-validator';

export class ReadStartupDto {
  @IsOptional()
  @IsInt()
  idmachine: number;

  @IsOptional()
  @IsInt()
  @Type(() => Number)
  press: number;

  @IsInt()
  data1: number;

  @IsInt()
  data2: number;
}

