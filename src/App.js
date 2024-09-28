import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Layout from './components/Layout/Layout';

function App() {
  // const [timerDays, setTimerDays] = useState("00");
  // const [timerHours, setTimerHours] = useState("00");
  // const [timerMinutes, setTimerMinutes] = useState("00");
  // const [timerSeconds, setTimerSeconds] = useState("00");

  // let interval = useRef();

  // const startTimer = () => {
  //   const countDownDate = new Date("Febuary 1, 2025 12:00:00").getTime();

  //   interval = setInterval(() => {
  //     const now = new Date().getTime();
  //     const distance = countDownDate - now;

  //     const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  //     const hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
  //     const minutes = Math.floor((distance % (1000 * 60 * 60) / (1000 * 60)));
  //     const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  //     if(distance < 0) {
  //       clearInterval(interval.current);
  //     } else {
  //       setTimerDays(days);
  //       setTimerHours(hours);
  //       setTimerMinutes(minutes);
  //       setTimerSeconds(seconds);
  //     }
  //   }, 1000);
  // };

  // useEffect(() => {
  //   startTimer();
  //   return () => {
  //     clearInterval(interval.current);
  //   }
  // });

  // return (
  //   <div className="App">
  //     <div className="text-object">
  //       <h1>Hack SU</h1>
  //       <h2>Coming Soon...</h2>
  //       <h3>{timerDays}:{timerHours}:{timerMinutes}:{timerSeconds}</h3>
  //     </div>
  //   </div>
  // );

  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<Home />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
