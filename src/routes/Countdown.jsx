import Title from "../components/Title";
import Counter from "../components/Counter";
import { Navigate } from "react-router-dom";

import useCountdown from "../hooks/useCountdown";

import { CountdownContext } from "../context/CountdownContext";
import { useContext } from "react";

const Countdown = () => {
  const { event } = useContext(CountdownContext);

  if (!event) return <Navigate to="/"></Navigate>;

  const eventTitle = event.title;
  const eventColor = event.color;
  const [day, hour, minute, second] = useCountdown(event.date);

  return (
    <div>
      <Title title={eventTitle} eventColor={eventColor}></Title>
      <div className="countdown-container">
        <Counter title="Dias" number={day} eventColor={eventColor}></Counter>
        <Counter title="Horas" number={hour} eventColor={eventColor}></Counter>
        <Counter
          title="Minutos"
          number={minute}
          eventColor={eventColor}
        ></Counter>
        <Counter
          title="Segundos"
          number={second}
          eventColor={eventColor}
        ></Counter>
      </div>
    </div>
  );
};

export default Countdown;
