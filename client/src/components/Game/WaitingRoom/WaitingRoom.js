import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import styles from "./waitingRoom.module.css";

function WaitingRoom({ pin, socket }) {
  const [playerList, setPlayerList] = useState([]);
  const isLanguageEnglish = useSelector((state) => state.language.isEnglish);

  useEffect(() => {
    socket.on("player-added", (player) => {
      setPlayerList([...playerList, player]);
    });
  }, [playerList, socket]);

  return (
    <div className={styles["waiting-room"]}>
      <h1 className={styles["title"]}>
        {isLanguageEnglish ? "Waiting room" : "Kutish rejimida"}
      </h1>
      <h2 className={styles["header"]}>
        {isLanguageEnglish
          ? "Show PIN to your Talabas"
          : "Ishtirokchi uchun PIN"}
        : <span className="text-xl text-blue-500">{pin}</span>
      </h2>
      <div className={styles["players-list"]}>
        <div className={styles["leaderboard"]}>
          <h1 className={styles["leaderboard-title"]}>
            {isLanguageEnglish ? "Player List" : "Ishtorkchilar ro`yhati"}
          </h1>
          <div className="overflow-y-scroll overflow-x-hidden scrollbar-hide h-full block w-full bg-gradient-to-r from-green-400 to-purple-500 lg:inline">
            {playerList.length > 0 ? (
              <ol>
                {playerList.map((player) => (
                  <li>
                    <mark>{player.userName}</mark>
                    <small>{isLanguageEnglish ? "Student" : "Talaba"}</small>
                  </li>
                ))}
              </ol>
            ) : (
              <h1 className={styles["leaderboard-title"]}>
                {isLanguageEnglish
                  ? "No players yet"
                  : "Hali ishtorkchilar yo`q"}
              </h1>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WaitingRoom;
