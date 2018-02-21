import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule,NoopAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from './app.routing.module';

//import {NgbModule} from '@ng-bootstrap/ng-bootstrap';



import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatToolbarModule} from '@angular/material/toolbar';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PrepComponent }   from './prep/prep.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ToolbarComponent } from './shared/toolbar/toolbar.component';
import { SidenavComponent } from './shared/sidenav/sidenav.component';
import { FabMenuComponent } from './shared/fab-menu/fab-menu.component';
import { CoreModule } from "./modules/core.module";
import { BarcodeModule } from "./barcode/barcode.module";

@NgModule({
  declarations: [
    AppComponent,LoginComponent,HomeComponent,PrepComponent,NotFoundComponent,
    ToolbarComponent,
    SidenavComponent,
    FabMenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatButtonModule, MatCheckboxModule,MatExpansionModule,MatInputModule,MatRadioModule,MatSelectModule,MatSlideToggleModule,MatToolbarModule, CoreModule,
    BarcodeModule,
	BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
