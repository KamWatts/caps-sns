'use strict'

const AWS =  require('aws-sdk');
AWS.config.update({ region: 'us-west-2'});

const sns = new AWS.SNS();

const topic = 'arn:aws:sns:us-west-2:317696748520:pickup.fifo'

const payload = {
  Message: 'Package is ready for pickup',
  TopicArn: topic
}

sns.publish(payload).promise()
.then(data => {
  console.log('message published', data);
})
.catch((e) => {
  console.log('SNS message', e);
})