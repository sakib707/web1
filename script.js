let textAreaEl = document.getElementById("text-area");
let totalCharacterEl = document.getElementById("total-character");
let remainingEl = document.getElementById("remaining");

let remainingCharacter = textAreaEl.getAttribute("maxlength");
    remainingEl.innerHTML = remainingCharacter;
    totalCharacterEl.innerHTML = 0;

    textAreaEl.addEventListener("keyup",function(){
        
        calculateCharacter();
    });

    function calculateCharacter(){
        let textAreaValue = textAreaEl.value;
        let textAreaLength = textAreaValue.length;
            totalCharacterEl.innerHTML = textAreaLength;
        let updateRemainingCharacter = remainingCharacter - textAreaLength;
            remainingEl.innerHTML = updateRemainingCharacter;
    };
