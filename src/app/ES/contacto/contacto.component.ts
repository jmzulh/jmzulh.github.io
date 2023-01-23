import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

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
