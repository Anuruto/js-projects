console.log("Hello World");

// Constructor
function Book(name, author, type) {
  this.name = name;
  this.type = type;
  this.author = author;
}

// Display Costructor
function Display() {}

// add methods to display prototype
Display.prototype.add = function (book) {
  console.log("adding to ui");
  const tableBody = document.getElementById("tableBody");
  let tableCode = ` <tr>
                        <td> ${book.name} </td>
                        <td>${book.author}</td>
                        <td>${book.type}</td>
                    </tr>`;

  tableBody.innerHTML += tableCode;
};
Display.prototype.clear = function () {
  libraryForm.reset(); //Resets || clears the form
};

Display.prototype.validate = function (book) {
  if (book.name.length < 2 || book.author.length < 2) {
    return false;
  } else {
    return true;
  }
};

Display.prototype.show = function (type, message) {
  const msg = document.getElementById("msg");
  msg.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                            <strong>NOTE:</strong> ${message}
                            <button type="button" id="clooseBtn"    class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                            </button>
                        </div>`;

  let ghatka = document.getElementById("clooseBtn");

  setTimeout(() => {
    ghatka.click();
  }, 5000);
};

// Add submit event listener to form
let libraryForm = document.getElementById("libraryForm");

libraryForm.addEventListener(`submit`, (e) => {
  e.preventDefault();

  const fiction = document.getElementById("fiction");
  const programming = document.getElementById("programming");
  const cooking = document.getElementById("cooking");

  //---------------------------------------------------------------------------------------

  let type;
  if (fiction.checked) {
    type = fiction.value;
  } else if (programming.checked) {
    type = programming.value;
  } else if (cooking.checked) {
    type = cooking.value;
  }

  //---------------------------------------------------------------------------------------

  const nameOfBook = document.getElementById("bookName").value;
  const author = document.getElementById("author").value;
  const book = new Book(nameOfBook, author, type);

  //---------------------------------------------------------------------------------------

  let display = new Display();
  if (display.validate(book)) {
    display.add(book);
    display.clear();
    display.show("success", "Book added!🎉🎉🎉!");
  } else {
    // show err to the user
    display.show("warning", "Sorry, You can't add THAT book");
  }
  //*   console.log(book);
});

/* <div class="alert alert-success" role="alert">
  A simple success alert—check it out!
</div> */
