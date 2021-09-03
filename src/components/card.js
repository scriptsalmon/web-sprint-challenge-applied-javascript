import axios from 'axios';

const Card = ({article}) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //

  const cardDiv = document.createElement('div');
    cardDiv.className = 'card';
  const headlineDiv = document.createElement('div');
    headlineDiv.className = 'headline';
  const authorDiv = document.createElement('div');
    authorDiv.className = 'author';
  const imgDiv = document.createElement('div');
    imgDiv.className = 'img-container';
  const imgItself = document.createElement('img')
  const nameSpan = document.createElement('span');

  cardDiv.appendChild(headlineDiv);
  cardDiv.appendChild(authorDiv);
  authorDiv.appendChild(imgDiv);
  authorDiv.appendChild(nameSpan);
  imgDiv.appendChild(imgItself);

  headlineDiv.textContent = article.headline;
  imgItself.src = article.authorPhoto;
  nameSpan.textContent = article.authorName;
  console.log(article.authorPhoto);

  return cardDiv;
}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
  axios.get(`http://localhost:5000/api/articles`)
    .then(res => {
      console.log(res.data);
      console.log(res.data.articles);
      // console.log(res.data.articles.bootstrap);

    }).catch(err => {
      console.error(err);
      const errorText = document.createElement('p');
      errorText.textContent = 'can you get one thing right?'
      document.body.appendChild(errorText);
    })
}

cardAppender(document.querySelector('.cards-container'));

export { Card, cardAppender }
