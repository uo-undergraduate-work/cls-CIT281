// Import the Fastify framework
const fastify = require('fastify')({ logger: true });

// Import the functions from p4-module.js
const {
    getQuestions,
    getAnswers,
    getQuestionsAnswers,
    getQuestion,
    getAnswer,
    getQuestionAnswer
} = require('./p4-module');

// Route to return all questions
fastify.get('/cit/question', async (request, reply) => {
    const questions = getQuestions();
    reply.send({
        error: "",
        statusCode: 200,
        questions: questions
    });
});

// Route to return all answers
fastify.get('/cit/answer', async (request, reply) => {
    const answers = getAnswers();
    reply.send({
        error: "",
        statusCode: 200,
        answers: answers
    });
});

// Route to return all questions and answers
fastify.get('/cit/questionanswer', async (request, reply) => {
    const questionsAnswers = getQuestionsAnswers();
    reply.send({
        error: "",
        statusCode: 200,
        questions_answers: questionsAnswers
    });
});

// Route to return a specific question by number
fastify.get('/cit/question/:number', async (request, reply) => {
    const number = parseInt(request.params.number);
    const question = getQuestion(number);
    reply.send({
        error: question.error,
        statusCode: 200,
        question: question.question,
        number: question.number
    });
});

// Route to return a specific answer by number
fastify.get('/cit/answer/:number', async (request, reply) => {
    const number = parseInt(request.params.number);
    const answer = getAnswer(number);
    reply.send({
        error: answer.error,
        statusCode: 200,
        answer: answer.answer,
        number: answer.number
    });
});

// Route to return a specific question and answer by number
fastify.get('/cit/questionanswer/:number', async (request, reply) => {
    const number = parseInt(request.params.number);
    const questionAnswer = getQuestionAnswer(number);
    reply.send({
        error: questionAnswer.error,
        statusCode: 200,
        question: questionAnswer.question,
        answer: questionAnswer.answer,
        number: questionAnswer.number
    });
});

// Unmatched route handler (Wildcard route)
fastify.get('*', async (request, reply) => {
    reply.status(404).send({
        error: "Route not found",
        statusCode: 404
    });
});


// Route to add a new question-answer pair using POST
fastify.post('/cit/question', async (request, reply) => {
    const info = request.body;
    const result = addQuestionAnswer(info);
  
    if (result.error) {
        reply.status(400).send({
            error: result.error,
            statusCode: 400
        });
    } else {
        reply.status(201).send({
            error: result.error,
            statusCode: 201,
            number: result.number
        });
    }
});

// Route to update an existing question-answer pair using PUT
fastify.put('/cit/question/:number', async (request, reply) => {
    const number = parseInt(request.params.number);
    const info = { number, ...request.body };
    const result = updateQuestionAnswer(info);
  
    if (result.error) {
        reply.status(400).send({
            error: result.error,
            statusCode: 400
        });
    } else {
        reply.status(200).send({
            error: result.error,
            statusCode: 200,
            number: result.number
        });
    }
});

fastify.delete('/cit/question/:number', async (request, reply) => {
    const number = parseInt(request.params.number);
    const result = deleteQuestionAnswer({ number });
  
    if (result.error) {
        reply.status(400).send({
            error: result.error,
            statusCode: 400
        });
    } else {
        reply.status(200).send({
            error: result.error,
            statusCode: 200,
            number: result.number
        });
    }
});

// Start the server
const start = async () => {
    try {
        await fastify.listen({ port: 3000 });
        console.log("Server listening on port 3000");
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
};
start();
