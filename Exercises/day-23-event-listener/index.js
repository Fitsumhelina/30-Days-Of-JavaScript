document.addEventListener("DOMContentLoaded", (e) => {
  const number = document.querySelector("#num");
  const button = document.querySelector("#generate");
  var val = 0;
  number.addEventListener("input", (e) => {
    if (e.target.value.length > 0) {
      button.disabled = false;
    } else {
      button.disabled = true;
    }
    val = e.target.value;
  });

  button.addEventListener("click", () => {
    const num = parseInt(val);

    for (let i = 0; i < val; i++) {
      var div = document.createElement("div");
      div.style.width = "100px";
      div.style.height = "100px";
      div.textContent = i + 1;
      if ((i + 1) % 2 === 0) {
        div.style.backgroundColor = "red";
      } else {
        div.style.backgroundColor = "blue";
      }

      // Append the div to the body
      document.body.appendChild(div);
    }
  });
});
