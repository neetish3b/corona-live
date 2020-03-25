document
  .getElementById("fetchUserDataBtn")
  .addEventListener("click", fetchUserData);

function fetchUserData() {
  fetch("./data.json")
    .then(response => response.json())
    .then(users => {
      console.log(users);
      let output = `<h5 class="heading5">कोरोना लाइव ट्रैकर By Neetish Kumar</h5>`
      output += '<div class="row">';
      users.forEach(function(user) {
        output += `
          <div class="col-sm-4">
                  <div class="card">
                  <div class="color-overlay">
                  <h1 class="heading">
                      ${user.displayName}
                  </h1>
                  <h2 class="heading2">सक्रिय केसेस: ${user.totalConfirmed}</h2>
                  <h2 class="heading2">रिकवर हुए केसेस: ${user.totalRecovered}</h2>
                  <h2 class="heading2">जानलेवा केसेस: ${user.totalDeaths}</h2>
                  <p class="last-updte">${user.lastUpdated}</p>
                  </div>
                  </div>
                  </div>
                        `;
      });
      output += "</div>";
      document.getElementById("response").innerHTML = output;
    });
}
