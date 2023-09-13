import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ViewAllComponent } from './view-all/view-all.component';
import { ViewComponent } from './view/view.component';
import { BookComponent } from './book/book.component';
import { AddDataComponent } from './add-data/add-data.component';
import { SitelayoutModule } from './sitelayout/sitelayout.module';
import { SignComponent } from './sign/sign.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{ HttpClientModule} from '@angular/common/http';
import { SearchPipe } from './searchpipe/search.pipe';
import { DownloadComponent } from './download/download.component';
import { AdminViewAllComponent } from './admin-view-all/admin-view-all.component';
import { AdminViewComponent } from './admin-view/admin-view.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ViewAllComponent,
    ViewComponent,
    BookComponent,
    AddDataComponent,
    SignComponent,
    SearchPipe,
    DownloadComponent,
    AdminViewAllComponent,
    AdminViewComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SitelayoutModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
