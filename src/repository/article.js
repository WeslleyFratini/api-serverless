const AWS = require('aws-sdk')
const { v4: uuidv4 } = require('uuid')

const dybanoDb = new AWS.DynamoDB.DocumentClient()
const ARTICLE_TABLE = 'article'

const create = async article => {
  const articleId = uuidv4()

  const newArticle = {
    articleId,
    ...article
  }
  const params = { 
    TabletName: ARTICLE_TABLE,
    Item: newArticle
  }

  await dybanoDb.put(params).promise()

  return newArticle;
}

const get = async articleId => {

  const params = { 
    TabletName: ARTICLE_TABLE,
    Key: {
      newArticle
    }
  }

  const response = await dybanoDb.get(params).promise()

  return response.Item;
}

module.exports = {
  create,
  get
}