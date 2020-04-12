import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { }

  card() {
  	return [71, 78,39, 66];
  }

  pie() {
  	return [{
            name: 'Chrome',
            y: 61.41,
            sliced: true,
            selected: true
        }, {
            name: 'Internet Explorer',
            y: 11.84
        }, {
            name: 'Firefox',
            y: 10.85
        }, {
            name: 'Edge',
            y: 4.67
        }, {
            name: 'Safari',
            y: 4.18
        }, {
            name: 'Sogou Explorer',
            y: 1.64
        }, {
            name: 'Opera',
            y: 1.6
        }, {
            name: 'QQ',
            y: 1.2
        }, {
            name: 'Other',
            y: 2.61
        }];
  }

  bigChart () {
  	return {
    chart: {
        type: 'area'
    },
    title: {
        text: 'Random DATA'
    },
    subtitle: {
        text: 'Demo'
    },
    xAxis: {
        categories: ['1750', '1800', '1850', '1900', '1950', '1999', '2050'],
        tickmarkPlacement: 'on',
        title: {
            enabled: false
        }
    },
    yAxis: {
        title: {
            text: 'Billions'
        },
        labels: {
            formatter: function () {
                return this.value / 1000;
            }
        }
    },
    tooltip: {
        split: true,
        valueSuffix: ' millions'
    },
 	credits :{
 		enabled : false
 	},
 	exporting : {
 		enabled: true
 	},
    series: [{
        name: 'Asia',
        data: [502, 635, 809, 947, 1402, 3634, 5268]
    }, {
        name: 'Africa',
        data: [106, 107, 111, 133, 221, 767, 1766]
    }, {
        name: 'Europe',
        data: [163, 203, 276, 408, 547, 729, 628]
    }, {
        name: 'America',
        data: [18, 31, 54, 156, 339, 818, 1201]
    }, {
        name: 'Oceania',
        data: [2, 2, 2, 6, 13, 30, 46]
    }]
	};
  }

  table () {
  	return [
	  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
	  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
	  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
	  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
	  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
	  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
	  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
	  
	];
  }
}
