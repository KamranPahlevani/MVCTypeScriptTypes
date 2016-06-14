var primitiveTypes;
(function (primitiveTypes) {
    //any
    var data;
    var info;
    var doSomething = function (arg) {
        return arg;
    };
    var x = doSomething(5);
    //primitives
    var age = 35;
    var score = 14;
    var rating = 18;
    var hasData = true;
    var isReady = true;
    var isBald = function () { return 'no'; };
    var hasHair = !isBald();
    var firstName = 'Kamran';
    var lastName = 'Pahlevani';
    //string array
    function getArrayLength(x) {
        var len = x.length;
        return len;
    }
    var names = ['Kamran', 'Kami', 'Kamz'];
    var firstPerson = names[0];
    console.log(getArrayLength(names));
    //null
    var guitarSales = null;
    var animal = null;
    var orderDate = null;
    //undefined
    var quantity;
    var company = undefined;
    console.log('undefined examples');
    console.log(quantity);
    console.log(company);
})(primitiveTypes || (primitiveTypes = {}));
//# sourceMappingURL=primitiveTypes.js.map