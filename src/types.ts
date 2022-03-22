
export interface CoordTown {
    town?: string;
    lat: number;
    lon: number;
    country?: string;
  }

export interface CoordsMyTowns {
  town: string;
  lat: number;
  lon: number;
  temp: number;
}[]

export interface CurrentTemp {
  town: string;
  lat: number;
  lon: number;
  temp: number;
}

interface Forecast {
  img: string;
  date: number;
  maxTemp: number;
  minTemp: number;
}

export interface WeatherData {
  skyImg: string;
  skyMain: string;
  currentTemp: number;
  tempMax: number;
  tempMin: number;
  humidity: number;
  pressure: number;
  windSpeed: number;
  sunrise: number;
  sunset: number;
  forecast: Forecast[]
}