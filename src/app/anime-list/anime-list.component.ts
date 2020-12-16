import { Component } from '@angular/core';

import { data } from '../data';


@Component({
  selector: 'app-anime-list',
  templateUrl: './anime-list.component.html',
  styleUrls: ['./anime-list.component.css']
})
export class AnimeListComponent {
  data = data;

  
}

