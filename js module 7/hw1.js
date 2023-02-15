const box = {
    book: "red",
    note: "yelow"
}

const bookReading = Object.create(box);

bookReading.ownBook =  "green";
bookReading.ownnote =  "blue";

function callOwnProp(){

    for (let key in bookReading) {
        if (bookReading.hasOwnProperty(key)) {
            console.log(key);
        }   
    }
}
console.log(bookReading.book)
