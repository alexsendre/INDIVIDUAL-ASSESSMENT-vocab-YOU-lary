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

export { getCards, createTerm };
