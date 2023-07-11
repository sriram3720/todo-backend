const resolvers = {
    Query: {
      tasks: async () => {
        return await prisma.task.findMany();
      },
    },
    Mutation: {
      createTask: async (_, { input }) => {
        return await prisma.task.create({ data: input });
      },
      updateTask: async (_, { id, input }) => {
        return await prisma.task.update({ where: { id }, data: input });
      },
      deleteTask: async (_, { id }) => {
        return await prisma.task.delete({ where: { id } });
      },
    },
  };
  
  module.exports = resolvers;
  