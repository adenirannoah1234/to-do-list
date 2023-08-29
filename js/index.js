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


// tip calculator media queries, object and function.