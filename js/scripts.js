var replace = function(sentence, toReplace, newWord){
    return sentence.replace(toReplace, newWord);
};

$(document).ready(function() {
    $("form#str").submit(function(event){
        var str = $("input#str").val();
        var toReplace = $("input#toreplace").val();
        var newWord = $("input#newWord").val();
        var result = replace(str, toReplace, newWord);
        $(".string").text(result);
        $("#result").show();
        event.preventDefault();
    });
});

//**Trying to make the sentence words populate a html selector**

// function setOption(str)
// {
//     var strArr = str.split(" ");
//     var selector = document.getElementById("selectword");
//     for(var i = 0; i < strArr.length; i++){
//         var option = document.createElement("option");
//         option.innerHTML = strArr[i];
//         option.value = strArr[i];
//         sel.appendChild(option);
//     }
// }

// $(document).ready(function() {
//     $("form#str").submit(function(event){
//         var str = $("form#string").val();
//         var strArr = str.split(" ");
//         var selector = document.getElementById("selectword");
//         for(var i = 0; i < strArr.length; i++){
//             var option = document.createElement("option");
//             option.innerHTML = strArr[i];
//             option.value = strArr[i];
//             sel.appendChild(option);
//         }
//
//         event.preventDefault();
//     });
// });
