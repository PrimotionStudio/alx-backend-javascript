#!/usr/bin/node
import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastname, fileName) {
  return Promise
    .allSettled([signUpUser(firstName, lastname), uploadPhoto(fileName)])
    .then((response) => {
      console.log(response);
      response.map((res) => ({
        status: res.status,
        value: (res.status === 'fulfilled') ? res.value : res.reason.toString(),
      }));
    });
}
