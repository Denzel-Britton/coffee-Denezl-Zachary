"use strict"

// Creating the table with all the coffee objects
function renderCoffee(coffee) {
    var html = '<div class="justify-content-between d-flex align-items-end flex-wrap">'
    html += '<h1>' + coffee.name + '</h1>';
    html += '<p>' + coffee.roast + '</p>';
    html += '</div>'
    return html;
}

// For loops through coffees array, and prints each coffee object into table
function renderCoffees(coffees) {
    var html = '';
    for(var i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

// Sorts coffees by roast, when you hit submit button
function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    });
    coffeeDiv.innerHTML = renderCoffees(filteredCoffees);

    if(selectedRoast === 'all') {
        coffeeDiv.innerHTML = renderCoffees(coffees)
    }
}

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

//TODO: When the page is loaded, the coffees should be printed by lowest id to highest id
//ex... ID 0
//      ID 1
//      ID 2

//TODO: Add functionality to search through the coffees by name, and display only the
// coffees that match the provided search term (You will need to add an input field to the existing form for this)

// TODO:Add functionality to update the displayed coffee as the user
//  types into the search box, or as soon as they select an option from the select.


var coffeeDiv = document.querySelector('#coffeeDiv');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');

coffeeDiv.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);
