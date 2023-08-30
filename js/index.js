const toDo = document.querySelector('#listing');
const submitBtn = document.querySelector('.submit')
const alert = document.querySelector('.alert');
const paraGraph = document.querySelector('.paragraph');
document.querySelector('.nav').innerHTML = `<nav>
<a href="/">TODO</a>
<a href="#">ABOUT</a>
</nav>
`;


submitBtn.addEventListener('click', function (e) {
    e.preventDefault()
    if (toDo.value === '') {
        alert.style.display = 'block';
        alert.textContent = 'Please Fill in the fields!';
        setTimeout(function () {
            alert.style.display = 'none';
        }, 5000)
    } else {
        paraGraph.innerHTML += `<p>${toDo.value}</p>`
        toDo.value = '';
    }
})

function updateDate() {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1; // Months are zero-based
    const day = now.getDate();

    const formattedDate = `${year} - ${month} - ${day}`;
    
    // Update the content of the date element
    const dateElement = document.getElementById('date');
    dateElement.textContent = formattedDate;
  }
  
  // Update the date immediately and then set an interval to update it daily
  updateDate();
  setInterval(updateDate, 86400000); // Update every 86400000ms (24 hours)
  


// tip calculator media queries, object and function.

// local storage

// localStorage.setItem('username', 'Noah');
// localStorage.setItem('AGE', '25');
// const x = localStorage.getItem('username')
// document.querySelector('.localstorage').textContent = x