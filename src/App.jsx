import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import quizQuestions from "./api/quizQuestions";
import data from "./api/data";

import Quiz from "./components/Quiz";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  //--
  const [limit, setLimit] = useState(1);
  const [questionSet, setQuestionSet] = useState([]);
  const [questionsToDisplay, setQuestionsToDisplay] = useState(quizQuestions);

  // const firstTime = () => {
  //   let tempArray = [];
  //   for (let i = 0; i < limit; i++) {
  //     //tempArray = questionSet;
  //     tempArray.push(i);
  //     console.log("Array : " + i);
  //     return tempArray;
  //   }
  // };

  useEffect(() => {
    setQuestionSet((oldArray) => [...oldArray, []]);
    let tempArray = [];
    //tempArray = setQuestionSet;
    for (let i = 0; i <= 3; i++) {
      //console.log("i : " + i);
      tempArray = questionSet;
      let tempRandomValue = generateRandomNumberWithinQuestion(
        quizQuestions.length
      );
      //tempArray = questionSet;
      if (tempArray.includes(tempRandomValue)) {
      } else {
        tempArray.push(
          generateRandomNumberWithinQuestion(quizQuestions.length)
        );
      }
    }

    setQuestionSet((questionSet) => [...questionSet, tempArray]);

    //console.log("Array : " + questionSet);
    //------
    let tempArray2 = [];
    for (let j = 0; j < questionSet.length; j++) {
      let tempValue = quizQuestions[questionSet[j]];
      //console.log("tempValue: " + JSON.stringify(tempValue));
      tempArray2.push(tempValue);
    }
    //console.log("tempArray2: " + tempArray2);
    setQuestionsToDisplay((questionsToDisplay) => [
      ...questionsToDisplay,
      tempArray2,
    ]);
    console.log("final Array: " + JSON.stringify(questionsToDisplay));
    //console.log("questionsToDisplay: " + JSON.stringify(questionsToDisplay));
  }, []); // 👈️ empty dependencies array

  const generateRandomNumberWithinQuestion = (size) => {
    const value = Math.floor(Math.random() * size);
    //console.log("Position : " + value);
    return value;
  };

  const [correctAnswer, setcorrectAnswer] = useState(0);
  const [wrongAnswer, setwrongAnswer] = useState(0);

  const [participant_id, setparticipant_id] = useState(
    Math.floor(Math.random() * 1000000000)
  );
  // let masterObjHolder =  null;

  const handleAnswerSelection = (
    position,
    selectedAnswer,
    main_name,
    correct_answer
  ) => {
    console.log(
      "Position : " +
        position +
        " ________   " +
        "Selected : " +
        selectedAnswer +
        "      name" +
        main_name
    );
    let temp = "";

    for (let i = 0; i < quizQuestions[position].answers.length; i++) {
      if (quizQuestions[position].answers[i].isCorrect) {
        temp = quizQuestions[position].answers[i].content;
        break;
      }
    }
    console.log("Correct Answer is : " + temp);
    let tempBanner = "";
    if (temp === selectedAnswer) {
      setcorrectAnswer(correctAnswer + 1);

      tempBanner = '<p style="color:#228B22">Correct Answer!</p>';
    } else {
      setwrongAnswer(wrongAnswer + 1);
      tempBanner =
        '<span style="color:#FF0000">Wrong Answer! <font style="color:#000000">Correct answer is : </font>  <b style="color:#000000"> ' +
        temp +
        "<b></span>";
    }

    document.getElementById(main_name).style.display = "none";

    // const tempAnswer = <h3 className="">Correct Answer is : </h3>;
    document.getElementById(correct_answer).innerHTML = tempBanner;
  };

  const listItems = questionsToDisplay.map((item, index) => (
    <div>
      <Quiz
        position={index}
        name={index.toString()}
        question={item.question}
        answers={item.answers}
        handleAnswerSelection={handleAnswerSelection}
      />
      <br></br>
    </div>
  ));

  return (
    <div>
      <div
        style={{
          width: "100%",
          alignItems: "right",
          textAlign: "right",
          paddingRight: "50px",
        }}
      >
        <p>
          Particiapnt ID : <b>{participant_id}</b>
        </p>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <p
          style={{
            margin: "20px",
          }}
        >
          Total Questions: <b>{quizQuestions.length}</b>
        </p>
        <p
          style={{
            margin: "20px",
          }}
        >
          <font
            style={{
              color: "#228B22",
            }}
          >
            {" "}
            Correct Answer:{" "}
          </font>{" "}
          <b>{correctAnswer}</b>
        </p>
        <p
          style={{
            margin: "20px",
          }}
        >
          <font
            style={{
              color: "#FF0000",
            }}
          >
            {" "}
            Wrong Answer:{" "}
          </font>
          <b>{wrongAnswer}</b>
        </p>
      </div>
      <div
        style={{
          display: "block",
          alignItems: "center",
          justifyContent: "center",
          marginLeft: "20%",
        }}
      >
        {listItems}
      </div>
    </div>
  );
}

export default App;
