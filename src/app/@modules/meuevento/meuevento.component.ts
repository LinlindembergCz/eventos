import { Component, Input, OnInit } from '@angular/core';
import { EventBooking } from '../components/reserve-submit/model/EventBooking-model';
class MeuEvento {
  Days?: Date[];
  Hours?: string;
  Name?: string;
  subscribedCapacity?: number;
}

@Component({
  selector: 'app-meuevento',
  templateUrl: './meuevento.component.html',
  styleUrls: ['./meuevento.component.scss']
})
export class MeuEventoComponent implements OnInit {



  optionsCheck: string[]=[];
  
  constructor() { }

  ngOnInit(): void {

  }


}
