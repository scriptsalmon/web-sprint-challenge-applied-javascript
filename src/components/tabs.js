import axios from 'axios';

const Tabs = (topics) => {
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //

  const topicsDiv = document.createElement('div');
  const tabDiv = document.createElement('div');

  // for(let i = 0; i < topics.length; i++){
  //   tabDiv[i].textContent =  topics[i];
  // }

  // topics.forEach(topic => {
  //   tabDiv.textContent = topic;
  // })

  tabDiv[i].textContent = topics[i];

  topicsDiv.className = 'topics';
  tabDiv.className = 'tab';

  topicsDiv.appendChild(tabDiv);

  return topicsDiv;
}

const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5000/api/topics` (test it in Postman/HTTPie!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
  axios.get(`http://localhost:5000/api/topics`)
    .then(res => {
      // console.log(res.data.topics);
      for (let i = 0; i < res.data.length; i++){
        const tabElem = Tabs(res.data.topics);
        selector.appendChild(tabElem);
      }
    }).catch(err => {
      console.error(err);
    })
}

tabsAppender(document.querySelector('.tabs-container'));

export { Tabs, tabsAppender }
