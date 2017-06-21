import { EventEmitter } from '@angular/core';


export class CountService{
	countActivation: number = 0;
	countInactivation: number = 0;

	// EventEmitter - emitowanie zdarzenia w funkcjach inactive i active
	countUpdated = new EventEmitter<void>();

	inactive(){
		console.log("Inactivations: " + (++this.countInactivation));
		this.countUpdated.emit();
	}

	active(){
		console.log("Activations: " + (++this.countActivation));
		this.countUpdated.emit();
	}
}