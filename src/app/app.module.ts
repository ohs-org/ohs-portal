import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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
import { MatSelectModule } from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { MatStepperModule } from '@angular/material/stepper';
import { FlexLayoutModule } from '@angular/flex-layout';

import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavListComponent } from './components/nav-list/nav-list.component';
import { SingleLineListComponent } from './components/lists/single-line-list/single-line-list.component';
import { TwoLineListComponent } from './components/lists/two-line-list/two-line-list.component';
import { SingleLineAvatarSelectionListComponent } from './components/lists/single-line-avatar-selection-list/single-line-avatar-selection-list.component';
import { TwoLineAvatarSelectionListComponent } from './components/lists/two-line-avatar-selection-list/two-line-avatar-selection-list.component';
import { DropdownComponent } from './components/selection-controls/dropdown/dropdown.component';
import { DatepickerComponent } from './components/selection-controls/datepicker/datepicker.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { StepProgressBarComponent } from './components/step-progress-bar/step-progress-bar.component';
import { QuestionnaireProgressBarComponent } from './components/questionnaire-progress-bar/questionnaire-progress-bar.component';
import { ComponentsComponent } from './pages/components/components.component';
import { StepperFormComponent } from './pages/stepper-form/stepper-form.component';
import { SectionSummaryComponent } from './pages/stepper-form/section-summary/section-summary.component';

const appRoutes: Routes = [
  { path: '', component: ComponentsComponent},
  { path: 'lists', component: TwoLineAvatarSelectionListComponent},
  { path: 'stepperform', component: StepperFormComponent}
];

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
    TwoLineAvatarSelectionListComponent,
    DropdownComponent,
    DatepickerComponent,
    PaginatorComponent,
    StepProgressBarComponent,
    QuestionnaireProgressBarComponent,
    ComponentsComponent,
    StepperFormComponent,
    SectionSummaryComponent,
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
    MatSelectModule,
    HttpClientModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSlideToggleModule,
    MatDatepickerModule,
    MatMomentDateModule,
    FormsModule,
    ReactiveFormsModule,
    MatTooltipModule,
    MatProgressBarModule,
    MatPaginatorModule,
    CdkStepperModule,
    MatStepperModule,
    FlexLayoutModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
