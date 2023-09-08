import client from '../utils/client';

const endpoint = client.databaseURL;

const getCards = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocabCards.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

const createTerm = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocabCards.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  }).then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const updateTerm = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocabCards/${payload.firebaseKey}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload)
  }).then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const deleteTerm = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocabCards/${firebaseKey}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const getSingleTerm = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocabCards/${firebaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

export {
  getCards,
  createTerm,
  updateTerm,
  deleteTerm,
  getSingleTerm
};
