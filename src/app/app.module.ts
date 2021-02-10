import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavListComponent } from './components/nav-list/nav-list.component';
import { HttpClientModule } from '@angular/common/http';
import { SingleLineListComponent } from './components/lists/single-line-list/single-line-list.component';
import { TwoLineListComponent } from './components/lists/two-line-list/two-line-list.component';
import { SingleLineAvatarSelectionListComponent } from './components/lists/single-line-avatar-selection-list/single-line-avatar-selection-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    SearchBarComponent,
    FooterComponent,
    NavListComponent,
    SingleLineListComponent,
    TwoLineListComponent,
    SingleLineAvatarSelectionListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
