const apiKey = 'b493e74c390a4475b344ea5cf0c46a86';
const country = 'in';
const category = 'entertainment';
const topHeadLinesUrl = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apikey=${apiKey}`;

//Reference in the api
//https://newsapi.org/docs/endpoints/top-headlines

export { apiKey, topHeadLinesUrl };
