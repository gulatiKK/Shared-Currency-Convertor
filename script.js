function Check(){
    userChoice = document.getElementById('OC').value;
    amt = document.getElementById('amount').value;

if(userChoice === 'AUD'){
    document.getElementById('1').innerHTML=(amt + " AUD = " + (Math.round(amt*0.67*100.0) / 100.0) + " USD");
    document.getElementById('2').innerHTML=(amt + " AUD = " + (Math.round(amt*0.09*100.0) / 100.0) + " CAD");
    document.getElementById('3').innerHTML=(amt + " AUD = " + (Math.round(amt*91.22*100.0) / 100.0) + " YEN");
    document.getElementById('4').innerHTML=(amt + " AUD = " + (Math.round(amt*55.49*100.0) / 100.0) + " INR");
    document.getElementById('5').innerHTML=(amt + " AUD = " + (Math.round(amt*100.0*0.63) / 100.0) + " EURO");
}

if(userChoice === 'USD'){
    document.getElementById('1').innerHTML=(amt + " USD = " + (Math.round(amt*1.45*100.0) / 100.0) + "AUD");
    document.getElementById('2').innerHTML=(amt + " USD = " + (Math.round(amt*1.35*100.0) / 100.0) + " CAD");
    document.getElementById('3').innerHTML=(amt + " USD = " + (Math.round(amt*127.9*100.0) / 100.0) + " YEN");
    document.getElementById('4').innerHTML=(amt + " USD = " + (Math.round(amt*81.34*100.0) / 100.0) + " INR");
    document.getElementById('5').innerHTML=(amt + " USD = " + (Math.round(amt*100.0*0.93) / 100.0) + " EURO");
}

    if(userChoice === 'YEN'){
        document.getElementById('1').innerHTML=(amt + " YEN = " + (Math.round(amt*100.0*0.01) / 100.0) + " AUD");

        document.getElementById('2').innerHTML=(amt + " YEN = " + (Math.round(amt*100.0*0.007) / 100.0) + " USD");

        document.getElementById('3').innerHTML=(amt + " YEN = " + (Math.round(amt*100.0*0.01) / 100.0) + " CAD");

        document.getElementById('4').innerHTML=(amt + " YEN = " + (Math.round(amt*100.0*0.61) / 100.0) + " INR");

        document.getElementById('5').innerHTML=(amt + " YEN = " + (Math.round(amt*100.0*0.0069) / 100.0) + " EURO");
}

    if(userChoice === 'CAD'){
        document.getElementById('1').innerHTML=(amt + " CAD = " + (Math.round(amt*100.0*1.09) / 100.0) + " AUD");

        document.getElementById('2').innerHTML=(amt + " CAD = " + (Math.round(amt*100.0*0.73) / 100.0) + " USD");

        document.getElementById('3').innerHTML=(amt + " CAD = " + (Math.round(amt*100.0*99.5) / 100.0) + " YEN");

        document.getElementById('4').innerHTML=(amt + " CAD = " + (Math.round(amt*100.0*60.52) / 100.0) + " INR");

        document.getElementById('5').innerHTML=(amt + " CAD = " + (Math.round(amt*100.0*0.7) / 100.0) + " EURO");
}

    if(userChoice === 'EUR'){
        document.getElementById('1').innerHTML=(amt + " EURO = " + (Math.round(amt*100.0*1.58) / 100.0) + " AUD");

        document.getElementById('2').innerHTML=(amt + " EURO = " + (Math.round(amt*100.0*1.05) / 100.0) + " USD");

        document.getElementById('3').innerHTML=(amt + " EURO = " + (Math.round(amt*100.0*1.45) / 100.0) + " CAD");

        document.getElementById('4').innerHTML=(amt + " EURO = " + (Math.round(amt*100.0*144.45) / 100.0) + " YEN");

        document.getElementById('5').innerHTML=(amt + " EURO = " + (Math.round(amt*100.0*87.80) / 100.0) + " INR");
}

    if(userChoice === 'INR'){
        document.getElementById('1').innerHTML=(amt + " INR = " + (Math.round(amt*100.0*0.018) / 100.0) + " AUD");

        document.getElementById('2').innerHTML=(amt + " INR = " + (Math.round(amt*100.0*0.012) / 100.0) + " USD");

        document.getElementById('3').innerHTML=(amt + " INR = " + (Math.round(amt*100.0*0.017) / 100.0) + " CAD");

        document.getElementById('4').innerHTML=(amt + " INR = " + (Math.round(amt*100.0*1.65) / 100.0) + " YEN");

        document.getElementById('5').innerHTML=(amt + " INR = " + (Math.round(amt*100.0*0.01) / 100.0) + " EURO");
    }
}