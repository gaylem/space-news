const apiKey = '4LI6zdP9bsTQ8EtctAniacB3nVF7t2fceEa3SIgF';
const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

document.addEventListener('DOMContentLoaded', () => {
  let img = document.getElementById('photo');
  let caption = document.getElementById('caption');
  let title = document.getElementById('title');
  let date = document.getElementById('date');
  let copyright = document.getElementById('copyright');

  fetch(url)
    .then(data => data.json())
    .then(data => {
      console.log(data);
      img.src = data.hdurl;
      caption.innerText = data.explanation;
      title.innerText = data.title;
      if (data.copyright === undefined) copyright.style.display = 'none';
      else copyright.innerText = data.copyright;
      date.innerText = data.date;
    });
});
