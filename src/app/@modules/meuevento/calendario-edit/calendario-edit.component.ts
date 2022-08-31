import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-calendario-edit',
  templateUrl: './calendario-edit.component.html',
  styleUrls: ['./calendario-edit.component.scss']
})
export class CalendarioEditComponent implements AfterViewInit, OnInit {
        
  SelectedDates: Date[]=[]; 
  periodos: any[]=[];

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {   

  }

  ngAfterViewInit()
  {    
    this.route.queryParams.subscribe(
    params =>{  if (params['datas'])
                {
                  let datasArray:Array<string> = JSON.parse(params['datas']);
                  datasArray.forEach(data =>{ 
                                              const date = new Date(data)
                                              this.SelectedDates.push(date)
                                              this.selectDate(date);
                                            })
                }
              })
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

  isDaySelected(e)
  {
      return this.SelectedDates.find(d => d.getDay() == e.day);
    
  }



}
