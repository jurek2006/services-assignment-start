import { Injectable } from '@angular/core';
import { CountService } from './counter.service';

@Injectable()
export class UsersService{

	activeUsers = ['Max', 'Anna'];
  	inactiveUsers = ['Chris', 'Manu'];

  	constructor(private countService: CountService){}

  	activateUser(id: number){
  		this.activeUsers.push(this.inactiveUsers[id]);
  		this.inactiveUsers.splice(id, 1);
  		this.countService.active();
  	}

  	inactivateUser(id: number){
  		this.inactiveUsers.push(this.activeUsers[id]);
  		this.activeUsers.splice(id, 1);
  		this.countService.inactive();
  	}
}