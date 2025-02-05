// Allows an object (subject) to notify other objects (observers) of changes in state.

// The Observer Pattern is like a subscription service. 
// There’s a "publisher" (subject) that holds some data or state, 
// and "subscribers" (observers) who want to know when that data changes.
// When the data changes, the publisher notifies all its subscribers about the update.

class Subject {
    constructor() { 
        this.observors = [] 
    }
    subscribe(observor){
        this.observors.push(observor);
    }
    unsubscribe(observer){
        this.observors=this.observors.filter((obs)=> obs !== observer);
    }
    notify(data){
        this.observors.forEach((observor)=> observor(data))
    }
}
const subject=new Subject();
const observor1 = (data) => console.log(`Observor 1  ${data} `);
const observor2 = (data) => console.log(`Observor 2  ${data} `);

subject.subscribe(observor1);
subject.subscribe(observor2);

subject.notify("Hello")

subject.unsubscribe(observor1);
subject.notify("observor 1 is unsubscribed")
