     document.getElementById('fetchUserDataBtn').addEventListener('click', fetchUserData);
    
        function fetchUserData(){
            fetch('./data.json')
                .then(response => response.json())
                .then(users => {
                    console.log(users)
                    let output = '<h2>कोरोना लाइव ट्रैकर By Neetish Kumar</h2>';
                    output += '<div class="main-card">';
                    users.forEach(function(user) {
                        output += `
                            <div class="card">
                            <div class="color-overlay">
                            <h1 class="heading">
                                ${user.displayName}
                            </h1>
                            <h2 class="heading2">सक्रिय केसेस: ${user.totalConfirmed}</h2>
                            <h2 class="heading2">रिकवर हुए केसेस: ${user.totalConfirmed}</h2>
                            <h2 class="heading2">जानलेवा केसेस: ${user.totalDeaths}</h2>
                            <p class="last-updte">${user.lastUpdated}</p>
                            </div>
                            </div>
                        `;
                    });
                    output += '</div>'
                    document.getElementById("response").innerHTML = output;
                });
        }
