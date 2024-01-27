const movie1 = new Movie('Mission Impossible', 'Action', 5);
const movie2 = new Movie('After Ever Happy', 'Romance', 3);
class Movie {
  constructor(title, genre, availableCopies) {
    this.title = title;
    this.genre = genre;
    this.availableCopies = availableCopies;
    this.rentedCopies = 0;
  }

  rentMovie() {
    if (this.availableCopies > 0) {
      this.availableCopies--;
      this.rentedCopies++;
      return `${this.title} has been rented. Enjoy your movie!`;
    } else {
      return `Sorry, ${this.title} is currently not available.`;
    }
  }

  returnMovie() {
    if (this.rentedCopies > 0) {
      this.availableCopies++;
      this.rentedCopies--;
      return `Thank you for returning ${this.title}. Hope you enjoyed the movie!`;
    } else {
      return `There are no rented copies of ${this.title} to return.`;
    }
  }
}
const movieStore = new MovieStore();
movieStore.addMovie(movie1);
movieStore.addMovie(movie2);

class MovieStore {
  constructor() {
    this.movies = [];
  }

  addMovie(movie) {
    this.movies.push(movie);
  }

  getMovie(title) {
    const movie = this.movies.find((m) => m.title === title);
    return movie ? movie : `Movie with title ${title} not found.`;
  }
}

console.log(movieStore.getMovie('Mission Impossible').rentMovie());

