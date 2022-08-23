import { useEffect, useState } from "react";
import BirdLister, { BirdProps } from "./BirdLister";

const Main = () => {
  const loadBirdJson = async () => {
    fetch("http://localhost:9090/birds")
      .then((res) => res.json())
      .then((birds) => setBirds(birds));
  };
  const [birds, setBirds] = useState<BirdProps[]>([]);
  useEffect(() => {
    loadBirdJson();
  }, []);

  return (
    <main>
      <header>
        <h1>British Garden Birds</h1>
      </header>
      <BirdLister birds={birds} />
      <footer>
        <h2>ⓒElmstone Systems Limited</h2>
      </footer>
    </main>
  );
};

export default Main;
