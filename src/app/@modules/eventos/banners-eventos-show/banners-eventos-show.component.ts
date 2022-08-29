import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestPromiseService } from '../../../@shared/services/request-promise.service';

class Banner{
  name: string ;
  summary: string ;
  image: string;
}

@Component({
  selector: 'app-banners-eventos-show',
  templateUrl: './banners-eventos-show.component.html',
  styleUrls: ['./banners-eventos-show.component.scss']
})
export class BannersEventosShowComponent implements OnInit {

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
      this.http.get<any>("assets/data","banners.json").
      then(x => {      
            x.images.forEach(i => {
                          this.itens.push( {name: x.name, summary:x.summary, image:i });
                      }); 
                      this.imgs = this.itens;          
          });
  }

}
