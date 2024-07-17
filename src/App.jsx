import { useState, useRef, useEffect } from "react";

function App() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [isTimerRunning, setIsTimerRunning] = useState(true);
  const timerId = useRef(null);

  useEffect(() => {
    if (isTimerRunning) {
      timerId.current = setInterval(() => {
        setCurrentDate(new Date());
      }, 1000);
    }

    return () => {
      clearInterval(timerId.current);
    };
  }, [isTimerRunning]);

  function handleStart() {
    setIsTimerRunning(true);
  }

  function handleStop() {
    setIsTimerRunning(false);
  }

  return (
    <>
      <h2 className="text-6xl ">Digital Clock</h2>
      <p className="text-8xl">{currentDate.toLocaleTimeString()}</p>
      <p className="text-7xl">{currentDate.toLocaleDateString()}</p>
      <div className="flex gap-6 justify-center">
        <button
          className="text-4xl border hover:text-black hover:bg-white px-4 py-2"
          onClick={handleStart}
        >
          Start
        </button>
        <button
          className="text-4xl border hover:text-black hover:bg-white px-4 py-2"
          onClick={handleStop}
        >
          Stop
        </button>
      </div>
    </>
  );
}

export default App;
