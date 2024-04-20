const globalVaraible = "global_var"

function outerFunc(param1){
    const variable1 = "var_one"

    function innerFunc(param2){
        const variable2 = "var_two"

        console.log("global variable", globalVaraible)
        console.log("variable1", variable1)
        console.log("variable2", variable2)
        console.log("param1", param1)
        console.log("param2", param2)
    }
    innerFunc("PARAM TWO")
}

outerFunc("PARAM ONE")