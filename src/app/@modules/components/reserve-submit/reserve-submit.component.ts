import { Component, OnInit } from '@angular/core';
import { EventBooking } from './model/EventBooking-model';

@Component({
  selector: 'app-reserve-submit',
  templateUrl: './reserve-submit.component.html',
  styleUrls: ['./reserve-submit.component.scss']
})
export class ReserveSubmitComponent implements OnInit {

  DialogEventDateShowing: Boolean = false;
  EventDays: string ='';
  
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
     this.EventDays =''
     event.Days.forEach( e=>{this.EventDays = this.EventDays + e.toLocaleDateString()+' '; })
  }




}
