import { useState, useEffect } from "react";

const CountdownTimer = () => {
  // Target date for the countdown (adjust the date and time as needed)
  const targetDate = new Date("2023-08-12T23:59:59");

  // State to store the remaining time
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  // Function to calculate the remaining time
  function calculateTimeRemaining() {
    const currentDate = new Date();
    const timeDifference = targetDate.getTime() - currentDate.getTime();

    // Check if the target date has passed
    if (timeDifference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  }

  // Update the countdown every second
  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    // Clean up the interval on component unmount
    return () => {
      clearInterval(countdownInterval);
    };
  }, []);

  return (
    <div className="w-full h-[80px] max-md:h-max flex justify-center items-center bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 my-8 py-5">
      {timeRemaining.days === 0 &&
      timeRemaining.hours === 0 &&
      timeRemaining.minutes === 0 &&
      timeRemaining.seconds === 0 ? (
        <div>Countdown Expired</div>
      ) : (
        <div className="w-full flex font-monster text-md justify-center  flex-col items-center h-max gap-2">
          <p className="text-xl max-md:text-sm text-center">{`Create your Community and get free Premium Access`}</p>
          <div>
            <span className="p-1 bg-black px-7 rounded-md text-2xl max-md:text-md max-md:px-2">
              {timeRemaining.days}
            </span>{" "}
            days{" "}
            <span className="p-1 bg-black px-7 rounded-md text-2xl max-md:text-md max-md:px-2">
              {timeRemaining.hours}
            </span>{" "}
            hrs{" "}
            <span className="p-1 bg-black px-7 rounded-md text-2xl max-md:text-md max-md:px-2">
              {timeRemaining.minutes}
            </span>{" "}
            min{" "}
            <span className="p-1 bg-black px-7 rounded-md text-2xl max-md:text-md max-md:px-2">
              {timeRemaining.seconds}
            </span>{" "}
            sec
          </div>
        </div>
      )}
    </div>
  );
};

export default CountdownTimer;
