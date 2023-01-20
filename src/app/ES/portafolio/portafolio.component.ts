import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ArvrComponent } from 'src/app/dialogs/arvr/arvr.component';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openARVR(){
    const dialogRef = this.dialog.open(ArvrComponent, {
      height:'90%',
      width:'90%',
      data: { lang: 'es' },
    });
  }

}
