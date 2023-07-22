function bookTour(event) {
    event.preventDefault();
    const location = document.querySelector('input[list="mylist"]').value;
    const date = document.querySelector('.date').value;
    if (location.trim() === '' || date.trim() === '') {
        alert('Please fill in all the fields.');
        return false;
    }
    const popup = document.getElementById('popupMessage');
    popup.classList.add('show-popup');
    setTimeout(() => {
        popup.classList.remove('show-popup');
        window.location.href = 'index.html';
    }, 2000);
    return false;
}
