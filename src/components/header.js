const title = "Lambda Times";
const date = "Sep 2021";
const temp = "Hear ye, hear ye!...";


const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
  const header = document.createElement('div');
  const dateSpan = document.createElement('span');
  const titleh1 = document.createElement('h1');
  const tempSpan = document.createElement('span');

  header.className = 'header';
  dateSpan.className = 'date';
  tempSpan.className = 'temp';

  dateSpan.textContent = date;
  titleh1.textContent = title;
  tempSpan.textContent = temp;

  header.appendChild(dateSpan);
  header.appendChild(titleh1);
  header.appendChild(tempSpan);

  return header;
}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  const headerElement = Header(title, date, temp);
  // console.log(headerElement);
  selector.appendChild(headerElement);
  // errors but it works! ^^^ WHY? D:<

}

headerAppender(document.querySelector('.header-container'));
// headerAppender(document.querySelector('.header-container'));
// headerAppender(document.querySelector('.header-container'));


export { Header, headerAppender }
