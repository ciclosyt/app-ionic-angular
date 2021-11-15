import { Component, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Peliculas } from '../../models/peliculas.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {

  @Input() peliculas: Peliculas[];

  constructor( private route: Router ) { }

  ngOnInit() {}


  navegarRuta(id){

    this.route.navigate(['/peliculas', id]);

  }


}
