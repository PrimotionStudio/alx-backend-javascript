#!/usr/bin/node
import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';

export default function handleProfileSignup(firstName, lastname, fileName) {
  return Promise
    .allSettled([signUpUser(firstName, lastname), uploadPhoto(fileName)])
    .then((response) => {
      console.log(response);
      response.map((res) => ({
        status: res.status,
        value: (res.status === 'fulfilled') ? res.value : String(res.reason),
      }));
    });
}
