import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SpacexapiService {

    constructor(private httpclicent: HttpClient){

    }

    getMissions():Observable<any> {
      return this.httpclicent.get("https://api.spacexdata.com/v3/launches")
    }
}
