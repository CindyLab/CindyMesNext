import {Component, Input, OnInit, PLATFORM_INITIALIZER} from "@angular/core";
import {Sort} from "libs/api-interfaces/src/lib/datasource/page";
import {UserDataPerMachine} from "libs/api-interfaces/src/lib/userdatapermachine/interface/UserDataPerMachine.interface";
import {Observable} from "rxjs";
import {PaginatedDataSource} from "../../datasource/paginated-datasource";
import {PressInterface} from "./press/press.component";
import {StartupDataService} from "../../services/startup-data.service";

//interface PressData {
//  pressnumber: number,
//  data1: number,
//  data2: number
//}
//
//class PressStation implements PressInterface {
//  constructor(name: number, status: string) {
//    this.name = name;
//    this.status = status;
//  }
//  name: number;
//  status: string;
//  }
//}

@Component({
  selector: 'mes-zm-startup',
  templateUrl: './startup-data.component.html',
  styleUrls: ['./startup-data.component.scss']
})
export class StartupDataComponent implements OnInit {

  //startupdata: Observable<UserDataPerMachine>;

  dataMachines: UserDataPerMachine[] = [];

  initialSort: Sort<UserDataPerMachine> = {property: 'press', machine: 'asc'}
  initialQuery: Partial<UserDataPerMachine> = {};
  pageSize = 23;

  dataSource = new PaginatedDataSource<UserDataPerMachine, Partial<UserDataPerMachine>>(
    (request, query) => this.startupdataService.getPressData(request, query),
    this.initialSort,
    this.initialQuery,
    this.pageSize
  )

  displayedColumn = [
    'press'
  ]

  press = 0

  constructor(
    private readonly startupdataService: StartupDataService,
  ) {}

  ngOnInit(): void {
    this.startupdataService.getDataStartup().subscribe(dataMachines => {
      this.dataMachines = dataMachines;
    })
  }


}