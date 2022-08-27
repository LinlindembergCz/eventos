import { Component, OnInit } from '@angular/core';
import { EventBooking } from './model/EventBooking-model';

@Component({
  selector: 'app-reserv-submit',
  templateUrl: './reserv-submit.component.html',
  styleUrls: ['./reserv-submit.component.scss']
})
export class ReservSubmitComponent implements OnInit {

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
