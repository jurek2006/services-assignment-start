import { Component, OnInit } from '@angular/core';
import { CountService } from '../counter.service';


@Component({
  selector: 'app-counter-display',
  templateUrl: './counter-display.component.html',
  styleUrls: ['./counter-display.component.css']
})
export class CounterDisplayComponent implements OnInit {

	countActivation: number = 0;
	countInactivation: number = 0;

  constructor(private countService: CountService) {

  	// subskrybowanie do emitera countUpdated 
  	// (zdarzenie emitowane, gdy następuje zwiększenie któregoś z dwóch liczników w CountService)
  	// wówczas pobiera wartości tamtych liczników
  	this.countService.countUpdated.subscribe(
  		() => {
  			this.countActivation = this.countService.countActivation;
  			this.countInactivation = this.countService.countInactivation;
  		}
  	);
  }

  ngOnInit() {
  	this.countActivation = this.countService.countActivation;
  	this.countInactivation = this.countService.countInactivation;
  }
}
