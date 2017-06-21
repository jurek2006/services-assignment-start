export class CountService{
	countActivation: number = 0;
	countInactivation: number = 0;

	inactive(){
		console.log("Inactivations: " + (++this.countInactivation));
	}

	active(){
		console.log("Activations: " + (++this.countActivation));
	}
}