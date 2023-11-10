function subscribe() {
    const buttonElement = document.querySelector('.js-subscribe-button');

    if (buttonElement.innerText === 'Subscribe') {
        buttonElement.innerHTML = 'Subscribed';
    }
    else {
        buttonElement.innerHTML = 'Subscribe';
    }
}


function calculateTotal() {

    const inputElement = document.querySelector('.js-cost-input');
    let cost = Number(inputElement.value);


    if (cost < 40) {

        cost = cost + 10;
    }

    document.querySelector('.js-total-cost').innerHTML = '$' + { cost };
}



//2nd project


var myName = document.querySelector('#myname');

var btn = document.querySelector('#add');

check = 0

btn.addEventListener('click', function () {

    if (check === 0) {
        myName.style.color = 'Red';
        // myName.innerHTML = 'Kashem Mia';
        check = 1;
        btn.innerHTML = "Remove";
        btn.style.backgroundColor = 'red';


    }
    else {

        myName.style.color = 'black';
        btn.style.backgroundColor = 'black';
        btn.innerHTML = 'Add me';
        check = 0;
    }


});

// 2nd end 


var con = document.querySelector(".container");
var love = document.querySelector("i")

con.addEventListener("dblclick", function () {

    love.style.transform = "translate(-50%, -50%) scale(1)";
    love.style.opacity = "0.8";

    setTimeout(function () {
        love.style.transform = "translate(-50%, -50%) scale(0)";
    }, 2000)

    setTimeout(function () {
        love.style.opacity = 0;
    }, 1000)

});





