import React, { useState } from "react";
import Quiz from "./Quiz/Quiz";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import styles from "./quizes.module.css";
import ChipInput from "material-ui-chip-input";
import {
  AppBar,
  TextField,
  Button,
  Paper,
  CircularProgress,
} from "@material-ui/core";
import useStyles from "./styles";
import { getQuizesBySearch } from "../../actions/quiz";
import Pagination from "../Pagination/Pagination";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Quizes() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const { quizes, isLoading } = useSelector((state) => state.quiz);
  const isLanguageEnglish = useSelector((state) => state.language.isEnglish);

  const query = useQuery();
  const page = query.get("page") || 1;
  const searchQuery = query.get("searchQuery");

  const [search, setSearch] = useState("");
  const [tags, setTags] = useState([]);

  const searchPost = () => {
    if (search.trim() !== "" || tags.length !== 0) {
      console.log(search.trim());
      dispatch(getQuizesBySearch({ search, tags: tags.join(",") }));
      history.push(
        `/quizes/search?searchQuery=${search || "none"}&tags=${tags.join(",")}`
      );
    } else {
      history.push("/quizes");
    }
  };

  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      searchPost();
    }
  };

  const handleAddChip = (tag) => setTags([...tags, tag]);

  const handleDeleteChip = (chipToDelete) =>
    setTags(tags.filter((tag) => tag !== chipToDelete));

  return (
    <div className="my-5 flex flex-col justify-center mx-5">
      <div
        className="px-2 py-5 md:p-5 mx-auto w-full md:max-w-7xl shadow-lg my-10 md:my-16 rounded-xl bg-gray-100 flex flex-col space-y-2 md:space-y-3"
        position="static"
        color="inherit"
      >
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
          <input
            className="rounded-xl w-full  bg-gray-200 outline-none py-4 px-4 duration-200 placeholder-gray-800"
            onKeyDown={handleKeyPress}
            name="search"
            variant="outlined"
            placeholder={
              isLanguageEnglish
                ? "Search quizes by name"
                : "Test nomi bilan qidirish"
            }
            fullWidth
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <button
          onClick={searchPost}
          className="rounded-lg py-3 px-8 font-medium shadow-md text-base md:text-lg duration-300
          active:bg-opacity-80 cursor-pointer bg-[#1a5cff] 
          dark:bg-[#1a5cff] text-white hover:shadow-md"
          variant="contained"
          color="primary"
        >
          {isLanguageEnglish ? "Search" : "Qidirish"}
        </button>
      </div>
      {isLoading ? (
        <div className="flex items-center justify-center my-8">
          <CircularProgress />
        </div>
      ) : (
        quizes.map((quiz) => (
          <div className="mx-auto w-full md:max-w-7xl shadow-lg  rounded-xl bg-gray-100 my-2 md:my-4">
            <Quiz key={quiz._id} quiz={quiz} />
          </div>
        ))
      )}
      {!searchQuery && !tags.length && (
        <div className="flex items-center justify-center mt-6">
          <Pagination page={page} />
        </div>
      )}
    </div>
  );
}

export default Quizes;
