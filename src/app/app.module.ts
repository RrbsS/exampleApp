import {TableModule} from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ToastModule } from 'primeng/toast';
import {MessageModule, MessagesModule, ContextMenuModule } from 'primeng/primeng';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {CalendarModule} from 'primeng/calendar';
import {InputTextModule} from 'primeng/inputtext';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ConfirmationService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';


import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { GridComponent } from './grid/grid.component';
import { RouterModule } from '../../node_modules/@angular/router';
import { routes } from './app-routing/app-routing.module';
import { MessageService } from 'primeng/primeng';
import { AddEditBookComponent } from './add-edit-book/add-edit-book.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    AddEditBookComponent,
    GridComponent,
    AddEditBookComponent
  ],
  imports: [
    ToastModule,
    DialogModule,
    MessageModule,
    CalendarModule,
    ConfirmDialogModule,
    InputTextModule,
    ContextMenuModule,
    MessagesModule,
    FormsModule,
    TableModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    ToastModule,
    DialogModule,
    MessageModule,
    CalendarModule,
    InputTextModule,
    ConfirmDialogModule,
    ContextMenuModule,
    FormsModule,
    MessagesModule,
    TableModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,

  ],

  providers: [MessageService,ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }