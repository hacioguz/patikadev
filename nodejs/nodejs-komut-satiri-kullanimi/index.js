let arguments = process.argv.slice(2);

function circleArea(r) {
    let pi = 3.14159265359;
    let result = pi * (r * r);

    console.log(`Yarıçapı r=${r} olan dairenin alanı πr^2 =${result}`);
}

circleArea(arguments[0] * 1);