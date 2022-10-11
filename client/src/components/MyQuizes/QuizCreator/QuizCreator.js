import React, { useState, useEffect } from "react";
import styles from "./quizCreator.module.css";
import QuestionListItem from "./QuestionListItem/QuestionListItem";
import AnswerInput from "./AnswerInput/AnswerInput";
import triangle from "../../assets/triangle.svg";
import diamond from "../../assets/diamond.svg";
import circle from "../../assets/circle.svg";
import square from "../../assets/square.svg";
import questionType from "../../assets/questionType.svg";
import timer from "../../assets/timer.svg";
import gamePoints from "../../assets/gamePoints.svg";
import answerOptions from "../../assets/answerOptions.svg";
import { useDispatch, useSelector } from "react-redux";
import { updateQuiz, getQuiz } from "../../actions/quiz";
import FileBase from "react-file-base64";
import { useParams, useHistory } from "react-router-dom";
import { FaCloudUploadAlt } from "react-icons/fa";
function QuizCreator() {
  const user = JSON.parse(localStorage.getItem("profile"));
  const isLanguageEnglish = useSelector((state) => state.language.isEnglish);

  const history = useHistory();
  const dispatch = useDispatch();
  const { id } = useParams();

  const [quizData, setQuizData] = useState({
    name: "",
    creatorName: `${user?.result.firstName} ${user?.result.lastName}`,
    backgroundImage: "",
    description: "",
    pointsPerQuestion: 1,
    numberOfQuestions: 0,
    isPublic: true,
    tags: [],
    questionList: [],
  });

  const [questionData, setQuestionData] = useState({
    questionType: "Quiz",
    pointType: "Standard",
    answerTime: 5,
    backgroundImage: "",
    question: "",
    answerList: [
      { name: "a", body: "", isCorrect: false },
      { name: "b", body: "", isCorrect: false },
      { name: "c", body: "", isCorrect: false },
      { name: "d", body: "", isCorrect: false },
    ],
    questionIndex: 1,
  });

  useEffect(() => {
    dispatch(getQuiz(id));
  }, [id]);

  const { quiz } = useSelector((state) => state.quiz);

  useEffect(() => {
    if (quiz) {
      setQuizData(quiz);
    }
  }, [quiz]);

  const [isQuizOptionsVisible, setIsQuizOptionsVisible] = useState(false);
  const [isQuizPublic, setIsQuizPublic] = useState(true);
  const [isQuestionDataSave, setIsQuestionDataSave] = useState(false);
  const [questionImage, setQuestionImage] = useState("");
  const [quizImage, setQuizImage] = useState("");

  const showQuizOptions = () => {
    setIsQuizOptionsVisible(
      (prevIsQuizOptionsVisible) => !prevIsQuizOptionsVisible
    );
  };

  const setCorrectAnswer = (index) => {
    setQuestionData((prevState) => ({
      ...prevState,
      answerList: [
        ...prevState.answerList.slice(0, index),
        {
          name: prevState.answerList[index].name,
          body: prevState.answerList[index].body,
          isCorrect: !prevState.answerList[index].isCorrect,
        },
        ...prevState.answerList.slice(index + 1, prevState.answerList.length),
      ],
    }));

    questionData.answerList[index].isCorrect
      ? setCorrectAnswerCount((prevState) => prevState - 1)
      : setCorrectAnswerCount((prevState) => prevState + 1);
  };

  const handleQuizSubmit = (e) => {
    dispatch(updateQuiz(quiz._id, quizData));
    history.push(`/myquizes`);
  };

  const handleQuizChange = (e) => {
    setQuizData({ ...quizData, [e.target.name]: e.target.value });
  };

  const updateAnswer = (name, body, index) => {
    setQuestionData((prevState) => ({
      ...prevState,
      answerList: [
        ...prevState.answerList.slice(0, index),
        {
          name: name,
          body: body,
          isCorrect: prevState.answerList[index].isCorrect,
        },
        ...prevState.answerList.slice(index + 1, prevState.answerList.length),
      ],
    }));
  };

  const validateAnswerFields = () => {
    return questionData.answerList.every((answer) => answer.body !== "");
  };

  const validateCorrectAnswer = () => {
    return questionData.answerList.some((answer) => answer.isCorrect === true);
  };

  const handleQuestionSubmit = () => {
    if (questionData.question === "") {
      alert("Iltimos, savolingizni kiriting");
    } else if (!validateAnswerFields()) {
      alert("Wpisz treść odpowiedzi");
    } else if (!validateCorrectAnswer()) {
      alert("Wybierz poprawną odpowiedź");
    } else {
      setIsQuestionDataSave(true);
      // if true it means question already exist and is only updated
      if (
        quizData.questionList.filter(
          (question) => question.questionIndex === questionData.questionIndex
        )
      ) {
        //update list of questions in quizData
        setQuizData((prevState) => ({
          ...prevState,
          questionList: [
            ...prevState.questionList.slice(0, questionData.questionIndex - 1),
            questionData,
            ...prevState.questionList.slice(
              questionData.questionIndex,
              prevState.questionList.length
            ),
          ],
        }));
      } else {
        //question don't exist - add new one
        setQuizData({
          ...quizData,
          questionList: [...quizData.questionList, questionData],
        });
      }
    }
  };

  const handleQuestionRemove = () => {
    let index = questionData.questionIndex;
    setQuizData((prevState) => ({
      ...prevState,
      questionList: [
        ...prevState.questionList.slice(0, index - 1),
        ...prevState.questionList.slice(index, prevState.questionList.length),
      ],
    }));
    //update indexes
    quizData.questionList.forEach((question) => {
      if (question.questionIndex > index) {
        question.questionIndex -= 1;
      }
    });
    //display previous question or new first one if first was deleted
    if (quizData.questionList.length > 1 && index > 1) {
      showQuestion(index - 1);
    } else if (quizData.questionList.length > 1 && index === 1) {
      showQuestion(1);
    } else {
      clear();
    }
    setCorrectAnswerCount(0);
  };

  const clear = () => {
    setQuestionData({
      questionType: "Quiz",
      pointType: "Standard",
      answerTime: 5,
      backgroundImage: "",
      question: "",
      answerList: [
        { name: "a", body: "", isCorrect: false },
        { name: "b", body: "", isCorrect: false },
        { name: "c", body: "", isCorrect: false },
        { name: "d", body: "", isCorrect: false },
      ],
      questionIndex: quizData.questionList.length + 1,
    });
    setQuestionImage("");
  };

  const addNewQuestion = () => {
    setIsQuestionDataSave(false);
    clear();
    setIsQuestionTrueFalse(false);
    setCorrectAnswerCount(0);
  };

  const handleQuestionChange = (e) => {
    setQuestionData({ ...questionData, [e.target.name]: e.target.value });
  };

  const showQuestion = (index) => {
    var question = quizData.questionList.find(
      (question) => question.questionIndex === index
    );
    setQuestionData(question);
    setQuestionImage(question.backgroundImage);
    question.questionType === "True/False"
      ? setIsQuestionTrueFalse(true)
      : setIsQuestionTrueFalse(false);
  };

  const [correctAnswerCount, setCorrectAnswerCount] = useState(0);
  const [maxCorrectAnswerCount, setMaxCorrectAnswerCount] = useState(1);

  const changeMaxCorrectAnswerCount = (e) => {
    setMaxCorrectAnswerCount(e.target.value);
    questionData.answerList.forEach((answer) => (answer.isCorrect = false));
    setCorrectAnswerCount(0);
  };

  const [isQuestionTrueFalse, setIsQuestionTrueFalse] = useState(false);
  const changeQuestionType = () => {
    setIsQuestionTrueFalse((prevState) => !prevState);
    if (!isQuestionTrueFalse) {
      questionData.answerList.splice(2, 2);
    } else {
      questionData.answerList.push({ name: "c", body: "", isCorrect: false });
      questionData.answerList.push({ name: "d", body: "", isCorrect: false });
    }
    questionData.answerList[0].body = "True";
    questionData.answerList[1].body = "False";
    setMaxCorrectAnswerCount(1);
    questionData.answerList.forEach((answer) => (answer.isCorrect = false));
    setCorrectAnswerCount(0);
  };

  if (user === null) {
    return <h1>Kirish się na konto nauczyciela, aby stworzyć quiz</h1>;
  } else if (user.result.userType !== "Ustoz") {
    return <h1>Quizy mogą tworzyć jedynie nauczyciele</h1>;
  }

  return (
    <section className={styles.section}>
      <div className={styles["question-list"]}>
        <div className={styles["quiz-info"]}>
          <h1>
            {quizData.name.length > 0
              ? quizData.name.length > 8
                ? quizData.name.substring(0, 8) + "..."
                : quizData.name
              : isLanguageEnglish
              ? "Set quiz name"
              : "Savol nomini o`zgartiring..."}
          </h1>
          <button
            className="w-fit rounded-lg py-2 lg:block hidden  px-3  cursor-pointer active:scale-95
            shadow-md text-sm duration-300 border bg-[#1a5cff] active:bg-opacity-80
            ease-in-out md:text-sm text-white"
            onClick={showQuizOptions}
          >
            {isLanguageEnglish ? "Settings" : "Sozlamalar"}
          </button>
        </div>
        <div className={styles["question-list-container"]}>
          {quizData.questionList.length > 0 &&
            quizData.questionList.map((question) => (
              <QuestionListItem
                onClick={() => showQuestion(question.questionIndex)}
                key={question.questionIndex}
                number={question.questionIndex}
                type={question.questionType}
                name={question.question}
                time={question.answerTime}
                image={question.backgroundImage}
              />
            ))}

          <button
            onClick={() => {
              isQuestionDataSave
                ? addNewQuestion()
                : alert(
                    isLanguageEnglish
                      ? "Save changes in question data first"
                      : "O`zgartirilgan savol ma`lumotlarini saqlang"
                  );
            }}
            className="w-full rounded-lg py-2  px-3  cursor-pointer active:scale-95
            shadow-md text-sm duration-300 border bg-[#1a5cff] active:bg-opacity-80
            ease-in-out md:text-sm text-white"
          >
            {isLanguageEnglish ? "Add question" : "Savol qo`shish"}
          </button>
        </div>
      </div>
      <div className={styles["question-creator"]}>
        <input
          type="text"
          name="question"
          value={questionData.question}
          onChange={handleQuestionChange}
          placeholder={
            isLanguageEnglish
              ? "Write your question here"
              : "Savolingizni yozing"
          }
          className={styles["question-name"]}
        />
        <div className={styles["image-container"]}>
          <h3>
            {isLanguageEnglish ? "Find and upload an image" : "Rasmni yuklang"}
          </h3>
          <div>
            <FileBase
              type="file"
              multiple={false}
              onDone={({ base64 }) => {
                setQuestionData({ ...questionData, backgroundImage: base64 });
                setQuestionImage(base64);
              }}
            />
          </div>
          {questionImage && <img src={questionImage} alt="" />}
        </div>
        <div className={styles["answers-container"]}>
          <div className={styles["answer-field"]}>
            <AnswerInput
              value={questionData.answerList[0].body}
              name={"a"}
              onChange={(e) => {
                isQuestionTrueFalse
                  ? updateAnswer(e.target.name, "True", 0)
                  : updateAnswer(e.target.name, e.target.value, 0);
              }}
              onClick={() => {
                correctAnswerCount < maxCorrectAnswerCount ||
                questionData.answerList[0].isCorrect
                  ? setCorrectAnswer(0)
                  : alert(
                      isLanguageEnglish
                        ? "You already choose the correct answer"
                        : "Allaqachon to`g`ri javob tanlangan"
                    );
              }}
              isAnswerCorrect={questionData.answerList[0].isCorrect}
              svg={triangle}
            />
          </div>
          <div className={styles["answer-field"]}>
            <AnswerInput
              value={questionData.answerList[1].body}
              name={"b"}
              onChange={(e) => {
                isQuestionTrueFalse
                  ? updateAnswer(e.target.name, "False", 1)
                  : updateAnswer(e.target.name, e.target.value, 1);
              }}
              onClick={() => {
                correctAnswerCount < maxCorrectAnswerCount ||
                questionData.answerList[1].isCorrect
                  ? setCorrectAnswer(1)
                  : alert(
                      isLanguageEnglish
                        ? "You already choose the correct answer"
                        : "Siz allaqachon to`g`ri javob tanladingiz"
                    );
              }}
              isAnswerCorrect={questionData.answerList[1].isCorrect}
              svg={diamond}
            />
          </div>
          {!isQuestionTrueFalse && (
            <>
              <div className={styles["answer-field"]}>
                <AnswerInput
                  value={questionData.answerList[2].body}
                  name={"c"}
                  onChange={(e) =>
                    updateAnswer(e.target.name, e.target.value, 2)
                  }
                  onClick={() => {
                    correctAnswerCount < maxCorrectAnswerCount ||
                    questionData.answerList[2].isCorrect
                      ? setCorrectAnswer(2)
                      : alert(
                          isLanguageEnglish
                            ? "You already choose the correct answer"
                            : "Siz allaqachon to`g`ri javob tanladingiz! To`g`ri javobni o`zgartirish uchun joriy to`gri javobni olib tashang!"
                        );
                  }}
                  isAnswerCorrect={questionData.answerList[2].isCorrect}
                  svg={circle}
                />
              </div>
              <div className={styles["answer-field"]}>
                <AnswerInput
                  value={questionData.answerList[3].body}
                  name={"d"}
                  onChange={(e) =>
                    updateAnswer(e.target.name, e.target.value, 3)
                  }
                  onClick={() => {
                    correctAnswerCount < maxCorrectAnswerCount ||
                    questionData.answerList[3].isCorrect
                      ? setCorrectAnswer(3)
                      : alert(
                          isLanguageEnglish
                            ? "You already choose the correct answer"
                            : "Siz allaqachon to`g`ri javob tanladingiz"
                        );
                  }}
                  isAnswerCorrect={questionData.answerList[3].isCorrect}
                  svg={square}
                />
              </div>
            </>
          )}
        </div>
      </div>
      {/* sidebar 3 box */}
      <div className={styles.options}>
        <button
          className="w-fit lg:hidden block ml-auto mt-[10px] mr-[10px]  rounded-lg py-2  px-3  cursor-pointer active:scale-95
            shadow-md text-sm duration-300 border bg-[#1a5cff] active:bg-opacity-80
            ease-in-out md:text-sm text-white"
          onClick={showQuizOptions}
        >
          {isLanguageEnglish ? "Settings" : "Sozlamalar"}
        </button>
        <div
          style={{ display: isQuizOptionsVisible ? "block" : "none" }}
          className={styles["question-options"]}
        >
          <h1 className="text-[17px]">Quiz</h1>
          <div className={styles["option-label"]}>
            <label className="text-[17px]">
              {isLanguageEnglish ? "Title" : "Bosh sahifa"}
            </label>
          </div>
          <input
            value={quizData.name}
            className="w-full outline-none py-[2px] pl-[5px] my-[7px] text-[black] text-[16px] border-[1px] border-[solid] border-[gray]"
            type="text"
            name="name"
            onChange={handleQuizChange}
          />
          <div className={styles["option-label"]}>
            <label className="text-[17px]">
              {isLanguageEnglish ? "Description" : "Izoh"}
            </label>
          </div>
          <input
            value={quizData.description}
            className="w-full outline-none py-[2px] pl-[5px] my-[7px] text-[black] text-[16px] border-[1px] border-[solid] border-[gray]"
            type="text"
            name="description"
            onChange={handleQuizChange}
          />
          <div className={styles["option-label"]}>
            <label className="text-[17px]">
              {isLanguageEnglish ? "Points per question" : "Har bir savol bali"}
            </label>
          </div>
          <input
            type="number"
            className="w-full outline-none py-[2px] pl-[5px] my-[7px] text-[black] text-[16px] border-[1px] border-[solid] border-[gray]"
            min={1}
            value={quizData.pointsPerQuestion}
            name="pointsPerQuestion"
            onChange={handleQuizChange}
          />
          <div className={styles["option-label"]}>
            <label className="text-[17px]">
              {isLanguageEnglish ? "Access" : "Kirish"}
            </label>
          </div>
          <div className="flex flex-wrap justify-between">
            <button
              onClick={() => {
                setIsQuizPublic(true);
                setQuizData({ ...quizData, isPublic: true });
              }}
              className="w-[45%] rounded-lg py-2 my-[7px]  px-3  cursor-pointer active:scale-95
              shadow-md text-sm duration-300 border-[1px] border-[solid] border-[gray] bg-[#1a5cff] active:bg-opacity-80
              ease-in-out md:text-sm text-white"
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
              className="w-[45%] rounded-lg py-2  px-3 my-[7px]  cursor-pointer active:scale-95
              shadow-md text-sm duration-300 border-[1px] border-[solid] border-[gray] bg-[#1a5cff] active:bg-opacity-80
              ease-in-out md:text-sm text-white"
              style={{
                backgroundColor: isQuizPublic ? "inherit" : "rgb(19, 104, 206)",
                color: isQuizPublic ? "rgb(110, 110, 110)" : "white",
              }}
            >
              {isLanguageEnglish ? "Private" : "Shaxsiy"}
            </button>
          </div>
          <div className={styles["option-label"]}>
            <label className="text-[17px]">
              {isLanguageEnglish ? "Background Image" : "Orqa fon rasmi"}
            </label>
          </div>
          <div>
            <FileBase
              type="file"
              value="komil"
              multiple={false}
              onDone={({ base64 }) => {
                setQuizData({ ...quizData, backgroundImage: base64 });
                setQuizImage(base64);
              }}
            />
          </div>
          {quizImage && (
            <img className={styles["quiz-image"]} src={quizImage} alt="" />
          )}
          <div className={styles["option-label"]}>
            <label className="text-[17px]">
              {isLanguageEnglish
                ? "Tags (comma separated)"
                : "Teglar (vergul bilan ajratilgan)"}
            </label>
          </div>
          <input
            type="text"
            className="w-full outline-none py-[2px] pl-[5px] my-[7px] text-[black] text-[16px] border-[1px] border-[solid] border-[gray]"
            value={quizData.tags}
            name="tags"
            onChange={(e) =>
              setQuizData({ ...quizData, tags: e.target.value.split(",") })
            }
          />
          <div>
            <button
              className="w-full rounded-lg py-2  px-3 border-[1px] border-[solid] border-[gray]  cursor-pointer active:scale-95
              shadow-md text-sm duration-300  bg-[white] active:bg-opacity-80
              ease-in-out md:text-sm text-[black] mt-[7px] hover:bg-[rgb(19,_104,_206)] hover:text-[white]"
              onClick={handleQuizSubmit}
            >
              {isLanguageEnglish ? "Submit" : "Jo`natmoq"}
            </button>
          </div>
        </div>

        <div
          style={{ display: isQuizOptionsVisible ? "none" : "block" }}
          className={styles["question-options"]}
        >
          <div className={styles.option}>
            <div className="flex items-center w-full gap-[10px]">
              <img className="max-w-[32px]" src={questionType} alt="" />
              <label className="text-[16px]">
                {isLanguageEnglish ? "Question type" : "Savol turi"}
              </label>
            </div>
            <select
              onChange={(e) => {
                handleQuestionChange(e);
                changeQuestionType();
              }}
              name="questionType"
              value={questionData.questionType}
            >
              <option defaultValue disabled>
                {isLanguageEnglish
                  ? "Select question type"
                  : "Savol turini tanlang"}
              </option>
              <option value="Quiz">Quiz</option>
              <option value="True/False">
                {isLanguageEnglish ? "True/False" : "Rost/Yolg`on"}
              </option>
            </select>
          </div>
          <div className={styles.option}>
            <div className="flex items-center w-full gap-[10px]">
              <img className="max-w-[32px]" src={timer} alt="" />
              <label className="text-[16px]">
                {isLanguageEnglish ? "Time limit" : "Vaqt chegarasi"}
              </label>
            </div>
            <select
              onChange={handleQuestionChange}
              name="answerTime"
              value={questionData.answerTime}
            >
              <option defaultValue disabled>
                {isLanguageEnglish
                  ? "Set time limit"
                  : "Vaqt chegarasini belgilang"}
              </option>
              <option value={5}>
                5 {isLanguageEnglish ? "seconds" : "soniya"}
              </option>
              <option value={10}>
                10 {isLanguageEnglish ? "seconds" : "soniya"}
              </option>
              <option value={20}>
                20 {isLanguageEnglish ? "seconds" : "soniya"}
              </option>
              <option value={30}>
                30 {isLanguageEnglish ? "seconds" : "soniya"}
              </option>
              <option value={60}>
                1 {isLanguageEnglish ? "minute" : "daqiqa"}
              </option>
              <option value={90}>
                1,5 {isLanguageEnglish ? "minute" : "daqiqa"}
              </option>
            </select>
          </div>
          <div className={styles.option}>
            <div className="flex items-center w-full gap-[10px]">
              <img className="max-w-[32px]" src={gamePoints} alt="" />
              <label className="text-[16px]">
                {isLanguageEnglish ? "Points" : "Ball"}
              </label>
            </div>
            <select
              onChange={handleQuestionChange}
              name="pointType"
              value={questionData.pointType}
            >
              <option defaultValue disabled>
                {isLanguageEnglish
                  ? "Set points type"
                  : "Ball turini belgilang"}
              </option>
              <option value="Standard">Standard</option>
              <option value="Double">
                {isLanguageEnglish ? "Double" : "Ikki martalik"}
              </option>
              <option value="BasedOnTime">
                {isLanguageEnglish ? "Based on Time" : "Vaqtga asoslangan"}
              </option>
            </select>
          </div>
          <div className={styles.option}>
            <select onChange={changeMaxCorrectAnswerCount}>
              <option defaultValue disabled value="1">
                {isLanguageEnglish
                  ? "Set answer options"
                  : "Javob variantlarini belgilang"}
              </option>
              <option value="1">
                {isLanguageEnglish ? "Single choice" : "Yagona tanlov"}
              </option>
              <option value="4">
                {isLanguageEnglish ? "Multiple choice" : "Ko'p tanlov"}
              </option>
            </select>
          </div>
          <div className="md:flex-none md:flex-wrap sm:flex items-center justify-between">
            <button
              onClick={handleQuestionSubmit}
              className="md:w-full sm:w-[45%] w-full rounded-lg py-2  px-3  cursor-pointer active:scale-95
              shadow-md text-sm duration-300 border bg-[#1a5cff] active:bg-opacity-80
              ease-in-out md:text-sm text-white"
            >
              {isLanguageEnglish ? "Save changes" : "O`zgarishlarni saqlang"}
            </button>
            <button
              onClick={handleQuestionRemove}
              className="md:w-full sm:w-[45%] w-full md:mt-3 sm:mt-0 mt-3 rounded-lg py-2  px-3  cursor-pointer active:scale-95
              shadow-md text-sm duration-300 border bg-[#dc3545] active:bg-opacity-80
              ease-in-out md:text-sm text-white"
            >
              {isLanguageEnglish ? "Delete" : "O`chirmoq"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default QuizCreator;
