import { Component,OnInit, } from '@angular/core';

@Component({
    selector: 'app-funcionamento-show',
    templateUrl: './funcionamento-show.component.html',
    styleUrls: ['./funcionamento-show.component.scss']
  })
export class FuncionamentoShow implements OnInit  {
    
    options: any;

    overlays: any[];

    ngOnInit() {
      this.options = {
            center: {lat: 36.890257, lng: 30.707417},
            zoom: 12
        };
    }

}