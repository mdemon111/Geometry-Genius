function calculateTriangleArea() {
    //    get triangle base value
    const baseField = document.getElementById("triangle-base");
    const baseValueText = baseField.value;
    const base = parseFloat(baseValueText)
    console.log(base);
    // get triangle height value
    const heightField = document.getElementById("triangle-height");
    const heightValueText = heightField.value;
    const height = parseFloat(heightValueText);
    console.log(height);

    const area = 0.5 * base * height;
    console.log(area);

    const areaSpan = document.getElementById("traiangle-area");
    areaSpan.innerText = area;
}

function calculateRectangleArea() {
    const widthField = document.getElementById('rectangle-width');
    const widthValue = widthField.value;
    const width = parseFloat(widthValue)
    console.log(width);

    const rectangleField = document.getElementById('rectangle-length');
    const rectangleValueText = rectangleField.value;
    const length = parseFloat(rectangleValueText);
    console.log(length);

    const area = width * length;   
    const rectangleAreaSpan = document.getElementById('rectangle-area')
    rectangleAreaSpan.innerText = area
}