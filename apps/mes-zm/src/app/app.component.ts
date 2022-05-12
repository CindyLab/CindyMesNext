import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@kety-mes-zm/api-interfaces';
import {UserDataPerMachine} from 'libs/api-interfaces/src/lib/userdatapermachine/interface/UserDataPerMachine.interface';
import {PaginatedDataSource} from  './datasource/paginated-datasource';


@Component({
  selector: 'kety-mes-zm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {


  //dataSource = new PaginatedDataSource<UserDataPerMachine, Partial<UserDataPerMachine>>(
  //  (request, query)=> this.startupService.getDataStartup(request, query),
  //  this.sort,
  //  this.processQuery.getValue(),
  //  this.pageSize
  //);

  hello$ = this.http.get<Message>('/api/hello');
  constructor(
    //private startupService: StartupService,
    private http: HttpClient
    ) {}
}
