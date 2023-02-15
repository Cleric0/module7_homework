const box = {
    book: "red",
    apple: "green"
}

const str =  "apple";

function search(str, box){
    if (str in box) {
        console.log(true);
    } else {
        console.log(false);
    }
}
search(str, box); 

