import { Component, OnInit, Input} from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widget-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent implements OnInit {

  constructor() { }

  @Input() data = {} ;

  Highcharts = Highcharts;
  
  chartOptions : {};

  ngOnInit(): void {

  	this.chartOptions = this.data;

 	setTimeout( () => {
 		window.dispatchEvent(
 			new Event('resize') 
 		);
 	}, 300);

 	HC_exporting(Highcharts);
  }

}
