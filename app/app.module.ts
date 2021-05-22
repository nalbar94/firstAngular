import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageOneComponent } from './page-one/page-one.component';
import { PageTwoComponent } from './page-two/page-two.component';
import { PageThreeComponent } from './page-three/page-three.component';
import { PageFourComponent } from './page-four/page-four.component';
import { PageFiveComponent } from './page-five/page-five.component';
import { PageSixComponent } from './page-six/page-six.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MaterialModule } from './angular-material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageSixModule } from './page-six/page-six.module';

@NgModule({
  declarations: [
    AppComponent,
    PageOneComponent,
    PageTwoComponent,
    PageThreeComponent,
    PageFourComponent,
    PageFiveComponent,
    PageSixComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MaterialModule,
    BrowserAnimationsModule,
    

    // NoopAnimationsModule,
    // MatListModule,
    // MatSelectModule,
    // HttpClientModule,
    // MatOptionModule,
    // MatButtonModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [PageSixModule]
})
export class AppModule { }
