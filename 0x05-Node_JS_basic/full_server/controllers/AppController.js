#!/usr/bin/node
class AppController {
  static getHomepage(_, response) {
    return response.status(200).send('Hello Holberton School!');
  }
}
module.exports = AppController;
