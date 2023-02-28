export default interface eFilm {
  id: string;
  name: string;
  subName: string;
  description: string;
  trailer: string;
  startdate: string;
  imagePortrait: string;
  imageLandscapeMobile: string;
  duration: string;
  point: number;
  age: string;
  imageLandscape: string;
  shortDescription: string;
}
export default interface eFilmInCinema {
  name: string;
  startdate: string;
  duration: string;
  imagePortrait: string;
  dates: Array<{
    showDate: string;
    dayOfWeekLabel: string;

    bundles: Array<{
      version: string;
      sessions: Array<{
        showTime: string;
      }>;
    }>;
  }>;
}
