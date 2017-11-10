import { MovieDetailPage } from "../movie-detail/movie-detail";
import { UserPreferencesProvider } from "../../providers/user-preferences/user-preferences";
import { IMovie } from "../../interface/IMovie";
import { MovieListPage } from "../movie-list/movie-list";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

@IonicPage()
@Component({
  selector: "page-my-movies",
  templateUrl: "my-movies.html"
})
export class MyMoviesPage {
  favoriteMovies: IMovie[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private userPreferencesProvider: UserPreferencesProvider
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad MyMoviesPage");
  }

  ionViewWillEnter() {
    this.initFavoriteMovies();
  }

  initFavoriteMovies() {
    this.userPreferencesProvider
      .getFavoriteMovies()
      .then(favs => (this.favoriteMovies = favs));
  }

  findMovie() {
    this.navCtrl.push(MovieListPage);
  }

  goToDetail(movie: IMovie) {
    this.navCtrl.push(MovieDetailPage, movie);
  }
}
