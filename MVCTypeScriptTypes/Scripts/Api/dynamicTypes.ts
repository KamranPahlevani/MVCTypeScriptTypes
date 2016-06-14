
module dynamicTypes {
    var person1 : string;
    person1 = 'Kamran Pahlevani';
    console.log(person1.substring(1, 4));

    var person2 = {
        name: 'Kamran',
        age: 35
    };
    console.log(person2.name.substring(1, 4));
}