import quizQuestions from "../api/quizQuestions";

function getRandomValue() {
  const value = Math.floor(Math.random() * quizQuestions.length);
  //console.log("PositionsTTT : " + value);
  return value;
}

export const getModifiedValues = async () => {
  //console.log("PositionsTTT : " + getRandomValue());
  const tempArray = [
    quizQuestions[getRandomValue()],
    quizQuestions[getRandomValue()],
  ];
  //console.log("UtiltempArray : " + JSON.stringify(tempArray));
  return tempArray;
};
