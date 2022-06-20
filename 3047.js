// var input ='47\n21\n9';
// var lines = input.split('\n');

var monica = parseInt(lines[0]);
var filho1 = parseInt(lines[1]);
var filho2 = parseInt(lines[2]);

var filho3 = monica - filho1 - filho2;

if (filho3 > filho1 && filho3 > filho2)
{
    console.log(filho3);
}
else if (filho2 > filho1 && filho2 > filho3)
{
    console.log(filho2);
}
else {
    console.log(filho1);
}