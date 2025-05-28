import { useState, useEffect } from "react";

const DateTime = () => {
  const [dateTime, setDateTime] = useState("");

  useEffect(() => {
    setInterval(() => {
      const now = new Date();
      const formattedDate = now.toLocaleDateString();
      const formattedTime = now.toLocaleTimeString();

      setDateTime(`${formattedDate} - ${formattedTime}`);
    }, 1000);
  }, []);

  return (
    <>
      <h3>{dateTime}</h3>
    </>
  );
};

export default DateTime;
