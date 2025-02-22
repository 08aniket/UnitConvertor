const conversionRates = {
    length: {
        inches: {
            centimeters: 2.54,
            meters: 0.0254,
            feet: 0.0833333
        },
        centimeters: {
            inches: 0.393701,
            meters: 0.01,
            feet: 0.0328084
        },
        meters: {
            centimeters: 100,
            inches: 39.3701,
            feet: 3.28084
        },
        feet: {
            centimeters: 30.48,
            inches: 12,
            meters: 0.3048
        }
    },
    weight: {
        kilograms: {
            pounds: 2.20462
        },
        pounds: {
            kilograms: 0.453592
        }
    },
    volume: {
        liters: {
            gallons: 0.264172
        },
        gallons: {
            liters: 3.78541
        }
    }
};

document.getElementById('convertBtn').addEventListener('click', function() {
    const inputValue = parseFloat(document.getElementById('inputValue').value);
    const inputUnit = document.getElementById('inputUnit').value;
    const outputUnit = document.getElementById('outputUnit').value;

    if (isNaN(inputValue)) {
        alert('Please enter a valid number');
        return;
    }

    let result;

    // Determine the category of the input unit
    let category;
    if (conversionRates.length[inputUnit]) {
        category = 'length';
    } else if (conversionRates.weight[inputUnit]) {
        category = 'weight';
    } else if (conversionRates.volume[inputUnit]) {
        category = 'volume';
    } else {
        alert('Invalid unit');
        return;
    }

    // Check if the output unit is in the same category
    if (conversionRates[category][inputUnit] && conversionRates[category][inputUnit][outputUnit] !== undefined) {
        result = inputValue * conversionRates[category][inputUnit][outputUnit];
    } else {
        alert('Conversion not applicable between different categories');
        return;
    }

    document.getElementById('result').innerText = `Result: ${result.toFixed(2)} ${outputUnit}`;
});
