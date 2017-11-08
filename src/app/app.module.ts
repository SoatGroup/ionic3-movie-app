import { HttpClientModule } from "@angular/common/http";
import { MovieDetailPageModule } from "../pages/movie-detail/movie-detail.module";
import { MovieListPageModule } from "../pages/movie-list/movie-list.module";
import { MyMoviesPageModule } from "../pages/my-movies/my-movies.module";
import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";

import { MyApp } from "./app.component";
import { HomePage } from "../pages/home/home";
import { ListPage } from "../pages/list/list";

import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { MovieApiProvider } from "../providers/movie-api/movie-api";

@NgModule({
  declarations: [MyApp, HomePage, ListPage],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    MyMoviesPageModule,
    MovieListPageModule,
    MovieDetailPageModule,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, HomePage, ListPage],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    MovieApiProvider
  ]
})
export class AppModule {}
