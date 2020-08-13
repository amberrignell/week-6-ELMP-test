const message = document.querySelector('.message__text');
const author = document.querySelector('.author');

fetch("/read-fortune")
  .then(res => {
    if (!res.ok) {
      throw new Error("Server error");
    }
    return res;
  })
  .then(res => res.json())
  .then(data => { 
        message.innerHTML = data.message;
        author.innerHTML = data.author;
    })
  .catch(err => console.error(err));