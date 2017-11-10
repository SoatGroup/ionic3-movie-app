import { UserPreferencesProvider } from "../../providers/user-preferences/user-preferences";
import { IMovie } from "../../interface/IMovie";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

@IonicPage()
@Component({
  selector: "page-movie-detail",
  templateUrl: "movie-detail.html"
})
export class MovieDetailPage {
  movie: IMovie;
  favorite: boolean = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private userPreferencesProvider: UserPreferencesProvider
  ) {}

  ionViewDidLoad() {
    this.movie = this.navParams.data;
    this.userPreferencesProvider
      .isFavortieMovie(this.movie.id)
      .then(value => (this.favorite = value));
  }

  toggleFavorite(): void {
    if (this.favorite) {
      this.favorite = false;
      this.userPreferencesProvider.unfavoriteMovie(this.movie);
    } else {
      this.favorite = true;
      this.userPreferencesProvider.favoriteMovie(this.movie);
    }
  }
}
