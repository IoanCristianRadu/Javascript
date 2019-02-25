// Var is scoped to the function; Let is scoped to the block
// var -> function
// let -> block
// const -> block

function myVar() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }

    console.log(i);
    console.log("-------")
}

function myLet() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }

    //ERROR
    //console.log(i);
    console.log("-------")
}

myVar();
myLet();