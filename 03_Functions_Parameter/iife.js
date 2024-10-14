(function name(){//Named IIFE
    console.log(`Hello`);
    
})();

( (name) => {//IIFE
    console.log(`hello ${name}`);
    
})("Shubham");

