fetch(`http://localhost:3000/characters`)
.then(response => response.json())
.then(characters => {
     
    const characterList = document.getElementById('aList');
    
    //Display list of animal names
    characters.forEach(character => {
       const animalName = document.createElement('li')
       animalName.textContent = character.name;
       characterList.append(animalName);


       //Display animal details 
        fetch(`http://localhost:3000/characters/${character.id}`)
        .then(response => response.json())
        .then(animal => {
            const animalDetails = document.getElementById('animal-container')

            const animalName = document.createElement('span')
            animalName.textContent = `Name: ${animal.name}`

            const animalImage = document.createElement('img')
            animalImage.src = animal.image;

            const votes = document.createElement('p');
            votes.textContent = `Number of Votes: ${animal.votes}`
            
            animalDetails.appendChild(animalName)
            animalDetails.appendChild(animalImage)
            animalDetails.appendChild(votes)
           

            //vote button
            const voteButton = document.createElement('button')
            voteButton.textContent = 'Vote';
            voteButton.addEventListener('click', () => {
                animal.votes++;
                votes.textContent = `Number of Votes: ${animal.votes}`
               // animalDetails.appendChild(voteButton)

            });

           animalDetails.appendChild(voteButton)
        })
    });
})
