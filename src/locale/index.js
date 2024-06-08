import { LANGUAGE } from "../constants/constant";
import { ru } from "./ru";
import { uz } from "./uz";
import { en } from "./en";

export const getLanguage = () => {
  return localStorage.getItem(LANGUAGE);
};

export const getText = (word) => {
  return getLanguage() === "en"
    ? en[word]
    : getLanguage() === "ru"
    ? ru[word]
    : uz[word];
};
