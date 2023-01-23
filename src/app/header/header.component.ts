import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  current_lang:string = '';

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

  changeLang(lang:string){
    this.current_lang = lang;
    this.router.navigate(['/', 'home', lang]);
  }

}
