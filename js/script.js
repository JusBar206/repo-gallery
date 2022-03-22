const overview = document.querySelector(".overview");
const username = "jusbar206";

const gitUserInfo = async function () {
    const userInfo = await fetch(`https://api.github.com/users/${jusbar206}`);
    const data = await userInfo.json();

    displayUserInfo(data);
    console.log(data); //This is what I dont understand
};

gitUserInfo();

const displayUserInfo = function (data) {
    const div = document.createElement("div");
    div.classList.add("user-info");
    div.innerHTML = `
    
    **the stuff in the brackets is the info im trying to get but cant understand how to get it**
    
    <figure>
      <img alt="user avatar" src=${data.avatar_url} /> 
    </figure>
    <div>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Bio:</strong> ${data.bio}</p>
      <p><strong>Location:</strong> ${data.location}</p>
      <p><strong>Number of public repos:</strong> ${data.public_repos}</p>
    </div>
  `;
  overview.append(div);
};

