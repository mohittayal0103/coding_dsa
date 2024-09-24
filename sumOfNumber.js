function sumNumber(number){
    let sun = 0;

    while(number > 0 ){
        let digit = number % 10;

        sun += digit;

        number = Math.floor(number / 10);
    }

    console.log(sun);
}

const num = sumNumber(12345)