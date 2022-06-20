// var input ='6 7 5';
var lines = input.split(' ');

var h = parseInt(lines[0]);
var z = parseInt(lines[1]);
var l = parseInt(lines[2]);

if (z > h && z > l) 
{
    if (h > l)
    {
        console.log('huguinho')
    }
    else
    {
        console.log('luisinho')
    }
}
else if (h > l && h > z)
{
    if (z > l)
    {
        console.log('zezinho')
    }
    else
    {
        console.log('luisinho')
    }
}
else if (l > h && l > z)
{
    if (z > h)
    {
        console.log('zezinho')
    }
    else
    {
        console.log('huguinho')
    }    
}