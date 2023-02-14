import "./App.css";
import React, { useEffect, useState } from "react";

const Loading = () => {
  return <div class="loader"></div>;
};

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 10000);
  }, []);

  return <div className="container">{isLoading && <Loading />}</div>;
}
