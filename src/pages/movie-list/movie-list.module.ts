import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { MovieListPage } from "./movie-list";

@NgModule({
  declarations: [MovieListPage],
  imports: [IonicPageModule.forChild(MovieListPage)]
})
export class MovieListPageModule {}
