// CODE here for your Lambda Classes

class Person{
    constructor(attr){
        this.name = attr.name,
        this.age = attr.name,
        this.location = attr.location
    }
    speak(){
        return `Hello, my name is ${this.name}. I am from ${this.location}.`;
    }
}
class Instructor extends Person{
    constructor(instAttr){
        this.specialty = instAttr.specialty,
        this.favLanguage = instAttr.favLanguage,
        this.catchPhrase = instAttr.catchPhrase
    }
    demo(subject){
        return `Today, we are learning about ${subject}.`;
    }
    grade(student, subject){
        return `${student.name} receives a perfect score on ${subject}.`);
    }
}
class Student extends Person{
    constructor(studentAttr){
        this.previousBackground = studentAttr.previousBackground,
        this.className = studentAttr.className,
        this.favSubjects = studentAttr.favSubjects
        this.grade = studentAttr.grade;
    }
    listsSubjects(){
        this.favSubjects.map(list => console.log(list));
    }
    PRAssignment(subject){
        return `${this.name} has submitted a Pull Request for ${subject}.`;
    }
    sprintChallenge(subject){
        return `${this.name} has started the sprint challenge on ${subject}.`;
    }
}
class ProjectManager extends Instructor{
    constructor(pmAttr){
        this.gradClassName = pmAttr.gradClassName,
        this.favInstructor = pmAttr.favInstructor
    }
    standUp(name, channel){
        return `${name} announces to ${channel}. @channel standup time!`;
    }
    debugsCode(student, subject){
        return `${this.name} debugs ${student.name}'s code on ${subject}.`;
    }
}