import React, { useState } from "react";

export default function Quiz(props) {
  let main_name = "radio_" + props.name;
  let correct_answer = "correct_" + props.name;

  const [makeDisable, setmakeDisable] = useState(false);
  const answerItems = props.answers.map((item, index) => (
    <div key={index}>
      <input
        type="radio"
        value={item.content}
        // name={main_name}
        onChange={() =>
          props.handleAnswerSelection(
            props.position,
            item.content,
            main_name,
            correct_answer
          )
        }
      />{" "}
      {item.content}
    </div>
  ));
  return (
    <div>
      <div>
        <h3>{props.question}</h3>
      </div>
      <div id={main_name}>{answerItems}</div>
      <div id={correct_answer}></div>
    </div>
  );
}
