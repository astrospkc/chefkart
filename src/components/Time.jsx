import React, { useEffect, useState } from "react";

const Time = () => {
  const locale = "en";
  const [today, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 60 * 1000);
    return () => {
      clearInterval(timer); // Return a funtion to clear the timer so that it will stop being called on unmount
    };
  }, []);

  const day = today.toLocaleDateString(locale, { weekday: "long" });
  const date = `${day}, ${today.getDate()} ${today.toLocaleDateString(locale, {
    month: "long",
  })}\n\n`;
  const hour = today.getHours();
  const wish = `Good ${
    (hour < 12 && "Morning") || (hour < 17 && "Afternoon") || "Evening"
  }, `;
  const time = today.toLocaleTimeString(locale, {
    hour: "numeric",
    hour12: true,
    minute: "numeric",
  });

  return (
    <>
      <div className="bg-white shadow-sm shadow-gray-500 flex flex-row gap-3 p-3 rounded-xl">
        <div>{date}</div>
        <div>{time}</div>
        <div>{wish}</div>
      </div>
    </>
  );
};

export default Time;
