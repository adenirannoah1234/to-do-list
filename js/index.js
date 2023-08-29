const toDo = document.querySelector('#listing');
const submitBtn = document.querySelector('.submit')
const alert = document.querySelector('.alert');
const paraGraph = document.querySelector('.paragraph');

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
    }
})

function updateDate() {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1; // Months are zero-based
    const day = now.getDate();
    
    // Format the date as yyyy-mm-dd
    const formattedDate = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    
    // Update the content of the date element
    const dateElement = document.getElementById('date');
    dateElement.textContent = formattedDate;
  }
  
  // Update the date immediately and then set an interval to update it daily
  updateDate();
  setInterval(updateDate, 86400000); // Update every 86400000ms (24 hours)
    


// tip calculator media queries, object and function.