var Nintendo;
var Sony;
var Sega;
var Microsoft;
var PC;

var numNint = 12;
var numSon = 4;
var numSeg = 1;
var numMicro = 3;
var numPC = 5;

var nintName = '3DS';
var sonName = 'PS3';
var microName = 'Xbox One';
var segName = 'GameGear';
var pcName = 'Quilla PC';

var isNintendoDead = false;
var isSegaDead = true;
var isSoneyDead = false;
var isMicrosoftDead = false;
var isPCDead = false;

var int1 = 1987;
var int2 = 29;
var int3 = int1 + int2;

var isThisTrue = false;

if (isThisTrue)
{
    console.log('This statement is true.');
}
else
{
    console.log('This statement is false.');
}

for (var i = 9; i >= 0; i--) {
    console.log(i);
}

var num = 3;

switch (num)
{
    case 1:
        console.log('A');
        break;

    case 2:
        console.log('B');
        break;

    case 3:
        console.log('C');
        break;

    case 4:
        console.log('D');
        break;

    default:
        console.log('The number not found.');

}

var isTired = true;
var count = 0;

while (isTired)
{

    if (count >= 10)
    {
        isTired = false
    }
    count = count + 1;

    console.log(isTired);
}


var num5 = 5;
var num6 = 6;

if (num5 != num6)
{
    console.log(true);
}

if (num5 > num6)
{
    console.log(true);
}

if (num6 < num5)
{
    console.log(true);
}

if (num5 === num6)
{
    console.log(false);
}

if (num5 == num6)
{
    console.log(false);
}

if (num5 > num6)
{
    console.log(false);
}

if (num5 < num6)
{
    console.log(false);
}

var isEnergetic = false;

if (isEnergetic)
{
    isEnergetic = true;
}
console.log(isEnergetic);