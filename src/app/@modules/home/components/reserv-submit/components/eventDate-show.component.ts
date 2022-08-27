import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EventBooking } from '../model/EventBooking-model';

@Component({
  selector: 'app-eventdate-submit',
  templateUrl: './eventdate-show.component.html',
  styleUrls: ['./eventdate-show.component.scss']
})
export class EventDateComponent implements OnInit {
        
  @Input() public eventBooking : EventBooking = new EventBooking()

  optionDate: string;

  @Output() clickHide = new EventEmitter<void>();

  @Output() clickReserve = new EventEmitter<EventBooking>();
  
  ngOnInit(): void {   
  }
  public Apply() {

      this.clickReserve.next(this.eventBooking);
      this.clickHide.next();

 
  }



}
