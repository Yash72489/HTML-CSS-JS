function showContainer(number) {
    const container1 = document.getElementById('container1');
    const container2 = document.getElementById('container2');
    const container3 = document.getElementById('container3');
    container1.style.display = 'flex';
    container2.style.display = 'none';
    container3.style.display = 'none';

    if (number === 1) {
        container1.style.display = 'flex';
    } else if (number === 2) {
        container2.style.display = 'flex';
    } else {
        container3.style.display = 'flex';
    }
}