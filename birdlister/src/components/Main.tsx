import { useEffect, useState } from "react";
import BirdLister, { Props } from "./BirdLister";

const Main = () => {
  const [birds, setBirds] = useState<Props>();

  useEffect(() => {
    loadBirdJson();
  });

  const loadBirdJson = async () => {
    fetch("http://localhost:9090/birds").then((res) =>
      res.json().then((data) => setBirds(data))
    );
  };

  return (
    <main>
      <header>
        <h1>British Garden Birds</h1>
      </header>
      <BirdLister items={birds} />
      <footer>
        <h2>ⓒElmstone Systems Limited</h2>
      </footer>
    </main>
  );
};

export default Main;
