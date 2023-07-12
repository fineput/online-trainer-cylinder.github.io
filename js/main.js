function showCalculator() {
    document.getElementById("Calculator").style.display = 'block';
    document.getElementById("Instuctions").style.display = 'none';
    document.getElementById("Theory").style.display = 'none';
}

function showInstuctions() {
    document.getElementById("Calculator").style.display = 'none';
    document.getElementById("Instuctions").style.display = 'block';
    document.getElementById("Theory").style.display = 'none';
}

function showTheory() {
    document.getElementById("Calculator").style.display = 'none';
    document.getElementById("Instuctions").style.display = 'none';
    document.getElementById("Theory").style.display = 'block';
}

window.onload = function() {
    showCalculator(); // Викликати showCalculator() під час завантаження сторінки
   

    areaField.style.display = "none";  // Приховуємо поле введення площі основи
}