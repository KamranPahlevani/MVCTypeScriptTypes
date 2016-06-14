
module primitiveTypes {
    //any
    var data: any;
    var info;
    var doSomething: any = function (arg: any) {
        return arg;
    }
    var x: any = doSomething(5);

    //primitives
    var age: number = 35;
    var score: number = 14
    var rating = 18;

    var hasData: boolean = true;
    var isReady = true;
    var isBald = function () { return 'no' }
    var hasHair = !isBald();

    var firstName: string = 'Kamran';
    var lastName = 'Pahlevani';

    //string array
    function getArrayLength(x: string[]) {
        var len: number = x.length;
        return len;
    }

    var names: string[] = ['Kamran', 'Kami', 'Kamz'];
    var firstPerson = names[0];
    console.log(getArrayLength(names));

    //null
    var guitarSales: any = null;
    var animal = null;
    var orderDate: Date = null;

    //undefined
    var quantity: number;
    var company = undefined;
    console.log('undefined examples');
    console.log(quantity);
    console.log(company); 
}