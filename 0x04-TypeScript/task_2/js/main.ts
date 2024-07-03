interface DirectorInterface {
    workFromHome: () => string;
    getCoffeeBreak: () => string;
    workDirectorTasks: () => string;
}

interface TeacherInterface {
    workFromHome: () => string;
    getCoffeeBreak: () => string;
    workTeacherTasks: () => string;
}

class Director {
    workFromHome(): string {
        return 'Working from home';
    }
    getToWork(): string {
        return 'Getting a coffee break';
    }
    workDirectorTasks(): string {
        return 'Working on director tasks';
    }
}

class Teacher {
    workFromHome(): string {
        return 'Cannot work from home';
    }
    getToWork(): string {
        return 'Cannot get a coffee break';
    }
    workTeacherTasks(): string {
        return 'Getting to work';
    }
}

function createEmployee(salary: number | string): Director | Teacher {
    if (typeof salary === 'number' && salary < 500)
        return new Teacher();
    return new Director();
}


console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));