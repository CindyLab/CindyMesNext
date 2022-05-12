import {IsInt, IsString} from 'class-validator';

export class ReadUnifourAgeingDto {
  @IsInt()
  ageingnr: number;

  @IsInt()
  temp1: number;

  @IsInt()
  temp2: number;

  @IsInt()
  temp3: number;

  @IsInt()
  temp4: number;

  @IsInt()
  temp5: number;

  @IsInt()
  temp6: number;

  @IsInt()
  heating: number;

  @IsInt()
  release: number;

  @IsInt()
  timeremain: number;

  @IsString()
  name: string;

  @IsInt()
  ovensetpoint: number;

  @IsInt()
  inlet: number;

  @IsInt()
  return: number;
}
