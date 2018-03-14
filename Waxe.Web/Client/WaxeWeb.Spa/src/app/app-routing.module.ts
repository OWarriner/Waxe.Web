import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { SettingsComponent } from './Components/settings/settings.component';
import { CollectionComponent } from './Components/collection/collection.component';

const routes: Routes = [
  { path: '', 
    component: DashboardComponent 
},

{ path: 'collection',
component: CollectionComponent
},

  { path: 'settings', 
  component: SettingsComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
