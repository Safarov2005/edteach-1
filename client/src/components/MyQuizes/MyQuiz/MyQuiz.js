import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./myQuiz.module.css";
import { deleteQuiz } from "../../../actions/quiz";
import { createGame } from "../../../actions/game";
import moment from "moment";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { useHistory } from "react-router-dom";
import { createLeaderboard } from "../../../actions/leaderboard";

function MyQuiz({ quiz }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const isLanguageEnglish = useSelector((state) => state.language.isEnglish);
  const socket = useSelector((state) => state.socket.socket);
  const openQuizPage = (e) => {
    history.push(`/myquizes/${quiz._id}`);
  };

  const addGame = async () => {
    let gameData = {
      quizId: quiz._id,
      isLive: true,
      pin: String(Math.floor(Math.random() * 9000) + 1000),
    };
    const newGame = await dispatch(createGame(gameData, history));
    let leaderboardData = { gameId: newGame._id, playerResultList: [] };

    const newLeaderboard = await dispatch(createLeaderboard(leaderboardData));
    socket.emit("init-game", newGame, newLeaderboard);
  };

  return (
    <div className="md:flex">
      <div className="relative">
        <div className="absolute top-2 left-2">
          <h3 className="text-lg text-gray-700 font-semibold uppercase">
            {quiz.creatorName}
          </h3>
          <h3 className="text-sm text-gray-700 font-semibold uppercase">
            {moment(quiz.dateCreated).fromNow()}
          </h3>
        </div>
        <div
          className="w-full h-[200px] md:w-[250px] bg-no-repeat bg-cover bg-center"
          style={{ backgroundImage: "url('" + quiz.backgroundImage + "')" }}
        ></div>
<<<<<<< HEAD
=======
        <h3 className={styles["quiz-question-number"]}>
          {isLanguageEnglish ? "Questions:" : "Savollar:"}{" "}
          {quiz.numberOfQuestions}
        </h3>
>>>>>>> e7ae719de7fb917260dca152e25d73be965be180
      </div>
      <div className="relative flex justify-between w-full p-4">
        <div className="space-y-2 mb-4">
          <h2 className="text-2xl md:text-4xl font-semibold">{quiz.name}</h2>
          <p className="text-sm  text-gray-700 font-medium">
            {quiz.description}
          </p>
        </div>
        <div className="absolute bottom-2 right-2 md:bottom-4 md:right-4">
          <h4 className={styles["quiz-tags"]}>
            {quiz.tags.map((tag) => `#${tag} `)}
          </h4>
<<<<<<< HEAD
          <div className="flex items-center space-x-3 md:space-x-4">
            <button
              className="text-lg font-semibold text-blue-500"
              onClick={addGame}
            >
              {isLanguageEnglish ? "Start a game" : "Boshlash"}
=======
          <div className={styles["card-buttons"]}>
            <button onClick={addGame}>
              {isLanguageEnglish ? "Start a game" : "O`yinni boshlash"}
>>>>>>> e7ae719de7fb917260dca152e25d73be965be180
            </button>
            <button onClick={openQuizPage}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-yellow-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                />
              </svg>
            </button>
            <button onClick={() => dispatch(deleteQuiz(quiz._id))}>
<<<<<<< HEAD
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-red-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
=======
              <DeleteIcon fontSize="small" />
              {isLanguageEnglish ? "Delete" : "O`chirish"}
>>>>>>> e7ae719de7fb917260dca152e25d73be965be180
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyQuiz;
