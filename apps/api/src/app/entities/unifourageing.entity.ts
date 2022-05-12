import {Column, Entity, PrimaryColumn} from "typeorm";
import {UniforAgeing} from 'libs/api-interfaces/src/lib/unifourageing/interface/unifourageing.interface'

@Entity({name: 'T_AGEING1'})
export class UnifourAgeingData implements UniforAgeing {
  @PrimaryColumn({ name: 'AGE_EQNUMBER'})
  ageingnr: number;

  @Column({nullable: true, name: 'AGE_TEMP_1'})
  temp1: number;

  @Column({nullable: true, name: 'AGE_TEMP_2'})
  temp2: number;

  @Column({nullable: true, name: 'AGE_TEMP_3'})
  temp3: number;

  @Column({nullable: true, name: 'AGE_TEMP_4'})
  temp4: number;

  @Column({nullable: true, name: 'AGE_TEMP_5'})
  temp5: number;

  @Column({nullable: true, name: 'AGE_TEMP_6'})
  temp6: number;

  @Column({nullable: true, name: 'AGE_HEATING'})
  heating: number;

  @Column({nullable: true, name: 'AGE_RELEASE'})
  release: number;

  @Column({nullable: true, name: 'AGE_TIMEREMAIN'})
  timeremain: number;

  @Column({nullable: true, name: 'AGE_NAME'})
  name: string;

  @Column({nullable: true, name: 'AGE_OVENSETPOINT'})
  ovensetpoint: number;

  @Column({nullable: true, name: 'AGE_INLET'})
  inlet: number;

  @Column({nullable: true, name: 'AGE_RETURN'})
  return: number;
}