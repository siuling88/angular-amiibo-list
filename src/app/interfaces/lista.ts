export interface Amiibo {
  amiiboSeries?: String;
  character?: String;
  gameSeries?: String;
  head?: String;
  image: String;
  name: String;
  release?: Release;
  tail?: String;
  type?: String;
}

export interface AmiiboShort {
  image: String;
  name: String;
}

export interface Release {
  au: String;
  eu: String;
  jp: String;
  na: String;
}

export interface Result {
  estrellas: Number;
  nombre: String;
  imagen: String;
}
