// Write your JavaScript code here!
// const {formSubmission} = require("./scriptHelper.js");

// const { pickPlanet } = require("./scriptHelper");

// const { myFetch } = require("./scriptHelper");

// const { pickPlanet } = require("./scriptHelper");

// const { myFetch } = require("./scriptHelper");

// const  formSubmission  = require("./scriptHelper");

window.addEventListener("load", function() {
    const button = document.getElementById("formSubmit");

    button.addEventListener("click", function(event){
        event.preventDefault();
        let pilot = document.querySelector("input[name=pilotName]");
        let copilot = document.querySelector("input[name=copilotName]");
        let fuelLevel = document.querySelector("input[name=fuelLevel]");
        let cargoLevel = document.querySelector("input[name=cargoMass]");
        let list = document.getElementById("faultyItems");
        
        formSubmission(document, list, pilot.value, copilot.value, fuelLevel.value, cargoLevel.value);
       
    });
    

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    listedPlanets = myFetch();;
    const listedPlanetsResponse = listedPlanets;
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        result = pickPlanet(listedPlanets);
        console.log(result);
        addDestinationInfo(document, result.name, result.diameter, result.star, result.distance, result.moons, result.image);
    })
    
 });