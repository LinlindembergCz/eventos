import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestPromiseService } from 'src/app/@shared/services/request-promise.service';

class Banner{
  name: string ;
  summary: string ;
  image: string;
}

@Component({
  selector: 'app-banners-show',
  templateUrl: './banners-show.component.html',
  styleUrls: ['./banners-show.component.scss']
})
export class BannersShowComponent implements OnInit {

  imgs: Banner[] = [];
  itens: any[]=[];

  constructor(
    private http: RequestPromiseService,
    private route: Router
  ) { }

  ngOnInit(): void {   
    this.getInfo();
  }

  getInfo() 
  { 
      this.http.get<any>("assets/data","projectAbout.json").
      then(x => {      
            x.images.forEach(i => {
                          this.itens.push( {name: x.name, summary:x.summary, image:i });
                      }); 
                      this.imgs = this.itens;          
          });
  }

}
