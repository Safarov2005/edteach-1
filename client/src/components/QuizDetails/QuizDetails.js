import React, { useEffect } from "react";
import {
  Paper,
  Typography,
  CircularProgress,
  Divider,
} from "@material-ui/core/";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { useParams } from "react-router-dom";
import Quiz from "../Quizes/Quiz/Quiz";
import Question from "./Question/Question";
import CommentSection from "./CommentSection/CommentSection";
import { getQuiz, getQuizesBySearch } from "../../actions/quiz";
import useStyles from "./styles";

const Post = () => {
  const { quiz, quizes, isLoading } = useSelector((state) => state.quiz);
  const isLanguageEnglish = useSelector((state) => state.language.isEnglish);
  const dispatch = useDispatch();
  const classes = useStyles();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getQuiz(id));
  }, [id]);

  useEffect(() => {
    if (quiz) {
      dispatch(
        getQuizesBySearch({ search: "none", tags: quiz?.tags.join(",") })
      );
    }
  }, [quiz]);

  if (!quiz) return null;

  if (isLoading) {
    return (
      <div className="h-[90vh] flex items-center justify-center">
        <CircularProgress size="4em" />
      </div>
    );
  }

  const recommendedQuizes = quizes.filter(({ _id }) => _id !== quiz._id);

  return (
    <div className="mx-auto w-full md:max-w-7xl">
      <div className="px-2 py-5 md:p-5 my-10 mx-4 md:mx-0 md:my-16 rounded-xl bg-gray-100 flex flex-col space-y-2 md:space-y-3">
        <div className="flex items-center">
          <div className="w-32 h-full">
            <img className="" src={quiz.backgroundImage} alt="" />
          </div>
          <div className="ml-4">
            <h6 className="text-xl font-semibold">
              {isLanguageEnglish ? "Created by:" : "Yaratuvchi: "}
              {quiz.creatorName}
            </h6>
            <h1 className="text-lg font-semibold">{quiz.name}</h1>
            <p className="">{quiz.description}</p>
            <Typography variant="body1">
              {moment(quiz.dateCreated).fromNow()}
            </Typography>
          </div>
        </div>
        <CommentSection quiz={quiz} />
      </div>
      {quiz.questionList.length > 0 && (
        <div className=" mx-auto w-full md:max-w-7xl my-10 md:my-16">
          <Typography gutterBottom variant="h5">
            {isLanguageEnglish ? "Question list:" : "Testlar ro`yhati:"}
          </Typography>
          <Divider />
          {quiz.questionList.map((question) => (
            <Question key={question._id} question={question} />
          ))}
        </div>
      )}
      {recommendedQuizes.length > 0 && (
        <div>
          <Typography gutterBottom variant="h5">
            {isLanguageEnglish
              ? "You might also like:"
              : "Buni ham yoqtirishingiz mumkin:"}
          </Typography>
          <Divider />
          {recommendedQuizes.map((quiz) => (
            <Quiz key={quiz._id} quiz={quiz} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Post;
