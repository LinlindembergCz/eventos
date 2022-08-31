import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventBooking } from './model/EventBooking-model';

@Component({
  selector: 'app-reserve-submit',
  templateUrl: './reserve-submit.component.html',
  styleUrls: ['./reserve-submit.component.scss']
})
export class ReserveSubmitComponent implements OnInit {

  DialogEventDateShowing: Boolean = false;
  EventDays: Array<string> ;

  constructor(
    private router: Router
  ) {

  }
  
  ngOnInit(): void {   
  }

  showDialogEventDate()
  {
    this.DialogEventDateShowing = true;
  }

  hideDialogEventDate()
  {
    this.DialogEventDateShowing = false;
  }

  public reserve(event: EventBooking): void
  {
      this.EventDays = [];
      event.Days.forEach( e=>{
       this.EventDays.push(e.getFullYear()  + '/' +( e.getMonth()+1 )+ '/' +e.getDate())
      })
  }

  showMeuEvento()
  {
    this.router.navigate([`meuevento`],
    { queryParams:{  
                    datas: [ JSON.stringify(this.EventDays)],
                    nomeevento:'MEU EVENTO',
                    numeroparticipantes:'30'
                  } 
     } ); 
  }



}
