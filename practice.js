

//ex 1
console.log('Numere de la 0 la 20');
for (i=1; i<=20; i++){
    console.log(i);
}

//ex 2
console.log('Numere pare de la 0 la 20');
for (i=1; i<=20; i++){
     if (i % 2 == 0){
        console.log(i);}
}

//ex 3
console.log('Suma');
var numbers=[4,56,77,8,90,234,55,77,98,19,77,8]

function sumNr(numbers){
    sum=0;
    for (i=0; i<numbers.length; i++){
         sum=sum+numbers[i];
    }
    return sum;
}

console.log(sumNr(numbers));

//ex 4
console.log('Maximul dintre numere');
function maxNr(numbers){
    max=0;
    for (i=0; i<numbers.length; i++){
        if (max<numbers[i]){
           max=numbers[i];
        }
    }
    return max;
}

console.log(maxNr(numbers));


//ex 5
console.log('Numaratoare')
var number=window.prompt('Choose a number to see how many times it appears in the array')

function nrOf(numbers){
    y=0;
    for (i=0; i<numbers.length; i++){
        if (numbers[i] == number){
            y++;
        }
    }
    return y;
}

console.log('Numarul ' + number + ' apare de ' + nrOf(numbers) + ' ori');

//extra ex
console.log('Matrice')
var number=window.prompt('Choose a number for the matrix')
var a=[];
function matrix(number){
    for (i=0; i<=number-1; i++){
        if (i % 2 == 0) {
            el=0;
        }
        else { el=1}
        a[i]=[];
        for (j=0; j<=number-1; j++){
            a[i][j]=el;
            if (el==0){
                el=1;
            }
            else {el=0}
        }
    }
    return a;
}

console.log(matrix(number));





