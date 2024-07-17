import { useState } from "react";

const useCountdown = (date) => {
  const [day, setDay] = useState();
  const [hour, setHour] = useState();
  const [minute, setMinute] = useState();
  const [second, setSecond] = useState();

  const countdown = () => {
    const countDate = new Date(date).getTime(); // extraindo a data futura em ms
    const now = new Date().getTime(); // data atual

    const interval = countDate - now; // intervalo de tempo entre data atual e dat futura

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const dayNumber = Math.floor(interval / day);
    const hourNumber = Math.floor((interval % day) / hour);
    const minNumber = Math.floor((interval % hour) / minute);
    const secNumber = Math.floor((interval % minute) / second);

    setDay(dayNumber);
    setHour(hourNumber);
    setMinute(minNumber);
    setSecond(secNumber);
  };

  setInterval(countdown, 1000); // chamar countdown a cada um segundo
  return [day, hour, minute, second];
};

export default useCountdown;
