import {AfterViewInit, Component,OnInit, } from '@angular/core';
import {PrimeIcons} from 'primeng/api';


interface TipoEvento {
    code: string,
    name: string   
}

@Component({
    selector: 'app-evento-submit',
    templateUrl: './evento-submit.component.html',
    styleUrls: ['./evento-submit.component.scss']
  })
export class EventoSubmit implements AfterViewInit, OnInit  {

    loadAllTabs:boolean = false;
    activeIndex:number=-1;

    events: any[];
    tiposEnvento:TipoEvento[];
    optionDate: string;
    tipoEvento: string;
    
    ngOnInit() {
        this.events = [
            {status: '1'},
            {status: '2'},
            {status: '3'},
        ];

        this.tiposEnvento = [
            {name: 'Escolha tipo de evento', code: '0'},
            {name: 'Tipo evento 1', code: '1'},
            {name: 'Tipo evento 2', code: '2'},
            {name: 'Tipo evento 3', code: '3'},
        ]
    }

    ngAfterViewInit()
    {
       this.loadAllTabs = false
    }

    onTabOpen(e:any)
    {
        this.activeIndex= e.index;
    }

    nextTab(index:number)
    {
       this.activeIndex= index;
    }

    priorTab(index:number)
    {
       this.activeIndex = index-1;
    }
}