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

  {
    question:
      "Which of the following keyword is used to create a class inheritance?",
    answers: [
      {
        content: "Create",
        isCorrect: false,
      },
      {
        content: "Inherits",
        isCorrect: false,
      },
      {
        content: "Extends",
        isCorrect: true,
      },
      {
        content: "This",
        isCorrect: false,
      },
    ],
  },

  {
    question: "What is the default port where webpack-server runs?",
    answers: [
      {
        content: "3000",
        isCorrect: false,
      },
      {
        content: "8080",
        isCorrect: true,
      },
      {
        content: "3030",
        isCorrect: false,
      },
      {
        content: "6060",
        isCorrect: false,
      },
    ],
  },

  {
    question:
      "How many numbers of elements a valid react component can return?",
    answers: [
      {
        content: "1",
        isCorrect: true,
      },
      {
        content: "2",
        isCorrect: false,
      },
      {
        content: "4",
        isCorrect: false,
      },
      {
        content: "5",
        isCorrect: false,
      },
    ],
  },

  {
    question:
      "What is the declarative way to render a dynamic list of components based on values in an array?",
    answers: [
      {
        content: "Using the reduce array method",
        isCorrect: false,
      },
      {
        content: "Using the <Each /> component",
        isCorrect: false,
      },
      {
        content: "Using the Array.map() method",
        isCorrect: true,
      },
      {
        content: "With a for/while loop",
        isCorrect: false,
      },
    ],
  },
  {
    question: "How many ways of defining your variables in ES6?",
    answers: [
      {
        content: "1",
        isCorrect: false,
      },
      {
        content: "3",
        isCorrect: true,
      },
      {
        content: "4",
        isCorrect: false,
      },
      {
        content: "5",
        isCorrect: false,
      },
    ],
  },
  {
    question: "What is a state in React?",
    answers: [
      {
        content: "A permanent storage.",
        isCorrect: false,
      },
      {
        content: "Internal storage of the component.",
        isCorrect: true,
      },
      {
        content: "External storage of the component.",
        isCorrect: false,
      },
      {
        content: "None of the above.",
        isCorrect: false,
      },
    ],
  },
  {
    question: "What are the two ways to handle data in React?",
    answers: [
      {
        content: "State & Props",
        isCorrect: true,
      },
      {
        content: "Services & Components",
        isCorrect: false,
      },
      {
        content: "State & Services",
        isCorrect: false,
      },
      {
        content: "State & Component",
        isCorrect: false,
      },
    ],
  },
  {
    question:
      "In which of the following directory React.js components are saved?",
    answers: [
      {
        content: "Inside the js/components/",
        isCorrect: true,
      },
      {
        content: "Inside the vendor/components/",
        isCorrect: false,
      },
      {
        content: "Inside the external/components/",
        isCorrect: false,
      },
      {
        content: "Inside the vendor/",
        isCorrect: false,
      },
    ],
  },
  {
    question:
      "Which of the following is a must API for every React.js component?",
    answers: [
      {
        content: "SetinitialComponent",
        isCorrect: false,
      },
      {
        content: "renderComponent",
        isCorrect: true,
      },
      {
        content: "render",
        isCorrect: false,
      },
      {
        content: "All of the above",
        isCorrect: false,
      },
    ],
  },
  {
    question:
      "Which of the following option is correct in the case of the Babel?",
    answers: [
      {
        content: "Babel is a Compiler",
        isCorrect: false,
      },
      {
        content: "Babel is a Transpilar",
        isCorrect: false,
      },
      {
        content: "None of the above",
        isCorrect: false,
      },
      {
        content: "Both A and B are correct",
        isCorrect: true,
      },
    ],
  },
  {
    question: "Does React.js create a VIRTUAL DOM in the memory?",
    answers: [
      {
        content: "TRUE",
        isCorrect: true,
      },
      {
        content: "FALSE",
        isCorrect: false,
      },
      {
        content: "Can be true or false",
        isCorrect: false,
      },
      {
        content: "Cannot say",
        isCorrect: false,
      },
    ],
  },
  {
    question: "What is the use of 'webpack' command in React.js?",
    answers: [
      {
        content:
          "The 'webpack' command is used to transpile all the JavaScript down into one file.",
        isCorrect: false,
      },
      {
        content: "It runs React local development server.",
        isCorrect: false,
      },
      {
        content: "It is a module bundler.",
        isCorrect: true,
      },
      {
        content: "None of the above.",
        isCorrect: false,
      },
    ],
  },
  {
    question:
      "Which of the following is used to pass data to a component from outside in React.js?",
    answers: [
      {
        content: "SetState",
        isCorrect: false,
      },
      {
        content: "Render with arguments",
        isCorrect: false,
      },
      {
        content: "Props",
        isCorrect: true,
      },
      {
        content: "PropTypes",
        isCorrect: false,
      },
    ],
  },

  {
    question: "What does ES6 stand for?",
    answers: [
      {
        content: "ECMAScript 6",
        isCorrect: true,
      },
      {
        content: "ECMA 6",
        isCorrect: false,
      },
      {
        content: "ECMAJavaScript 6",
        isCorrect: false,
      },
      {
        content: "EJavaScript 6",
        isCorrect: false,
      },
    ],
  },
  {
    question:
      "Which of the following function is used to change the state of the React.js component?",
    answers: [
      {
        content: "this.setState",
        isCorrect: true,
      },
      {
        content: "this.setChangeState",
        isCorrect: false,
      },
      {
        content: "this.State{}",
        isCorrect: false,
      },
      {
        content: "None of the above",
        isCorrect: false,
      },
    ],
  },
  {
    question:
      "Which of the following method refers to the parent class in React.js?",
    answers: [
      {
        content: "inherits()",
        isCorrect: false,
      },
      {
        content: "self()",
        isCorrect: false,
      },
      {
        content: "super()",
        isCorrect: true,
      },
      {
        content: "this()",
        isCorrect: false,
      },
    ],
  },
  {
    question:
      "What will happen if you render an input element with disabled = {false}?",
    answers: [
      {
        content: "It will be rendered as disabled",
        isCorrect: false,
      },
      {
        content: "It will not be rendered at all",
        isCorrect: false,
      },
      {
        content: "It will be rendered as enabled",
        isCorrect: true,
      },
      {
        content: "You cannot set it false",
        isCorrect: false,
      },
    ],
  },
  {
    question:
      "Which of the following function is called to render HTML to the web page in React?",
    answers: [
      {
        content: "render()",
        isCorrect: true,
      },
      {
        content: "render()",
        isCorrect: false,
      },
      {
        content: "ReactDOM_render()",
        isCorrect: false,
      },
      {
        content: "render()",
        isCorrect: false,
      },
    ],
  },
  {
    question:
      "Which of the following lifecycle events React components have at the highest level?",
    answers: [
      {
        content: "Destruction",
        isCorrect: false,
      },
      {
        content: "Initialization",
        isCorrect: false,
      },
      {
        content: "State/Property Updates",
        isCorrect: false,
      },
      {
        content: "All of the above",
        isCorrect: true,
      },
    ],
  },
  {
    question: "Why is the usage of setState?",
    answers: [
      {
        content: "Invoke code after the setState operation is done",
        isCorrect: true,
      },
      {
        content:
          "Replace the state completely instead of the default merge action",
        isCorrect: false,
      },
      {
        content: "Access the previous state before the setState operation",
        isCorrect: false,
      },
      {
        content: "None of the above",
        isCorrect: false,
      },
    ],
  },
  {
    question: "Which of the following best defines the 'key' prop?",
    answers: [
      {
        content:
          "'Key' prop is used to look pretty, and there is no benefit whatsoever",
        isCorrect: false,
      },
      {
        content:
          "'Key' prop is a way for React to identify a newly added item in a list and compare it during the 'diffing' algorithm",
        isCorrect: true,
      },
      {
        content: "It is one of the attributes in HTML",
        isCorrect: false,
      },
      {
        content: "It is NOT commonly used in an array",
        isCorrect: false,
      },
    ],
  },
  {
    question: "Which of the following method is not a part of ReactDOM?",
    answers: [
      {
        content: "ReactDOM.destroy()",
        isCorrect: true,
      },
      {
        content: "ReactDOM.hydrate()",
        isCorrect: false,
      },
      {
        content: "ReactDOM.createPortal()",
        isCorrect: false,
      },
      {
        content: "ReactDOM.findDOMNode()",
        isCorrect: false,
      },
    ],
  },
  {
    question: "How can you set a default value for an uncontrolled form field?",
    answers: [
      {
        content: "By using the value property",
        isCorrect: false,
      },
      {
        content: "By using the defaultValue property",
        isCorrect: true,
      },
      {
        content: "By using the default property",
        isCorrect: false,
      },
      {
        content: "It is assigned automatically",
        isCorrect: false,
      },
    ],
  },
  {
    question:
      "We can update the state in React.js by calling to setState() method. These calls are",
    answers: [
      {
        content: "Synchronous in nature",
        isCorrect: false,
      },
      {
        content: "Asynchronous in nature",
        isCorrect: true,
      },
      {
        content: "Are asynchronous but can be made synchronous when required",
        isCorrect: false,
      },
      {
        content: "None of the above",
        isCorrect: false,
      },
    ],
  },
  {
    question:
      "Which of the following statement is true for controlled components in React.js?",
    answers: [
      {
        content: "The source of truth is DOM",
        isCorrect: false,
      },
      {
        content: "The source of truth can be anything",
        isCorrect: false,
      },
      {
        content: "The source of truth is a component state",
        isCorrect: true,
      },
      {
        content: "None of the above",
        isCorrect: false,
      },
    ],
  },
  {
    question:
      "What changes would appear in the component as soon as the state of the React component is changed?",
    answers: [
      {
        content:
          "It will do nothing; you have to call render method to render the component again",
        isCorrect: false,
      },
      {
        content: "It will re-render the component",
        isCorrect: true,
      },
      {
        content: "It can be created again from scratch",
        isCorrect: false,
      },
      {
        content: "None of the above",
        isCorrect: false,
      },
    ],
  },
  {
    question:
      "Which of the following statement is true for uncontrolled components in React.js?",
    answers: [
      {
        content: "The source of truth is DOM",
        isCorrect: true,
      },
      {
        content: "The source of truth is a component state",
        isCorrect: false,
      },
      {
        content: "The source of truth can be anything",
        isCorrect: false,
      },
      {
        content: "None of the above",
        isCorrect: false,
      },
    ],
  },
  {
    question:
      "In which of the following condition, the React.js Lifecycle method static getDerivedSateFromProps(props, state) is called?",
    answers: [
      {
        content: "The component is created for the first time",
        isCorrect: false,
      },
      {
        content: "The state of the component is updated",
        isCorrect: false,
      },
      {
        content: "Both of the above",
        isCorrect: true,
      },
      {
        content: "None of the above",
        isCorrect: false,
      },
    ],
  },
  {
    question:
      "What is the use of the create-react-app command in the React.js application?",
    answers: [
      {
        content: "It is used to update a React app",
        isCorrect: false,
      },
      {
        content: "It is used to create a new React app",
        isCorrect: true,
      },
      {
        content: "It is used to install dependencies",
        isCorrect: false,
      },
      {
        content: "None of the above",
        isCorrect: false,
      },
    ],
  },
  {
    question: "What is true for the keys given to a list of elements in React?",
    answers: [
      {
        content: "Unique in the DOM",
        isCorrect: false,
      },
      {
        content: "Unique among the siblings only",
        isCorrect: true,
      },
      {
        content: "Do not require to be unique",
        isCorrect: false,
      },
      {
        content: "None of the above",
        isCorrect: false,
      },
    ],
  },
];

export default quizQuestions;
