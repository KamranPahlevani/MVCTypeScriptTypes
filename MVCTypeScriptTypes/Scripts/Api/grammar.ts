var x = 1;

var y;

var firstName = 'Kamran';

var lastName: string = 'Pahlevani'; 

var num1 = 100;

var num2: number = 200;

function addNumbers1(n1, n2, n3) {
    var result = n1 + n2 + n3;
    var msg = 'Sum is = ' + result;
    alert(msg);
}

function addNumbers2(n1: number, n2: number, n3: number) {
    var result = n1 + n2 + n3;
    var msg = 'Sum is = ' + result;
    alert(msg);
}


addNumbers1(num1, num2, lastName);

addNumbers2(num1, num2, 300);