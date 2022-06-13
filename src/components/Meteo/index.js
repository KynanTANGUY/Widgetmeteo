/* eslint-disable react/prop-types */
/* eslint-disable default-case */
/* eslint-disable jsx-a11y/alt-text */
import './meteo.scss';
import d01 from '../../assets/images/01d.svg';
import n01 from '../../assets/images/01n.svg';
import d02 from '../../assets/images/02d.svg';
import n02 from '../../assets/images/02n.svg';
import d04 from '../../assets/images/04.svg';
import d09 from '../../assets/images/09d.svg';
import n09 from '../../assets/images/09n.svg';
import d10 from '../../assets/images/10.svg';
import d11 from '../../assets/images/11d.svg';
import n11 from '../../assets/images/11n.svg';
import d13 from '../../assets/images/13d.svg';
import n13 from '../../assets/images/13n.svg';
import d50 from '../../assets/images/50d.svg';
import n50 from '../../assets/images/50n.svg';
import windIcon from '../../assets/images/Vent.png';
import humidityIcon from '../../assets/images/humidity.png';
import sunIcon from '../../assets/images/sun.png';

function Meteo({ items }) {
  const city = items.name;
  const temperature = Math.round(items.main.temp);
  const { country } = items.sys;
  const windSpeed = Math.floor((items.wind.speed * 18) / 5);
  const windDirection = items.wind.deg;
  const { humidity } = items.main;
  let iconcode = items.weather[0].icon;
  // const icon = `http://openweathermap.org/img/wn/${iconcode}.png`;
  const { sunrise } = items.sys;
  const { sunset } = items.sys;

  switch (iconcode) {
    case '01d':
      iconcode = d01;
      break;

    case '01n':
      iconcode = n01;
      break;

    case '02d':
      iconcode = d02;
      break;

    case '02n':
      iconcode = n02;
      break;

    case '03n':
      iconcode = d04;
      break;

    case '03d':
      iconcode = d04;
      break;

    case '04d':
      iconcode = d04;
      break;

    case '04n':
      iconcode = d04;
      break;

    case '09d':
      iconcode = d09;
      break;

    case '09n':
      iconcode = n09;
      break;

    case '10d':
      iconcode = d10;
      break;

    case '10n':
      iconcode = d10;
      break;

    case '11d':
      iconcode = d11;
      break;

    case '11n':
      iconcode = n11;
      break;

    case '13d':
      iconcode = d13;
      break;

    case '13n':
      iconcode = n13;
      break;

    case '50d':
      iconcode = d50;
      break;

    case '50n':
      iconcode = n50;
      break;
  }

  return (
    <div className="flex flex-col items-center justify-center w-screen text-gray-700">

      <div className="w-full max-w-screen-sm bg-white p-10 rounded-xl">
        <div className="flex justify-between">
          <div className="flex flex-col">
            <span className="text-6xl font-bold">{temperature}°C</span>
            <span className="font-semibold mt-1 text-gray-500">{city}, {country}</span>
          </div>
          <img height="100" width="100" src={iconcode} />
        </div>
        <div className="flex justify-between mt-12">
          <div className="flex flex-col items-center">
            <span className="font-semibold text-lg">Vitesse du vent</span>
            <img width="30" src={windIcon} />
            <span className="font-semibold mt-1 text-sm">{windSpeed} km/h</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-semibold text-lg">Direction du vent</span>
            <img width="30" src={windIcon} />
            <span className="font-semibold mt-1 text-sm">{windDirection} °</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-semibold text-lg">Humidité de l'air</span>
            <img width="30" src={humidityIcon} />
            <span className="font-semibold mt-1 text-sm">{humidity} %</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-semibold text-lg">lever de soleil</span>
            <img width="30" src={sunIcon} />
            <span className="font-semibold mt-1 text-sm">{new Date(sunrise * 1000).toLocaleTimeString()}</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-semibold text-lg">Coucher de soleil</span>
            <img width="30" src={sunIcon} />
            <span className="font-semibold mt-1 text-sm">{new Date(sunset * 1000).toLocaleTimeString()}</span>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Meteo;
