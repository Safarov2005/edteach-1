import React, { useEffect, useState } from "react";
import MyQuiz from "./MyQuiz/MyQuiz";
import { useDispatch, useSelector } from "react-redux";
import { getUstozQuizes, createQuiz } from "../../actions/quiz";
import styles from "./myQuizes.module.css";
import { useHistory } from "react-router-dom";

function MyQuizes() {
  const user = JSON.parse(localStorage.getItem("profile"));
  const dispatch = useDispatch();
  const history = useHistory();
  const isLanguageEnglish = useSelector((state) => state.language.isEnglish);
  const [quizData, setQuizData] = useState({
    name: "",
    creatorName: `${user?.result.firstName} ${user?.result.lastName}`,
    backgroundImage: "",
    description: "",
    pointsPerQuestion: 1,
    isPublic: true,
    tags: [],
    questionList: [],
  });

  const [isQuizPublic, setIsQuizPublic] = useState(true);

  useEffect(() => {
    dispatch(getUstozQuizes(user.result._id));
  }, [dispatch]);

  const { quizes } = useSelector((state) => state.quiz);

  const handleQuizSubmit = () => {
    dispatch(createQuiz(quizData, history));
  };

  const handleQuizChange = (e) => {
    setQuizData({ ...quizData, [e.target.name]: e.target.value });
  };

  return (
    <div className="container mx-auto px-5">
      <div className="px-2 py-5 md:p-5 mx-auto w-full md:max-w-7xl shadow-lg my-10 md:my-16 rounded-xl bg-gray-100">
        <h2 className="text-xl font-semibold uppercase mx-1 md:mx-3">
          {isLanguageEnglish ? "Create new quiz" : "Test yaratish"}
        </h2>
        <div className="">
          <div className={styles["option-label"]}>
            <label className="font-semibold">
              {isLanguageEnglish ? "Title" : "Sarlovha"}
            </label>
          </div>
          <input
            className="rounded-xl w-full  bg-gray-200 outline-none py-4 px-4 text-sm focus:px-6 duration-200 placeholder-gray-800"
            value={quizData.name}
            type="text"
            name="name"
            onChange={handleQuizChange}
            placeholder={isLanguageEnglish ? "Example:" : "Misol: Ona tili"}
          />
          <div className={styles["option-label"]}>
            <label className="font-semibold">
              {isLanguageEnglish ? "Description" : "Qo`shimcha tag"}
            </label>
          </div>
          <input
            className="rounded-xl w-full bg-gray-200 outline-none py-4 px-4 text-sm focus:px-6 duration-200 placeholder-gray-800"
            value={quizData.description}
            type="text"
            name="description"
            onChange={handleQuizChange}
            placeholder={
              isLanguageEnglish
                ? "Example:"
                : "Misol: Hozirgi zamon mavzusiga oid"
            }
          />
          <div className="mx-2 my-3 space-x-2">
            <button
              onClick={() => {
                setIsQuizPublic(true);
                setQuizData({ ...quizData, isPublic: true });
              }}
              className="bg-blue-500 bg-opacity-30 w-fit rounded-lg py-3 px-8 cursor-pointer active:scale-95
              shadow-md text-sm duration-300 ease-in-out hover:bg-blue-500 hover:bg-opacity-30
              md:text-sm text-[#1a5cff]"
              style={{
                backgroundColor: isQuizPublic ? "rgb(19, 104, 206)" : "inherit",
                color: isQuizPublic ? "white" : "rgb(110, 110, 110)",
              }}
            >
              {isLanguageEnglish ? "Public" : "Ommaviy"}
            </button>
            <button
              onClick={() => {
                setIsQuizPublic(false);
                setQuizData({ ...quizData, isPublic: false });
              }}
              className="w-fit rounded-lg py-3 px-8 cursor-pointer active:scale-95
              shadow-md text-sm duration-300 ease-in-out hover:bg-blue-500 hover:bg-opacity-30
              md:text-sm text-[#1a5cff] bg-[#1a5cff] bg-opacity-30"
              style={{
                backgroundColor: isQuizPublic ? "inherit" : "rgb(19, 104, 206)",
                color: isQuizPublic ? "rgb(110, 110, 110)" : "white",
              }}
            >
              {isLanguageEnglish ? "Private" : "Shaxsiy"}
            </button>
          </div>
          <button
            onClick={handleQuizSubmit}
            className="w-fit rounded-lg py-3 px-8 mx-2 cursor-pointer active:scale-95
            shadow-md text-sm duration-300 border bg-[#1a5cff] active:bg-opacity-80
            ease-in-out md:text-sm text-white"
          >
            {isLanguageEnglish ? "Create new quiz" : "Testni yaratiash"}
          </button>
        </div>
      </div>
      <div className="mx-auto w-full">
        <h1 className="text-xl md:text-2xl lg:text-3xl text-center font-semibold uppercase my-10">
          {isLanguageEnglish
            ? "We offer you the following:"
            : "Siz yaratgan savollar"}
        </h1>
        {quizes.map((quiz) => (
          <div className="mx-auto w-full md:max-w-7xl my-10 md:my-16 rounded-xl bg-gray-100">
            <MyQuiz key={quiz._id} quiz={quiz} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyQuizes;
