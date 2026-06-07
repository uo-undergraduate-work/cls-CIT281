const { data } = require('./p4-data')

// Return array of questions (strings)
const getQuestions = () => {
   return data.map((item) => item.question);
}

// Return array of answers (strings)
const getAnswers = () => {
   return data.map((item) => item.answer);
}

// Return copy of the original data array of objects
const getQuestionsAnswers = () => {
    return JSON.parse(JSON.stringify(data)); 
  }

// Return question of error objects
const getQuestion = (number = "") => {
    if (!Number.isInteger(number)) {
        return { error: "Question number must be an integer", question: "", number: "" };
      } else if (number < 1) {
        return { error: "Question number must be >= 1", question: "", number: "" };
      } else if (number > data.length) {
        return { error: `Question number must be less than the number of questions (${data.length})`, question: "", number: "" };
      }
      return { error: "", question: data[number - 1].question, number: number };
}

// Return answer of error objects
const getAnswer = (number = "") => {
    if (!Number.isInteger(number)) {
        return { error: "Answer number must be an integer", answer: "", number: "" };
      } else if (number < 1) {
        return { error: "Answer number must be >= 1", answer: "", number: "" };
      } else if (number > data.length) {
        return { error: `Answer number must be less than the number of answers (${data.length})`, answer: "", number: "" };
      }
      return { error: "", answer: data[number - 1].answer, number: number };
}

// Return Q & A pair or error object
const getQuestionAnswer = (number = "") => {
    if (!Number.isInteger(number)) {
        return { error: "Question number must be an integer", question: "", answer: "", number: "" };
      } else if (number < 1) {
        return { error: "Question number must be >= 1", question: "", answer: "", number: "" };
      } else if (number > data.length) {
        return { error: `Question number must be less than the number of questions (${data.length})`, question: "", answer: "", number: "" };
      }
      return { error: "", question: data[number - 1].question, answer: data[number - 1].answer, number: number };    
}

// Add a new question and answer
const addQuestionAnswer = (info = {}) => {
    if (!info.question) {
        return { error: 'Object question property required', message: '', number: -1 };
    }
    if (!info.answer) {
        return { error: 'Object answer property required', message: '', number: -1 };
    }
  
    data.push({
        question: info.question,
        answer: info.answer,
    });
  
    return { error: '', message: 'Question added', number: data.length };
}

// Add a new question and answer
const updateQuestionAnswer = (info = {}) => {
    const { question, answer, number } = info;
    if (!question && !answer) {
        return { error: 'Object question property or answer property required', message: '', number: '' };
      }
    if (!number || !Number.isInteger(number) || number < 1 || number > data.length) {
        return { error: 'Object number property required', message: '', number: -1 };
    }
    
    
    if (question) {
        data[number - 1].question = question;
    }
    if (answer) {
        data[number - 1].answer = answer;
    }
  
    return { error: '', message: `Question ${number} updated`, number: number };
}

// Add a new question and answer
const deleteQuestionAnswer = (number = "") => {
    if (!Number.isInteger(number)) {
        return { error: 'Question/answer number must be an integer', message: '', number: '' };
    }
    if (number < 1) {
        return { error: 'Question/answer number must be >= 1', message: '', number: '' };
    }
    if (number > data.length) {
        return { error: `Question/answer number must be less than the number of questions (${data.length})`, message: '', number: '' };
    }

    data.splice(number - 1, 1);
    
    return { error: '', message: `Question ${number} deleted`, number: number };
}


// Export the functions for use
module.exports = {
    getQuestions,
    getAnswers,
    getQuestionsAnswers,
    getQuestion,
    getAnswer,
    getQuestionAnswer,
    addQuestionAnswer,
    updateQuestionAnswer,
    deleteQuestionAnswer,
  };


/*****************************
  Module function testing
******************************/
function testing(category, ...args) {
    console.log(`\n** Testing ${category} **`);
    console.log("-------------------------------");
    for (const o of args) {
      console.log(`-> ${category}${o.d}:`);
      console.log(o.f);
    }
  }
  
  // Set a constant to true to test the appropriate function
  const testGetQs = true;
  const testGetAs = true;
  const testGetQsAs = true;
  const testGetQ = true;
  const testGetA = true;
  const testGetQA = true;
  const testAdd = true;      // Extra credit
  const testUpdate = true;   // Extra credit
  const testDelete = true;   // Extra credit

  // getQuestions()
if (testGetQs) {
    testing("getQuestions", { d: "()", f: getQuestions() });
  }
  
  // getAnswers()
  if (testGetAs) {
    testing("getAnswers", { d: "()", f: getAnswers() });
  }
  
  // getQuestionsAnswers()
  if (testGetQsAs) {
    testing("getQuestionsAnswers", { d: "()", f: getQuestionsAnswers() });
  }
  
  // getQuestion()
  if (testGetQ) {
    testing(
      "getQuestion",
      { d: "()", f: getQuestion() },      // Extra credit: +1
      { d: "(0)", f: getQuestion(0) },    // Extra credit: +1
      { d: "(1)", f: getQuestion(1) },
      { d: "(4)", f: getQuestion(4) }     // Extra credit: +1
    );
  }
  
  // getAnswer()
  if (testGetA) {
    testing(
      "getAnswer",
      { d: "()", f: getAnswer() },        // Extra credit: +1
      { d: "(0)", f: getAnswer(0) },      // Extra credit: +1
      { d: "(1)", f: getAnswer(1) },
      { d: "(4)", f: getAnswer(4) }       // Extra credit: +1
    );
  }
  
  // getQuestionAnswer()
  if (testGetQA) {
    testing(
      "getQuestionAnswer",
      { d: "()", f: getQuestionAnswer() },    // Extra credit: +1
      { d: "(0)", f: getQuestionAnswer(0) },  // Extra credit: +1
      { d: "(1)", f: getQuestionAnswer(1) },
      { d: "(4)", f: getQuestionAnswer(4) }   // Extra credit: +1
    );
  }

  // addQuestionAnswer()
if (testAdd) {
    testing(
      "addQuestionAnswer",
      { d: "()", f: addQuestionAnswer() },
      { d: "({})", f: addQuestionAnswer({}) },
      { d: '(question: "Q4")', f: addQuestionAnswer({ question: "Q4" }) },
      { d: '(answer: "A4")', f: addQuestionAnswer({ answer: "A4" }) },
      {
        d: '(question: "Q4", answer: "A4")',
        f: addQuestionAnswer({ question: "Q4", answer: "A4" }),
      }
    );
  }

  // updateQuestionAnswer()
if (testUpdate) {
    testing(
      "updateQuestionAnswer",
      { d: "()", f: updateQuestionAnswer() },
      { d: "({})", f: updateQuestionAnswer({}) },
      { d: '(question: "Q1U")', f: updateQuestionAnswer({ question: "Q1U" }) },
      { d: '(answer: "A1U")', f: updateQuestionAnswer({ answer: "A1U" }) },
      {
        d: '(question: "Q1U", answer: "A1U")',
        f: updateQuestionAnswer({ question: "Q1U", answer: "A1U" }),
      },
      {
        d: '(number: 1, question: "Q1U", answer: "A1U")',
        f: updateQuestionAnswer({ number: 1, question: "Q1U", answer: "A1U" }),
      }
    );
    console.log(data);
  }

// deleteQuestionAnswer()
if (testDelete) {
    testing(
      "deleteQuestionAnswer",
      { d: "()", f: deleteQuestionAnswer() },
      { d: "(0)", f: deleteQuestionAnswer(0) },
      { d: "(1)", f: deleteQuestionAnswer(1) },
      { d: "(0)", f: deleteQuestionAnswer(4) }
    );
    console.log(data);
  }