import { Component, OnInit } from '@angular/core';
import {SpacexapiService} from '../network/spacexapi.service';
import {Missions} from '../models/mission'

@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionlistComponent implements OnInit {

  title="Space X Mission Launch List";
  constructor(private apiService:SpacexapiService) { }

  listMissions!: Missions[];
  ngOnInit(): void {
    this.apiService.getMissions()
    .subscribe(
      data =>{
        this.listMissions = data;
      }
    );
  }

}
