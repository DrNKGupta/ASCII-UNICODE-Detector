function detectCharacter(){

    const characterInput = document.getElementById("characterInput");

    const result = document.getElementById("result");

    const character = characterInput.value;

    if(isAscii(character)){
        result.innerText='The entered character is an ASCII character';
    }
    else{
        result.innerText= 'The entered character is an UNICODE';
    }

}

function isAscii(character){

    return character.charCodeAt(0)<=127;
}