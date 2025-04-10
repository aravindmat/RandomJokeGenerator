const joke = document.getElementById("joke");
const buttongenJoke = document.getElementById("genJoke");

async function getRandomJoke() {
    try {
      
      const response = await fetch('https://api.chucknorris.io/jokes/random');
      const data = await response.json();
  
      
      joke.textContent = `"${data.value}"`;
    } catch (error) {
      joke.textContent = "Oops! Something went wrong. Please try again.";
    }
  }
  
  
  buttongenJoke.addEventListener('click', getRandomJoke);

