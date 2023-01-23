import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ArvrComponent } from 'src/app/dialogs/arvr/arvr.component';
import { DddComponent } from 'src/app/dialogs/ddd/ddd.component';
import { VideogamesComponent } from 'src/app/dialogs/videogames/videogames.component';
import { WebComponent } from 'src/app/dialogs/web/web.component';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent implements OnInit {
  
  current_lang:string = 'es';

  constructor(public dialog: MatDialog, private router: Router, private route: ActivatedRoute) {
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.route.params.subscribe(async params => {
          if(params['lang'])
            this.current_lang = params['lang'];
          else
            this.current_lang = 'es';
        });
      }
    });
  }

  ngOnInit(): void {
  }

  openARVR(){
    const dialogRef = this.dialog.open(ArvrComponent, {
      height:'90%',
      width:'90%',
      data: { lang: this.current_lang },
    });
  }

  openWeb(){
    const dialogRef = this.dialog.open(WebComponent, {
      height:'90%',
      width:'90%',
      data: { lang: this.current_lang },
    });
  }

  openVG(){
    const dialogRef = this.dialog.open(VideogamesComponent, {
      height:'90%',
      width:'90%',
      data: { lang: this.current_lang },
    });
  }

  open3D(){
    const dialogRef = this.dialog.open(DddComponent, {
      height:'90%',
      width:'90%',
      data: { lang: this.current_lang },
    });
  }
}
