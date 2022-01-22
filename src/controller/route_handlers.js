
export function renderHome(request, response){
    console.log("home")
    return response.send("Home Rendered");
}

export function goToNext(request, response){
    console.log("gotonext")
    return response.send("Next Page");
}

export function getHint(request, response){
    console.log("get hint");
    console.log(request.params);
    return response.send("Get Hint");
}

export function getSolution(request, response){
    console.log("getSolution")
    return response.send("Get Solution");
}