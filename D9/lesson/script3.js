//Function
const displayUserData= async() =>{



// Function expression to fetch and display user data
// Select the user container element
const userContainer = document.getElementById("userContainer");

try{
    // Fetch user data from the JSONPlaceholder API
    const response = await fetch("https://jsonplaceholder.typicode.com/users")

    if (!response.ok) {
        throw new Error("Failed to fetch data.");
      }
      const data = await response.json();
      //console.log(data);

      let html = '';
      data.forEach((user)=>{
        //Generate HTML markup for each user
        html +=`
        <div class="col">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">
                    ${user.name}
                    </h5>
                    <h6 class="card-subtitle mb-2 text-muted">
                    ${user.email}
                    </h6>
                    <p class="card-text">Username: ${user.username}</p>
                    <p class="card-text">Phone: ${user.phone}</p>
                    <a href="${user.website}" class="card-link">Website</a>
                </div>
            </div>
        </div>
        `;

      })
      //insert the generated HTML markup into the user container
      userContainer.innerHTML=html;


} catch(error){

    userContainer.innerHTML="An error occured while fetching data";
    console.error(error);
}


}
// Button click event listener to call the displayUserData function
const fetchButton = document.getElementById("fetchButton");
fetchButton.addEventListener('click', displayUserData);