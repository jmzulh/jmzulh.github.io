import { Component, OnInit , Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-videogames',
  templateUrl: './videogames.component.html',
  styleUrls: ['./videogames.component.css']
})
export class VideogamesComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data : {lang:string}) { }

  ngOnInit(): void {
  }

}
