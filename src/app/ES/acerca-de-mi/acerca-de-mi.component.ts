import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-acerca-de-mi',
  templateUrl: './acerca-de-mi.component.html',
  styleUrls: ['./acerca-de-mi.component.css']
})
export class AcercaDeMiComponent implements OnInit {

  anios: number = new Date().getFullYear() - 2017;
  current_lang:string = 'es';

  constructor(private router: Router, private route: ActivatedRoute) {
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

}
