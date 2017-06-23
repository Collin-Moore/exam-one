import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.scss']
})
export class RandomComponent implements OnInit {
  randomResult : string = "";
  randomNumber : Number = 0;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    document.getElementById('random-menu-button').classList.add("active");
    this.route.params.subscribe((routeParams: Params) => { 
      const type = routeParams["type"];
      this.randomNumber = Math.floor(Math.random() * type);
      if (type === '2') {
        this.randomNumber === 1 ? this.randomResult = "True" : this.randomResult = "False";
      } else {
        this.randomResult = `Your random value is ${this.randomNumber}.`;
      }
    })
  }

  ngOnDestroy() {
    document.getElementById('random-menu-button').classList.remove("active");
  }
}
