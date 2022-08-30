import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-calendario-edit',
  templateUrl: './calendario-edit.component.html',
  styleUrls: ['./calendario-edit.component.scss']
})
export class CalendarioEditComponent implements OnInit {
        
  SelectedDates: Date[]=[]; 
  periodos: any[]=[];

  ngOnInit(): void {   
  }

  
  selectDate(e)
  {
    let i = 0;
    this.periodos=[]
    if (this.SelectedDates!=null)
    {
      this.SelectedDates.forEach( 
      d =>{  
              this.periodos.push({index: i, name:'periodo'+i, data:d.toLocaleDateString(), horaInicio:'', horaFim:'',option:''})
              i++;
          });
    }
  }



}
