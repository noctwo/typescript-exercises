type WeatherData = {
    date: string;
    temperature: number;
    temperature_min: number;
    temperature_max: number;
    precipitation: number;
    snowfall: number | null;
    snowdepth: number;
    winddirection: number | null;
    windspeed: number;
    peakgust: number;
    sunshine: number;
    pressure: number;
  };

  export{WeatherData}