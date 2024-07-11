"use strict";
var ResponseStatus;
(function (ResponseStatus) {
    ResponseStatus[ResponseStatus["Success"] = 0] = "Success";
    ResponseStatus[ResponseStatus["NotFound"] = 1] = "NotFound";
    ResponseStatus[ResponseStatus["Error"] = 2] = "Error";
})(ResponseStatus || (ResponseStatus = {}));
function doSomething(response) {
    let output = "";
    switch (response) {
        case ResponseStatus.Success:
            output = "Success";
            break;
        case ResponseStatus.NotFound:
            output = "Not found";
            break;
        case ResponseStatus.Error:
            output = "Error";
            break;
    }
    console.log(output);
}
doSomething(ResponseStatus.Success);
doSomething(ResponseStatus.NotFound);
doSomething(ResponseStatus.Error);
