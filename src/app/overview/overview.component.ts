import {Component, OnInit} from '@angular/core';
import {GameService} from "../service/game.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.sass']
})
export class OverviewComponent implements OnInit{
  public games$: Observable<any>;


  constructor(private gameService: GameService) {
  }

  ngOnInit(): void {
    this.games$ =  this.gameService.getAll();
     this.gameService.getAll().subscribe(x => console.log(x));
  }
}
