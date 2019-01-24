// CODE here for your Lambda Classes

//Base Person Constructor
class Person{
    constructor(personAttrs){
        this.name = personAttrs.name;
        this.age = personAttrs.age;
        this.location = personAttrs.location;
        this.gender = personAttrs.gender;
    }
    speak(){
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`)
    }
}

//Instructor Constructor
class Instructor extends Person{
    constructor(instructorAttrs){
        super(instructorAttrs);
        this.specialty = instructorAttrs.specialty;
        this.favLanguage = instructorAttrs.favLanguage;
        this.catchPhrase = instructorAttrs.catchPhrase;
    }
    demo(subject){
        console.log(`Today we are learning about ${subject}.`)
    }
    grade(student, subject){
        console.log(`${student.name} recieves a perfect score on ${subject}.`)
    }
}

//Student Constructor
class Student extends Person{
    constructor(studentAttrs){
        super(studentAttrs);
        this.previousBackground = studentAttrs.previousBackground;
        this.className = studentAttrs.className;
        this.favSubjects = studentAttrs.favSubjects;
    }
    listsSubjects(){
        this.favSubjects.forEach(subject=> {
            console.log(subject);
        });
    }
    PRAssignment(subject){
        console.log(`${this.name} has submitted a PR for ${subject}`) 
    }
    sprintChallenge(subject){
        console.log(`${this.name} has begun sprint challenge on ${subject}`)
    }
}

//ProjectManager Constructor
class ProjectManager extends Instructor{
    constructor(pmAttrs){
        super(pmAttrs);
        this.gradClassName = pmAttrs.gradClassName;
        this.favInstructor = pmAttrs.favInstructor;
    }
    standUp(channel){
        console.log(`${this.name} announces ${channel}, @channel standy times!`)
    }
    debugsCode(student, subject){
        console.log(`${this.name} debugs ${student.name}'s code on ${subject} `)
    }
}

//Student, Instructor, PM Objects

// let terrellInstuc = new Instructor({
//     name:'TerrellInstructor', 
//     age: 26, 
//     location: 'Oakland', 
//     gender: 'M', 
//     specialty: 'Teaching',
//     favLanguage: 'JavaScript',
//     catchPhrase: 'Its LITTTTT!',
// });

// let terrellPM = new ProjectManager({
//         name:'TerrellPM', 
//         age: 26, 
//         location: 'Oakland', 
//         gender: 'M', 
//         specialty: 'Teaching',
//         favLanguage: 'JavaScript',
//         catchPhrase: 'Its LITTTTT!',
//         gradClassName: 'Web 17',
//         favInstructor: 'Josh'
//     });
    
//     let terrell = new Student({
//         name:'Terrell', 
//         age: 26, 
//         location: 'Oakland', 
//         gender: 'M', 
//         previousBackground:'Security Guard', 
//         className: 'Web 17',
//         favSubjects: ['HTML', 'CSS', 'JavaScript']
//     });

// Constructor Method tests

//     terrellInstuc.demo('HTML')
//     terrellInstuc.grade(terrell, 'CSS')
    
//     terrell.listsSubjects();
//     terrell.PRAssignment('HTML')
//     terrell.sprintChallenge('CSS')

//     terrellPM.standUp('Web17')
//     terrellPM.debugsCode(terrell, 'HTML')
                
