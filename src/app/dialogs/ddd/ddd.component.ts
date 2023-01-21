import { Component, OnInit , Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-ddd',
  templateUrl: './ddd.component.html',
  styleUrls: ['./ddd.component.css']
})
export class DddComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data : {lang:string}) { }

  ngOnInit(): void {
  }

}
