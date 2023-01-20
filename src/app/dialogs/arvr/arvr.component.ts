import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-arvr',
  templateUrl: './arvr.component.html',
  styleUrls: ['./arvr.component.css']
})
export class ArvrComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data : {lang:string}) { }

  ngOnInit(): void {
  }

}
