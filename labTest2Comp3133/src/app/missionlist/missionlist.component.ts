import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { GetData } from '../interfaces/GetData';
import { Router } from '@angular/router';

@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css'],
})
export class MissionlistComponent implements OnInit {
  public show: boolean = false;
  public buttonName: any = 'Show';
  public selectedList: any;

  dataList: GetData[] = [];
  constructor(private Service: ServiceService, private router: Router) {}

  ngOnInit(): void {
    this.Service.getData().subscribe((response: any) => {
      this.dataList = response;
      console.log(response);
    });
  }

  onSelect(selectedList: any): void {
    this.selectedList = selectedList;
  }
  toggle() {
    this.show = !this.show;
    // this.router.navigateByUrl('/details');

    // CHANGE THE NAME OF THE BUTTON.
    if (this.show) this.buttonName = 'Hide';
    else this.buttonName = 'Show';
  }
}
