let characters = [];

const animalList = document.getElementById('aList');
const animalContainer = document.getElementById('animal-container');


// Function to display animal details
function displayAnimalDetails(character) {
  animalContainer.innerHTML = ''; // Initially empty when not clicked

  // Display animal details when clicked
  const animalImage = document.createElement('img');
  animalImage.src = character.image;
  animalContainer.appendChild(animalImage);

  const votes = document.createElement('p');
  votes.textContent = `Votes: ${character.votes}`;
  animalContainer.appendChild(votes);

  // Add votes
  const voteButton = document.createElement('button');
  voteButton.textContent = 'Vote';
  voteButton.addEventListener('click', () => {
    character.votes++;
    votes.textContent = `Votes: ${character.votes}`;
  });

  // Reset votes
  const voteResetButton = document.createElement('button');
  voteResetButton.textContent = 'Reset Votes';
  voteResetButton.addEventListener('click', () => {
    character.votes = 0;
    votes.textContent = `Votes: ${character.votes}`;
  });

  animalContainer.appendChild(voteButton);
  animalContainer.appendChild(voteResetButton);
}

// Function for event listener & changing cursor to pointer
function MouseEventListener(element, character) {
  element.addEventListener('click', () => {
    displayAnimalDetails(character);
  });

  element.style.cursor = 'pointer';
}

fetch('http://localhost:3000/characters')
  .then(response => response.json())
  .then(characters => {


    // Display list of animal names
    characters.forEach(character => {
      const animalName = document.createElement('li');
      animalName.textContent = character.name;
      animalList.appendChild(animalName);

      MouseEventListener(animalName, character);
    });
  })


// Form
document.getElementById('animal-form').addEventListener('submit', function (event) {
  event.preventDefault();
  const nameInput = document.getElementById('characterName');
  const imageInput = document.getElementById('characterImage');

  const newCharacter = {
    name: nameInput.value,
    image: imageInput.value,
    votes: 0,
  };

  characters.push(newCharacter);

  const newAnimalName = document.createElement('li');
  newAnimalName.textContent = newCharacter.name;
  animalList.appendChild(newAnimalName);

  MouseEventListener(newAnimalName, newCharacter);

  // Reset input for other submissions
  nameInput.value = '';
  imageInput.value = '';
});





























/*
//CODE BEFORE USING FUNCTIONS


let characters = [];

const animalList = document.getElementById('aList');
const animalContainer = document.getElementById('animal-container')




fetch(`http://localhost:3000/characters`)
.then(response => response.json())
.then(characters => {
     
    
    //Display list of animal names
    characters.forEach(character => {
       const animalName = document.createElement('li')
       animalName.textContent = character.name;
       animalList.appendChild(animalName);

       //change cursor to pointer
       animalName.addEventListener('mouseover', function() {
        animalName.style.cursor = 'pointer';
        });
       
       animalName.addEventListener('click', () => {
        animalContainer.innerHTML = ''; //initially empty

        //Display animal details when clicked
        const animalImage = document.createElement('img');
        animalImage.src = character.image;
        animalContainer.appendChild(animalImage);

        const votes = document.createElement('p');
        votes.textContent = `Votes: ${character.votes}`
        animalContainer.appendChild(votes)
        
        //add votes
        const voteButton = document.createElement('button')
        voteButton.textContent = 'Vote';
        voteButton.addEventListener('click', () => {
            character.votes++;
            votes.textContent = `Votes: ${character.votes}`
        });

        //reset votes
        const voteResetButton = document.createElement('button'); 
        voteResetButton.textContent = 'Reset Votes'
        voteResetButton.addEventListener('click', () => {
            character.votes = 0;
            votes.textContent = `Votes: ${character.votes}`
        })

        animalContainer.appendChild(voteButton)
        animalContainer.appendChild(voteResetButton)

       });


    });
})

//form
document.getElementById('animal-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const nameInput = document.getElementById('characterName')
    const imageInput =document.getElementById('characterImage')

    const newCharacter = {
        name: nameInput.value,
        image: imageInput.value,
        votes:0
    }

    characters.push(newCharacter)
    const newAnimalName = document.createElement('li');
    newAnimalName.textContent = newCharacter.name;
    animalList.appendChild(newAnimalName);

    newAnimalName.style.cursor = 'pointer';

    newAnimalName.addEventListener('click',() => {
          displayAnimalDetails(newCharacter)
    })

    //reset input for other submissions
    nameInput.value = '';
    imageInput.value = '';
})

*/