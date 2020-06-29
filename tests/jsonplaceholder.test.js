let request = require('supertest');
const {post1comment, album1photo, user1album, user1todo, user1post} = require('./jsonplaceholder.obj');

describe('GET JSONPlaceholder id 1 post comments', () => {
    it('responds with an array of all comments from 1', (done) => {
    request('https://jsonplaceholder.typicode.com')
      .get('/posts/1/comments')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, post1comment(), done)
      ;
    })
})

describe('GET JSONPlaceholder id 1 album photos', () => {
    it('responds with an array of all photos from 1', (done) => {
    request('https://jsonplaceholder.typicode.com')
      .get('/albums/1/photos')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, album1photo(), done)
      ;
    })
})

describe('GET JSONPlaceholder id 1 user album', () => {
    it('responds with an array of all albums from 1', (done) => {
    request('https://jsonplaceholder.typicode.com')
      .get('/users/1/albums')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, user1album(), done)
      ;
    })
})

describe('GET JSONPlaceholder id 1 user todo', () => {
    it('responds with an array of all todo from 1', (done) => {
    request('https://jsonplaceholder.typicode.com')
      .get('/users/1/todos')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, user1todo(), done)
      ;
    })
})

describe('GET JSONPlaceholder id 1 user post', () => {
    it('responds with an array of all posts from 1', (done) => {
    request('https://jsonplaceholder.typicode.com')
      .get('/users/1/posts')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, user1post(), done)
      ;
    })
})

describe('POST JSON Placeholder id 1 post', () => {
    it('respondes with JSON', function(done) {
        request('https://jsonplaceholder.typicode.com')
          .post('/posts')
          .send({
            title: 'foo',
            body: 'bar',
            userId: 1
          })
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(201)
          .end(function(err, res) {
              if (err) return done(err);
              expect(res.body).toMatchObject({ title: 'foo', body: 'bar', userId: 1, id: 101 })
              done();
          })
    })
})