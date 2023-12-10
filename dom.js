document.addEventListener('DOMContentLoaded', function () {
    const main = document.querySelector('main');
  
    const joke1 = "Why don't scientists trust atoms? Because they make up everything!";
    const joke2 = "Parallel lines have so much in common. It's a shame they'll never meet.";
    const joke3 = "Why did the scarecrow win an award? Because he was outstanding in his field!";
  
    const template = `
      <h2>My Jokes</h2>
      <ul>
        <li>${joke1}</li>
        <li>${joke2}</li>
        <li>${joke3}</li>
      </ul>
    `;
  
    main.innerHTML = template;
  
    const paragraph = document.createElement('p');
    paragraph.textContent = "That's all folks!";
  
    document.body.appendChild(paragraph);
  });
  