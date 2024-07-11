enum ResponseStatus {
    Success,
    NotFound,
    Error
}

function doSomething(response: ResponseStatus): void {
    let output = "";
    switch (response){
        case ResponseStatus.Success: output = "Success"
            break;
        case ResponseStatus.NotFound: output = "Not found"
            break;
        case ResponseStatus.Error: output = "Error"
            break;
    }
    console.log(output);
}

doSomething(ResponseStatus.Success)
doSomething(ResponseStatus.NotFound)
doSomething(ResponseStatus.Error)