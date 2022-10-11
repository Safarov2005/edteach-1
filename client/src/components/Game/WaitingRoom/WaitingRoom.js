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
    <div className="w-[100%] md:[90%] xl:w-[40%] bg-gray-200 p-4 md:p-8 rounded-2xl">
      <h1 className="text-center text-xl font-semibold uppercase">
        {isLanguageEnglish ? "Waiting room" : "Kutish rejimida"}
      </h1>
      <h2 className="text-center text-lg my-2 font-semibold">
        {isLanguageEnglish
          ? "PIN"
          : "PIN"}
        : <span className="text-xl text-blue-500">{pin}</span>
      </h2>
      <div className="w-full bg-gray-100 h-[300px] md:h-[350px] p-4 text-center text-base font-semibold rounded-2xl">
        <div className="overflow-y-scroll overflow-x-hidden h-full block w-full ">
          <h1>
            {isLanguageEnglish ? "Player List" : "Ishtorkchilar ro`yhati:"}
          </h1>
          <div className="p-0 md:p-5">
            {playerList.length > 0 ? (
              <ol>
                {playerList.map((player, index) => (
                  <li className="flex items-center justify-between bg-gray-200 px-4 py-3 my-2 rounded-lg">
                    <p className="text-lg font-semibold">{index}</p>
                    <h1 className="ml-0 xl:ml-5">{player.userName}</h1>
                    <small>{isLanguageEnglish ? "Student" : "Talaba"}</small>
                  </li>
                ))}
              </ol>
            ) : (
              <h1 className="flex items-center justify-center py-4 text-red-500 font-semibold text-lg">
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
