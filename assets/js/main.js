
// creo variabile e prendo l'id lista
const elementSquare = document.getElementById("my_square");

// creo un ciclo da 1 a 100
for (let i = 1; i<=100; i++){
    console.log(i);
    // creo un elemento div
    let listSquare = document.createElement("div");
    elementSquare.append(listSquare)
    
// Condizioni numeri multipli
    if (i % 3 == 0 ){
        listSquare.append(`Fizz`)
        }
        
        else if (i % 5 == 0){
            listSquare.append(`Buzz`)
        }
        
       else if  (i % 5 == 0 && "i" % 3 == 0){
        listSquare.append(`FizzBuzz`)
        }

       else {
            listSquare.append(` ${i}`)
        }
    }




