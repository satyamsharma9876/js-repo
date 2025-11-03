
//Immediately Invoked Function expressions (IIFE)
// or jo fn immedeatly invok hojaye & also to avoid pollution of global scope iife used


(function chai(){// named iife
    console.log(`DB connected`);  
})();// Apart from using chai() we did () b/c for immediatel invoke the fn and ; used to stop fn
//chai()

( function aurcode(){
    console.log(`DB connected Two`);    
})();

// simply (also can use Arrow fn here)()

( (name) => { // unnamed iife
    console.log(`DB connected Three ${name}`);
})('hitesh')





