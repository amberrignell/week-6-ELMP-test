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
        message.textContent = data;
        // author.innerHTML = data.author;
    })
  .catch(err => console.error(err));

  let buttons = document.querySelectorAll("button");

		buttons[0].addEventListener("click", () => {
			location.href = "/read-fortune-page"
		})

		buttons[1].addEventListener("click", () => {
			location.href = "/form"
    })
    
    document.querySelector("#button-home").addEventListener("click", () => {
			location.href = "/"
		})