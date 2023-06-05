
const express = require('express')
const app = express()
const port = 5000

const keys = require('./config/keys')
const mongoose = require('mongoose')

const { ApolloServer, gql } = require('apollo-server-express');
//const { Notice } = require("./models/Notice");

mongoose.connect(keys.mongoURI, {

}).then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err))

app.get('/', function (req, res) {
  res.send('Hello World')
})

//Notice Register
const Notice = mongoose.model('Notice', {
  title: String,
  content: String,
});

const typeDefs = gql`
  type Notice {
    id: ID!
    title: String!
    content: String!
  }

  type Query {
    notices: [Notice]
  }

  type Mutation {
    createNotice(title: String!, content: String!): Notice
  }
`;

const resolvers = {
  Query: {
    notices: () => Notice.find(),
  },
  Mutation: {
    createNotice: async (_, { title, content }) => {
      const notice = new Notice({ title, content });
      await notice.save();
      return notice;
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

const startServer = async () => {
  await server.start(); // Apollo Server 시작
  server.applyMiddleware({ app });

  app.listen(port, () => {
    //console.log(`Example app listening on port ${port}!`)
    console.log(`Server running at http://localhost:5000${server.graphqlPath}`);
  })
};

startServer();