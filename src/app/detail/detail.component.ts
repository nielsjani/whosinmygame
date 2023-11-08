import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {GameService} from "../service/game.service";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.sass']
})
export class DetailComponent implements OnInit{
  gameName: string;
  gameDetails: any;


  constructor(private activatedRoute: ActivatedRoute, private gameService: GameService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((res:Params) => {
      this.gameName = res["name"];
      this.gameService.getAll().subscribe(allGames => {
        this.gameDetails = allGames.filter((game: any) => game.content.name === this.gameName)[0];
      })
    });
  }

  getRole(roleName:string) {
    return '/assets/'+roleName+'.png'
  }
}
