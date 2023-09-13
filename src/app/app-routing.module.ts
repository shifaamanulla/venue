import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ViewAllComponent } from './view-all/view-all.component';
import { ViewComponent } from './view/view.component';
import { BookComponent } from './book/book.component';
import { AddDataComponent } from './add-data/add-data.component';
import { SignComponent } from './sign/sign.component';
import { DownloadComponent } from './download/download.component';
import { AdminViewAllComponent } from './admin-view-all/admin-view-all.component';
import { AdminViewComponent } from './admin-view/admin-view.component';
import { EditComponent } from './edit/edit.component';


const routes: Routes = [{path:'',component:HomeComponent},
{path:'viewall',component:ViewAllComponent},
{path:'view/:id',component:ViewComponent},
{path:'book',component:BookComponent},
{path:'addData',component:AddDataComponent},
{
  path:'sign',component:SignComponent
},
{path:'download',component:DownloadComponent},
{path:'adminViewAll',component:AdminViewAllComponent},
{path:'adminView/:id',component:AdminViewComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
