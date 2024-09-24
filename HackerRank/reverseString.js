function reverseStr(str){
    let word = ''
    let result = ''

    for(let i = str.length-1; i >= 0; i--){
        if(str[i] !== ' '){
            word += str[i];
        }else{
            corrWord = word.split('').reverse().join('');
            result += corrWord + ' ';
            word = '';
        }
    }

    if(word.length > 0){
        corrWord = word.split('').reverse().join('');
        result +=  corrWord;
    }

    console.log(result);
    }

    reverseStr('Welcome to the Celestial');