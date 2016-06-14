/// <reference path="../typings/knockout/knockout.d.ts" />

declare var ko: KnockoutStatic;

module ambientDclaratons {
    var name = ko.observable('Kamran Pahlevani');
    var id = ko.observable(1);
    var guy = {
        id: id,
        fullName: name
    };

    var value: string = guy.fullName();
    //var value = guy.fullName;
    console.log(value);
}




