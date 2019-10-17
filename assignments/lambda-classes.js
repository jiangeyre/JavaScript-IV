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
        super(instAttr);
        this.specialty = instAttr.specialty,
        this.favLanguage = instAttr.favLanguage,
        this.catchPhrase = instAttr.catchPhrase
    }
    demo(subject){
        return `Today, we are learning about ${subject}.`;
    }
    grade(student, subject){
        return `${student.name} receives a perfect score on ${subject}.`;
    }
    addSubGrade(student){
        let pts = Math.round(Math.floor((Math.random() * (10 - 5 +1) + 5)));
        if (student.grade > 70){
            student.grade -= pts;
            return `${student.name} has lost ${pts} points. Current grade is ${student.grade}.`;
        } else {
            student.grade += pts;
            return `${student.name} has received ${pts} points. Current grade is ${student.grade}.`;
        }
    } 
}
class Student extends Person{
    constructor(studentAttr){
        super(studentAttr);
        this.previousBackground = studentAttr.previousBackground,
        this.className = studentAttr.className,
        this.favSubjects = studentAttr.favSubjects,
        this.grade = {from: 0, to: 100};
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
    graduate(){
        if (this.grade >= 70){
            return `${this.name} has completed graduation with a grade of ${this.grade}. Congratulations and we commend you for putting in so much time and effort!`;
        } else {
            let missingPoints = 70 - this.grade;
            return `The Project Manager has reviewed all of ${this.name}'s assignments and awarded ${missingPoints} points to bring the grade to a passing score of 70. Congratulations on just barely passing the course.`;
        }
    }
}
class ProjectManager extends Instructor{
    constructor(pmAttr){
        super(pmAttr);
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

const snape = new Instructor({
    name: 'Severus Snape',
    age: 44,
    location: 'Hogwarts',
    specialty: 'Data Science',
    favLanguage: 'C++',
    catchPhrase: 'Ah, yes. Harry Potter. Our new - celebrity.'
})

const crouch = new Instructor({
    name: 'Barty Crouch Jr.',
    age: 35,
    location: 'Crouch Manor',
    specialty: 'iOS Development',
    favLanguage: 'C#',
    catchPhase: 'I got Mad Eye stashed away.'
})

const lucius = new ProjectManager({
    name: 'Lucius Malfoy',
    age: 50,
    location: 'Malfoy Manor',
    specialty: 'Full Stack Web Development',
    favLanguage: 'Python',
    catchPhrase: 'You, filthy Mudblood.',
    gradClassName: 'WEB13',
    favInstructor: 'Salazar🐍Slytherin'
})

const bellatrix = new ProjectManager({
    name: 'Bellatrix Lestrange',
    age: 42,
    location: 'Castle Lestrange',
    specialty: 'Android Development',
    favLanguage: 'Python',
    catchPhrase: 'Itty bitty orphan unloved Potter.',
    gradClassName: 'AND13',
    favInstructor: 'Lord🐍Voldemort'
})

const draco = new Student({
    name: 'Draco Malfoy',
    age: 25,
    location: 'Malfoy Manor - East Wing',
    previousBackground: 'Potions and Quidditch',
    className: 'WEB25',
    favSubjects: ['Nesting', 'Inheritance', 'Classes'],
    grade: 96
})

const theo = new Student({
    name: 'Theodore Nott',
    age: 25,
    location: 'Nott Manor',
    previousBackground: 'Defense against the Dark Arts',
    className: 'WEB25',
    favSubjects: ['CSS', 'HTML', 'Prototypes and Classes'],
    grade: 60
})

console.log(snape.speak());

console.log(theo.listsSubjects());
console.log(draco.listsSubjects());

console.log(bellatrix.name + ' says, "' + bellatrix.catchPhrase + '"');
console.log(lucius.name + ' says, "' + lucius.catchPhrase + '"');
console.log(snape.name + ' says, "' + snape.catchPhrase + '"');
console.log(crouch.name + ' says, "' + crouch.catchPhrase + '"');

console.log('Our benevolent creator is ' + lucius.favInstructor + ".");
console.log('All bow down to our mighty leader, ' + bellatrix.favInstructor + ".");

console.log(draco.grade);
console.log(crouch.addSubGrade(draco));
console.log(draco.grade);
console.log(draco.graduate());

console.log(theo.graduate());

console.log(lucius.addSubGrade(theo));
console.log(bellatrix.addSubGrade(theo));
console.log(theo.graduate());