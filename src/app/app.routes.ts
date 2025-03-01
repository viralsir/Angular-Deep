import { Routes } from '@angular/router';
import {HomeComponent} from '../home/home.component';
import {ContactusComponent} from '../contactus/contactus.component';
import {AboutusComponent} from '../aboutus/aboutus.component';
import {EventBindingComponent} from '../event-binding/event-binding.component';
import {TwoWayBindingComponent} from '../two-way-binding/two-way-binding.component';
import {TdfComponent} from '../tdf/tdf.component';

export const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"contactus",component:ContactusComponent},
  {path:"aboutus",component:AboutusComponent},
  {path:"EventBinding",component:EventBindingComponent},
  {path:"TwoWayBinding",component:TwoWayBindingComponent},
  {path:"tdf",component:TdfComponent}
];
