function appointments(input) {
    let obj = {};

    for (const el of input) {
        let data = el.split(' ');
        let day = data[0];
        let name = data[1];
        
        if (obj.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`);
        } else {
            obj[day] = name;
            console.log(`Scheduled for ${day}`);
        }
    }

    for (const [key, value] of Object.entries(obj)) {
        console.log(`${key} -> ${value}`);
    }
}

appointments(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim']
);

console.log('\n');

appointments(['Friday Bob',
'Saturday Ted',
'Monday Bill',
'Monday John',
'Wednesday George']
);

// Task description
// 
// Write a function that manages meeting appointments. The input comes as an array of strings.
// Each string contains a weekday and person’s name. For each successful meeting, print a message.
// If you receive the same weekday twice, the meeting cannot be scheduled so print a conflicting message. In the end, print a list of all successful meetings.
