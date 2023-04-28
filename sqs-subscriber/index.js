'use strict'

const { Consumer } = require('sqs-consumer');

const app = Consumer.create({
  region: 'us-west-2',
  queueUrl:'https://sqs.us-west-2.amazonaws.com/317696748520/1-800-flowers',
  handleMessage: (message => {
    console.log('MESSAGE: ', message)
    let data = JSON.parse(message.body);
    console.log(data);
  }),
});

app.start();