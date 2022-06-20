// let input = '5 40 2';
let lines = input.split(' ');
let comp = lines[0];
(lines[2]*comp <= lines[1]) ? console.log('S') : console.log('N');