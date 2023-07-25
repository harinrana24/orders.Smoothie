// Harin rana 200532753
//main function that run the code

function code(){
    // to capture value 
    const milk = document.querySelector('input[name="milk"]:checked').value;
    const flavour = document.getElementById('flavour').value;
    const extras = document.querySelectorAll('input[name="extras"]:checked');
    const extraArary =[];
    const quantity = parseInt(document.getElementById('quantity').value)

   // to get the value and save in empty array
    extras.forEach(extra => {
              if (extra.checked){
               extraArary.push(extra.value)
              }
    });

    // object 
    const mysmoothie = new Smoothie(flavour, milk, extraArary, quantity);

    
   // to get values and update in the div 
    const smoothieDescription = document.getElementById('smtedescr');
    smoothieDescription.innerHTML = `
        <h3>Your Smoothie With </h3>
        <p>Flavor: ${mysmoothie.flavour}</p>
        <p>Milk Base: ${mysmoothie.milk}</p>
        <p>Extras: ${mysmoothie.extras.join(', ')}</p>
        <p>Quantity: ${mysmoothie.quantity}</p>
        <p>Your Smoothie Will be Ready in 5 Minutes..</p>
    `;

    
   
}

// constructor
class Smoothie {
    constructor(flavour, milk, extras, quantity) {
        this.flavour = flavour;
        this.milk = milk;
        this.extras = extras;
        this.quantity = quantity;
    }
}

// event listner that runs the code function
document.getElementById("orderButton").addEventListener("click", code)

// css when cliocked the button then it activates te style
function chan(){
    document.getElementById("smtedescr").classList.add('smtedescr');
}
