#!/usr/bin/node
// Define a default export class named ClassRoom
class ClassRoom {
    // Constructor function that is called when
    // an object is created from the class
    constructor(maxStudentsSize) {
        // Initialize an instance variable
        // _maxStudentsSize with the value of maxStudentsSize
        this._maxStudentsSize = maxStudentsSize;
    }
}

export default ClassRoom;