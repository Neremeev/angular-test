import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-car-page',
  templateUrl: './car-page.component.html',
  styleUrls: ['./car-page.component.scss']
})
export class CarPageComponent implements OnInit {

  id: string;
  name: string;
  color: string;
  year: string;
  hash: string;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // только один получаем
    this.id = this.route.snapshot.params['id'];
    this.name = this.route.snapshot.params['name'];
    this.color = this.route.snapshot.queryParams['color'];
    this.year = this.route.snapshot.queryParams['year'];
    this.hash = this.route.snapshot.fragment;

    // получаем реактивно
    this.route.params.subscribe((params: Params) => {
      this.id = params.id;
      this.name = params.name;
    });

    // реактивные кверипарамс
    this.route.queryParams.subscribe((params: Params) => {
      this.color = params['color'];
      this.year = params['year'];
    });
  }

  // реактивные кверипарамс
  OpenMazdaPage() {
    this.router.navigate(['/cars', 8, 'Mazda'], {
      queryParams: {
        color: 'pink',
        year: 1995
      },
      fragment: 'pict'
    });
  }

}
