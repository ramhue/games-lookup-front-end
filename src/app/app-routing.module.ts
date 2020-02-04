import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsolesComponent } from './components/consoles/consoles.component'
import { PublishersComponent } from './components/publishers/publishers.component';
import { GamesComponent } from './components/games/games.component';
import { HomeComponent} from './components/home/home.component'
const routes: Routes = [
  {path: 'consoles', component:ConsolesComponent },
  {path: 'publishers', component:PublishersComponent},
  {path: 'games', component:GamesComponent},
  {path: '', component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
