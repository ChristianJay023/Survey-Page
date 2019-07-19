import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'survey-page', loadChildren: './survey-page/survey-page.module#SurveyPagePageModule' },
  { path: 'dashboard', loadChildren: './survey-page/dashboard/dashboard.module#DashboardPageModule' },
  { path: 'report', loadChildren: './survey-page/report/report.module#ReportPageModule' },
  { path: 'survey-content', loadChildren: './survey-page/survey-content/survey-content.module#SurveyContentPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
