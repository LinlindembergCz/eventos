import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reserv-submit',
  templateUrl: './reserv-submit.component.html',
  styleUrls: ['./reserv-submit.component.scss']
})
export class ReservSubmitComponent implements OnInit {

  DialogEventDateShowing: Boolean = false;
  
  ngOnInit(): void {   
  }

  ShowDialogEventDate()
  {
    this.DialogEventDateShowing = true;
  }


}
