function Pattern(n){
    for(let i = 0; i < n; i++){
        console.log('*');
    }

    for(let i = 0; i < n-2; i++){
        console.log('*\n');
    }

    for(let i = 0; i < n; i++){
        console.log('*');
    }
}

const pat = Pattern(5);