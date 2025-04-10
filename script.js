const joke = document.getElementById("joke");
const buttongenJoke = document.getElementById("genJoke");

async function getRandomJoke() {
    try {
      // Fetching the joke from the Chuck Norris jokes API
      const response = await fetch('https://api.chucknorris.io/jokes/random');
      const data = await response.json();
  
      // Display the joke in the 'joke' container
      joke.textContent = `"${data.value}"`;
    } catch (error) {
      joke.textContent = "Oops! Something went wrong. Please try again.";
    }
  }
  
  // Add event listener to the button to generate a joke when clicked
  buttongenJoke.addEventListener('click', getRandomJoke);

