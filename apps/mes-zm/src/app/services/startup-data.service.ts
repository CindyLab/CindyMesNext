import {HttpClient, HttpParams} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {DomSanitizer} from "@angular/platform-browser";
import {Page, PageRequest} from "libs/api-interfaces/src/lib/datasource/page";
import {UserDataPerMachine} from 'libs/api-interfaces/src/lib/userdatapermachine/interface/UserDataPerMachine.interface';
import {Observable} from "rxjs";
import {environment} from 'apps/mes-zm/src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StartupDataService {
  constructor(
    private readonly http: HttpClient,
    private readonly sanitizer: DomSanitizer
  ) {}

  public getDataStartup(): Observable<UserDataPerMachine[]> {
    return this.http.get<UserDataPerMachine[]>(`${environment.apiUrl}/startup`)
  }

  getPressData(request: PageRequest<UserDataPerMachine>, query: Partial<UserDataPerMachine>): Observable<Page<UserDataPerMachine>> {
    return this.http.get<Page<UserDataPerMachine>>(`${environment.apiUrl}/startup`);
  }

}