import { Component, OnInit, Input } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-widget-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  
	dataSource : PeriodicElement[];
	
	displayedColumns: String [];
	
	@Input() data : [];

	constructor() { }

	ngOnInit(): void {
		this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
		this.dataSource = this.data;
	}

}
