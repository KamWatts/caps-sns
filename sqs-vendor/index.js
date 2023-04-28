'use strict'

const { Producer } = require('sqs-producer');
const AWS_REGION = 'us-west-2';
const AWS_QUEUE_URL = 'https://sqs.us-west-2.amazonaws.com/317696748520/1-800-flowers'

const producer = Producer.create({
  queueUrl: AWS_QUEUE_URL,
  region: AWS_REGION
});

producer.send({
  orderId: '1234',
  customer: 'Jane Doe',
  vendorUrl: queueUrl
}).then(data => {
    console.log('SQS MESSAGE DATA: ', data);
})
.catch(err => {
  console.log('SQS PRODUCER ERROR ', err);
})