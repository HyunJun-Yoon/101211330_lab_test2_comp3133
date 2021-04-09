import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-missiondetails',
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.css'],
})
export class MissiondetailsComponent implements OnInit {
  @Input('data') data: any;
  constructor() {}

  ngOnInit(): void {}
}
