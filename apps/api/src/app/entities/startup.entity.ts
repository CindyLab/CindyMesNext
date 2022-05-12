import {Column, Entity, PrimaryColumn} from "typeorm";
import {UserDataPerMachine} from 'libs/api-interfaces/src/lib/userdatapermachine/interface/UserDataPerMachine.interface'


@Entity({name: 'T_USERDATAPERMACHINE1'})
export class StartupDataEntity implements UserDataPerMachine {
  @PrimaryColumn({ name: 'UDM_MACHINE_ID'})
  id_machine: number;

  @Column({ name: 'UDM_MACHINE'})
  press: number;

  @Column({name: 'UDM_DATA1'})
  data1: number;

  @Column({name: 'UDM_DATA2'})
  data2: number;
}

