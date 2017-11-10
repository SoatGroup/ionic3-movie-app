import { Injectable } from "@angular/core";
import { Storage } from "@ionic/storage";
import { IMovie } from "../../interface/IMovie";

/*
  Generated class for the UserPreferencesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserPreferencesProvider {
  constructor(private storage: Storage) {
    console.log("Hello UserPreferencesProvider Provider");
  }

  favoriteMovie(movie: IMovie) {
    this.storage.set(movie.id.toString(), JSON.stringify(movie));
  }

  unfavoriteMovie(movie: IMovie) {
    this.storage.remove(movie.id.toString());
  }

  isFavortieMovie(movieId) {
    return this.storage.get(movieId).then(value => (value ? true : false));
  }

  getFavoriteMovies(): Promise<IMovie[]> {
    return new Promise(resolve => {
      let results: IMovie[] = [];
      this.storage.forEach(data => {
        results.push(JSON.parse(data));
      });
      return resolve(results);
    });
  }
}
