// code your solution here
function saturdayFun(activity='roller-skate') {
    return `This Saturday, I want to ${activity}!`;
}

console.log(saturdayFun());

function mondayWork(activity='go to the office') {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(star='*') {
    const innerFunction=function (lines='special') {
        return console.log(`You are ${star}a ${lines}${star}!`);
    };
    return innerFunction;
}
const storedFunction=wrapAdjective('*');

wrapAdjective('%')('dedicated programmer');


