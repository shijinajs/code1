import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddbookComponent } from './pages/addbook/addbook.component';
import { BookpageComponent } from './pages/bookpage/bookpage.component';
import { EditComponent } from './pages/edit/edit.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignformComponent } from './pages/signform/signform.component';

const routes: Routes = [{ path: '', pathMatch: 'full', redirectTo: 'home' },
{ path: 'home', component: HomeComponent},
{ path: 'account', component: LoginComponent},
{ path: 'signup', component: SignformComponent},
{ path: 'login', component: BookpageComponent},
{path: 'book', component: BookpageComponent},
{ path: 'book/add', component:AddbookComponent},
{ path: 'edit/:id', component:EditComponent},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
