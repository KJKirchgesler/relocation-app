$(document).ready(function() {

  // Adding event listeners to the form to create a new object, and the button to delete
  // an User
  $(document).on("click", "#signonSubmit", handleSignonFormSubmit);
 
  // Getting the initial list of Authors
  /*getAuthors(); */

  // A function to handle what happens when the form is submitted to create a new Author
  function handleSignonFormSubmit(event) {
    event.preventDefault();

    // Getting references to the signonform
    var unameInput = $("#userName").val();
    var emailInput = $("#email").val();
    var pswdInput = $("#password").val();

    console.log({
      userName: unameInput.trim(),
      email: emailInput.trim(),
      password: pswdInput
        .trim()
    })
    // Don't do anything if the name fields hasn't been filled out
    if (!unameInput.trim()) {
      return;
    }

    // Calling the upsertAuthor function and passing in the value of the name input
    upsertUser({
      username: unameInput.trim(),
      email: emailInput.trim(),
      password: pswdInput
        .trim()
    });
  }

  // A function for creating an author. Calls getAuthors upon completion
  function upsertUser(userData) {
    $.post("/api/users", userData)
      .then(console.log(userData));
  }



  // Function for handling what happens when the delete button is pressed
  /*function handleDeleteButtonPress() {
    var listItemData = $(this).parent("td").parent("tr").data("author");
    var id = listItemData.id;
    $.ajax({
      method: "DELETE",
      url: "/api/authors/" + id
    })
      .then(getAuthors);
  } */
}); 
