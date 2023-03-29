import React, { useRef, useEffect } from "react";
import { Chirp } from "../../components";
import "./style.scss";

interface iProps {
  chirps: [{ id: number; username: string; text: string }];
}

const ChirpList: React.FC<iProps> = ({ chirps }) => {
  return (
    <section className="chip-list">
      {chirps.map((chirp) => (
        <Chirp key={chirp.id} data={chirp} />
      ))}
    </section>
  );
};

export default ChirpList;
