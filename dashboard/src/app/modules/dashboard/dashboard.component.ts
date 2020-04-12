import { Component, OnInit } from '@angular/core';
import { DashboardService}  from '../dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


	bigChart = {} ;
	card = [];
	pie = [];
	table = [];

	constructor(private dashboardService : DashboardService) { }

	ngOnInit(): void {
		this.bigChart = this.dashboardService.bigChart();
		this.card = this.dashboardService.card();
		this.pie  = this.dashboardService.pie();
		this.table = this.dashboardService.table();
	}

}
