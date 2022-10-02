const quizQuestions = [
  {
    question: "Which of the following is the correct name of React.js?",
    answers: [
      {
        content: "React",
        isCorrect: false,
      },
      {
        content: "React.js",
        isCorrect: false,
      },
      {
        content: "ReactJS",
        isCorrect: false,
      },
      {
        content: "All of the above",
        isCorrect: true,
      },
    ],
  },
  {
    question: "Which of the following are the advantages of React.js?",
    answers: [
      {
        content:
          "React.js can increase the application's performance with Virtual DOM.",
        isCorrect: false,
      },
      {
        content:
          "React.js is easy to integrate with other frameworks such as Angular, BackboneJS since it is only a view library.",
        isCorrect: false,
      },
      {
        content: "React.js can render both on client and server side.",
        isCorrect: false,
      },
      {
        content: "All of the above",
        isCorrect: true,
      },
    ],
  },

  {
    question: "Which of the following is not a disadvantage of React.js? ",
    answers: [
      {
        content:
          "React.js has only a view layer. We have put your code for Ajax requests, events and so on.",
        isCorrect: false,
      },
      {
        content: "The library of React.js is pretty large.",
        isCorrect: false,
      },
      {
        content: "The JSX in React.js makes code easy to read and write.",
        isCorrect: true,
      },
      {
        content: "The learning curve can be steep in React.js.",
        isCorrect: false,
      },
    ],
  },

  {
    question:
      "What of the following is used in React.js to increase performance?",
    answers: [
      {
        content: "Original DOM",
        isCorrect: false,
      },
      {
        content: "Virtual DOM",
        isCorrect: true,
      },
      {
        content: "Both A and B.",
        isCorrect: false,
      },
      {
        content: "None of the above.",
        isCorrect: false,
      },
    ],
  },

  {
    question:
      "A class is a type of function, but instead of using the keyword function to initiate it, which keyword do we use?",
    answers: [
      {
        content: "Constructor",
        isCorrect: false,
      },
      {
        content: "Class",
        isCorrect: true,
      },
      {
        content: "Object",
        isCorrect: false,
      },
      {
        content: "DataObject",
        isCorrect: false,
      },
    ],
  },
];

export default quizQuestions;
