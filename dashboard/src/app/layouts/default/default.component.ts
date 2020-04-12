import { Component, OnInit, Input, Output,  EventEmitter} from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

	sideBarOpen = false;
	constructor() { }

	ngOnInit(): void {
	}
	sideBarToggler(evt){
		this.sideBarOpen = !this.sideBarOpen;

		
	}
}
