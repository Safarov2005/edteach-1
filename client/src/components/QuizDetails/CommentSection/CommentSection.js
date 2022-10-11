import React, { useState, useRef } from "react";
import { Typography, TextField, Button } from "@material-ui/core/";
import { useDispatch, useSelector } from "react-redux";

import { commentQuiz } from "../../../actions/quiz";
import useStyles from "./styles";

const CommentSection = ({ quiz }) => {
  const user = JSON.parse(localStorage.getItem("profile"));
  const [comment, setComment] = useState("");
  const dispatch = useDispatch();
  const [comments, setComments] = useState(quiz?.comments);
  const classes = useStyles();
  const commentsRef = useRef();
  const isLanguageEnglish = useSelector((state) => state.language.isEnglish);

  const handleComment = async () => {
    const newComments = await dispatch(
      commentQuiz(`${user?.result?.userName}: ${comment}`, quiz._id)
    );

    setComment("");
    setComments(newComments);

    commentsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <div className="">
        {user?.result?.userName && (
          <div className="mt-4">
            <h1 className="text-lg font-medium">{comments.length} ta izoh</h1>
            <div className="flex items-center my-2">
              <input
                fullWidth
                className="rounded-xl w-full  bg-gray-200 outline-none py-3 px-4 duration-200 placeholder-gray-800"
                placeholder={isLanguageEnglish ? "Comment" : "Komment yozing"}
                multiline
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
              <button
                className="rounded-lg py-2 px-8 ml-2 font-medium shadow-md text-base md:text-lg duration-300
              active:bg-opacity-80 cursor-pointer bg-[#1a5cff] 
              dark:bg-[#1a5cff] text-white hover:shadow-md"
                fullWidth
                disabled={!comment.length}
                onClick={handleComment}
              >
                {isLanguageEnglish ? "Comment" : "Izoh"}
              </button>
            </div>
          </div>
        )}
        <div className="overflow-y-scroll h-[150px] bg-gray-200 rounded-2xl p-4">
          <div>
            {comments?.map((comment, index) => (
              <div className="flex items-center">
                <Typography key={index} gutterBottom variant="subtitle1">
                  <strong>{comment.split(": ")[0]}</strong>
                  {comment.split(":")[1]}
                </Typography>
              </div>
            ))}
            <div ref={commentsRef} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentSection;
