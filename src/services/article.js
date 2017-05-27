import request from './../utils/request';

export function fetch(typeId = 0, page = 1) {
  return {
    name: 'js',
    list: [
      { articleId: 1, title: 'hahahahah', createDate: 8008208820, auth: 'nidie' },
      { articleId: 11, title: 'hahahahah', createDate: 8008208820, auth: 'nidie' },
      { articleId: 111, title: 'hahahahah', createDate: 8008208820, auth: 'nidie' },
      { articleId: 21, title: 'hahahahah', createDate: 8008208820, auth: 'nidie' },
      { articleId: 31, title: 'hahahahah', createDate: 8008208820, auth: 'nidie' },
      { articleId: 41, title: 'hahahahah', createDate: 8008208820, auth: 'nidie' },
      { articleId: 15, title: 'hahahahah', createDate: 8008208820, auth: 'nidie' },
      { articleId: 13, title: 'hahahahah', createDate: 8008208820, auth: 'nidie' },
      { articleId: 113, title: 'hahahahah', createDate: 8008208820, auth: 'nidie' },
      { articleId: 121, title: 'hahahahah', createDate: 8008208820, auth: 'nidie' },
      { articleId: 121222, title: 'hahahahah', createDate: 8008208820, auth: 'nidie' },
      { articleId: 1444, title: 'hahahahah', createDate: 8008208820, auth: 'nidie' }
    ],
    page: 1
  }
}
export function fetchTypes() {
  let res = request('/getArticleTypes');
  console.log(res)
  return res
}
