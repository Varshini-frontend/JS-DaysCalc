function calculateDays() {
    const date1 = new Date(document.getElementById('date1').value);
    const date2 = new Date(document.getElementById('date2').value);
    const timeDiff = Math.abs(date2 - date1);
    const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
    document.getElementById('result').innerText = `Difference: ${diffDays} days`;
}