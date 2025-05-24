function tableSearch() {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('input');
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName('li');
  document.getElementById('clearButton').style.display = input.value ? 'inline' : 'none';

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    txtValue = li[i].textContent || li[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }

// If input is empty, remove active class from all tag buttons
  if (input.value.trim() === "") {
    const buttons = document.querySelectorAll('#tags button');
    buttons.forEach(btn => btn.classList.remove('active'));
  }

}

function selectTag(tag) {
  document.getElementById('input').value = tag;
  tableSearch(); // Reuse your existing function

    // Highlight the active button
  const buttons = document.querySelectorAll('#tags button');
  buttons.forEach(btn => {
    if (btn.textContent === tag) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

function clearSearch() {
  document.getElementById('input').value = "";
  tableSearch(); // Will also remove active highlights due to our earlier fix
}

