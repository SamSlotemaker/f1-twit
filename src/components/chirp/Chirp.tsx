import React, { useRef, useEffect } from "react";
import "./style.scss";
import profileImage from "../../assets/images/profile.png";
import { Icon } from "../../components";

interface iProps {
  data: { id: number; username: string; text: string };
}

const Chirp: React.FC<iProps> = () => {
  const chirpRef = useRef<HTMLElement>(null);

  const handleClickOutside = (event: any) => {
    if (chirpRef.current && !chirpRef.current.contains(event.target)) {
      document.body.classList.remove("chirp-open");
      chirpRef.current.classList.remove("opened-chirp");
    }
  };

  useEffect(() => {
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [chirpRef]);

  const handleClick = (e: any) => {
    if (!chirpRef.current) return;
    document.body.classList.add("chirp-open");
    chirpRef.current.classList.add("opened-chirp");
  };

  return (
    <article className="chirp" onClick={handleClick} ref={chirpRef}>
      <h1>@Redbullfan_1827</h1>
      <img src={profileImage} className="chirp_profile-picture" alt="test" />
      <p className="chirp_text">
        What a great day for Red Bull today, Ford is more than welcome!
      </p>

      <div className=".extra-info"></div>

      <button className="chirp_like-button">
        <Icon name="heart" />
      </button>
    </article>
  );
};

export default Chirp;
