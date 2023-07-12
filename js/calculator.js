function showFields() {
    var calculation = document.getElementById('Select').value;
    var radiusField = document.getElementById('radiusField');
    var areaField = document.getElementById('areaField');

    if (calculation === "radiusHeight") {
        radiusField.style.display = "block";
        areaField.style.display = "none";
    }
    else if (calculation === "areaHeight") {
        radiusField.style.display = "none";
        areaField.style.display = "block";
    }

    clearInput();
}

function clearInput(){
    document.getElementById('radius').value = "";
    document.getElementById('base').value = "";
    document.getElementById('height').value = "";
}

function calculate() {
    var radius = document.getElementById('radius').value;
    var area = document.getElementById('base').value;
    var height = document.getElementById('height').value;
    var volume;

    var calculation = document.getElementById('Select').value;

    if (calculation === "radiusHeight") {
        volume = Math.PI * Math.pow(radius, 2) * height;
    }
    else if (calculation === "areaHeight") {
      volume = area * height;
    }

    document.getElementById('result').innerHTML = "V = " + volume.toFixed(3) + " см³";
    document.getElementById("result").scrollIntoView({ behavior: 'smooth' });
}


