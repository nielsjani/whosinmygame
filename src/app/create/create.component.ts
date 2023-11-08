import { Component } from '@angular/core';
import {FormControl} from "@angular/forms";
import {GameService} from "../service/game.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.sass']
})
export class CreateComponent {
  name = new FormControl('');
  selectedRoles: string[] = [];
  roles: string[] = [
    'leader_blue',
    'leader_red',

    'regular_blue',
    'regular_red',

    'agent_blue',
    'agent_red',

    'ambassador_blue',
    'ambassador_red',

    'angel_blue',
    'angel_red',

    'blind_blue',
    'blind_red',

    'bouncer_blue',
    'bouncer_red',

    'clown_blue',
    'clown_red',

    'spy_blue',
    'spy_red',
  ];


  constructor(private gameService: GameService, private router: Router) {

  }

  submit() {
    this.gameService.create(this.name.value || '', this.selectedRoles)
      .subscribe(res => this.router.navigate(['']))
  }

  handleClick(roleName: string) {
    const index = this.selectedRoles.indexOf(roleName);
    index === -1 ? this.selectedRoles.push(roleName) : this.selectedRoles.splice(index, 1);
    console.log(this.selectedRoles);
  }

  getClass(roleName: string) {
    return this.selectedRoles.indexOf(roleName) !== -1 ? 'mat-grid-tile-selected' : '';
  }

  getRole(roleName:string) {
    return '/assets/'+roleName+'.png'
  }
}
