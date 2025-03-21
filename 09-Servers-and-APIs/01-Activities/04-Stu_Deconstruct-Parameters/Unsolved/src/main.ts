import './style.css';

// Explain each parameter in comments below.
const REQUEST_URL =
  'https://api.github.com/repos/nodejs/node/issues?per_page=10&state=open&sort=created&direction=desc';

  //getting array of 10 pages
  //indicates the state of the issue is open
  //sort by created date
  //sort descending (newest to oldest)
fetch(REQUEST_URL)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });
