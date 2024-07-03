interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [attr: string]: any;
}

interface Directors extends Teacher {
    numberOfReports: number;
}

function printTeacher(firstName:string, lastName:string): string {
    return `${firstName[0]}. ${lastName}`;
}

interface studentClass {
    firstName: string;
    lastName: string;
    workOnHomework: () => string;
    displayName: () => string;
}

class StudentClass {
    firstName: string;
    lastName: string;
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    workOnHomeWork(): string {
        return 'Currently working';
    };
    displayName(): string {
        return this.firstName;
    }
}