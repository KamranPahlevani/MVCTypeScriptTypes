/// <reference path="../typings/knockout/knockout.d.ts" />
var ambientDclaratons;
(function (ambientDclaratons) {
    var name = ko.observable('Kamran Pahlevani');
    var id = ko.observable(1);
    var guy = {
        id: id,
        fullName: name
    };
    var value = guy.fullName();
    //var value = guy.fullName;
    console.log(value);
})(ambientDclaratons || (ambientDclaratons = {}));
//# sourceMappingURL=ambientDeclarations.js.map