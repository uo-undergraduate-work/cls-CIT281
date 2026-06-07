const fastify = require('fastify')({ logger: true });

const students = [
  { id: 1, last: "Last1", first: "First1" },
  { id: 2, last: "Last2", first: "First2" },
  { id: 3, last: "Last3", first: "First3" }
];

// GET all students
fastify.get('/cit/student', (request, reply) => {
  reply.code(200).send(students);
});

// GET single student by ID
fastify.get('/cit/student/:id', (request, reply) => {
  const studentId = parseInt(request.params.id, 10);
  const student = students.find(s => s.id === studentId);
  if (student) {
    reply.code(200).send(student);
  } else {
    reply.code(404).send({ error: 'Not Found' });
  }
});

// Unmatched route handler
fastify.setNotFoundHandler((request, reply) => {
  reply.code(404).send({ error: 'Route Not Found' });
});

// POST new student
fastify.post('/cit/student', (request, reply) => {
    const { first, last } = request.body;
    if (!first || !last) {
      reply.code(400).send({ error: 'First and Last name are required' });
      return;
    }
  
    const newId = Math.max(...students.map(s => s.id)) + 1;
    const newStudent = { id: newId, last, first };
  
    students.push(newStudent);
    reply.code(201).send(newStudent);
  });
  

// Start server
const start = async () => {
  try {
    await fastify.listen({ port: 3000 });
    console.log('Server listening on http://localhost:3000');
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
