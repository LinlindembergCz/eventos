import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './pages/index/index.component';
import { HomeRountingModule } from './home-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgPrimeExportsModule } from 'src/app/@bootstrap/scripts/ngprime.exports';
import {BannersShowComponent } from './components/banners-show/banners-show.component';
import {SebraelabShowComponent } from './components/sebraelab-show/sebraelab-show.component';
import {ContentShowComponent } from './components/content-show/content-show.component';
import {EventoslabShowComponent } from './components/eventoslab-show/eventoslab-show.component';
import {ReservSubmitComponent } from './components/reserv-submit/reserv-submit.component';
import { ContactSubmitComponent } from './components/contact-submit/contact-submit.component';
import {EcosystemShowComponent } from './components/ecosystem-show/ecosystem-show.component';

import { FooterModule } from 'src/app/@layout/footer/footer.module';
import { HeaderModule } from 'src/app/@layout/header/header.module';

import { NgxCaptchaModule } from 'ngx-captcha';
import { CardModule } from 'primeng/card';
import { RatingModule } from 'primeng/rating';
import { FieldsetModule } from 'primeng/fieldset';
import {DataViewModule} from 'primeng/dataview';
import {ButtonModule} from 'primeng/button';
import {DividerModule} from 'primeng/divider';
import { CalendarModule } from 'primeng/calendar';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputMaskModule } from 'primeng/inputmask';

@NgModule({
  declarations: [IndexComponent, 
     BannersShowComponent,SebraelabShowComponent, ContentShowComponent,
     EventoslabShowComponent, ReservSubmitComponent,ContactSubmitComponent,
     EcosystemShowComponent   
    ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgPrimeExportsModule,
    HomeRountingModule,    
    NgxCaptchaModule,
    CardModule,
    RatingModule,
    FieldsetModule,
    DataViewModule,
    ButtonModule,
    DividerModule,
    CalendarModule,
    InputTextModule,
    InputNumberModule,
    InputMaskModule, 
    FooterModule,
    HeaderModule,
  ],
  providers: []
})
export class HomeModule { }
