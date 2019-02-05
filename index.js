'use strict';
const uuid = require('uuid');
module.exports.test1 = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Test1 lambda function executed successfully!' + uuid.v1()
    }),
  };
};

module.exports.test2 = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Test2 lambda function executed successfully!'
    }),
  };
};
