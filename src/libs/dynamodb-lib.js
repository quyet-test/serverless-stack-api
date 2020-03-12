import AWS from 'aws-sdk'

export function call (action, params) {
  const dynamoDb = new AWS.DynamoDB.DocumentClient({
    accessKeyId: 'xxxx',
    secretAccessKey: 'xxxx',
    region: 'localhost',
    endpoint: 'http://127.0.0.1:8000'
  })

  return dynamoDb[action](params).promise()
}
