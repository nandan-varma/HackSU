import './Home.css';
import InterestButton from '../InterestButton/InterestButton';
import { useRef, useState, useEffect } from 'react';

function Home() {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");

  const formatTime = (t) => t < 10 ? '0' + t : t;

  let interval = useRef();

  const startTimer = () => {
    const countDownDate = new Date("Febuary 1, 2025 12:00:00").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60) / (1000 * 60)));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if(distance < 0) {
        clearInterval(interval.current);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    }
  });

  return (
    <div className="Home">
      <div className="text-object">
        <h1>Hack SU</h1>
        <h2>Coming Soon...</h2>
        <h3>{formatTime(timerDays)}:{formatTime(timerHours)}:{formatTime(timerMinutes)}:{formatTime(timerSeconds)}</h3>
        <div className="interest-form-button">
          <InterestButton/>
        </div>
      </div>
    </div>
  );
}

export default Home;
