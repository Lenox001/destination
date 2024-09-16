function addDreamDestination(){
    const destination=document.getElementById("journeyList")
    const destinationInput=document.getElementById("destinationInput").value.trim()
    const activityInput=document.getElementById("activityInput").value.trim()
const newList=document.createElement("li")
newList.textContent=destinationInput
newList.style.listStyleType="square"
 const newActivity=document.createElement("p")
 newActivity.textContent=activityInput
destination.append(newList,newActivity)   
let dreamDestinations = JSON.parse(localStorage.getItem('listKey')) || [];

    dreamDestinations.push({
        destination: destinationInput,
        activity: activityInput
    });

    localStorage.setItem('listKey', JSON.stringify(dreamDestinations)) 
}
function displayDreamDestinations() {
    const retrievedDestinations = document.getElementById('retrievedDestinations');
    retrievedDestinations.innerHTML = '';  // Clear the list before appending

    let dreamDestinations = JSON.parse(localStorage.getItem('listKey')) || [];

    dreamDestinations.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item.destination;

        const activityItem = document.createElement('p');
        activityItem.textContent = item.activity;

        retrievedDestinations.append(listItem, activityItem);
    });
}

// Call displayDreamDestinations on page load
window.onload = displayDreamDestinations;
