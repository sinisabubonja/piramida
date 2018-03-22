function izracunajGama(){
    var a = parseFloat(document.getElementsByName("a")[0].value);
    var b = parseFloat(document.getElementsByName("b")[0].value);
    var c = parseFloat(document.getElementsByName("c")[0].value);
    var cos_gama = (Math.pow(a,2) + Math.pow(b,2) - Math.pow(c,2)) / (2 * a * b);
    var gama = parseFloat(Math.acos(parseFloat(cos_gama)));
    gama = gama * (180 / Math.PI);
    gama = parseFloat(gama).toFixed(2);
    document.getElementsByName("gama")[0].value = gama;
    if (gama / 2 <= 45){
        document.getElementById("iverice").style.display = 'inline';
        document.getElementById("tup").style.display = 'none';
        document.getElementById("ostar").style.display = 'inline';
        document.getElementsByName("gamaSjecenja")[0].value = (90 - gama).toFixed(2);
    }
    else if (gama / 2 > 45){
        document.getElementById("iverice").style.display = 'inline';
        document.getElementById("ostar").style.display = 'none';
        document.getElementById("tup").style.display = 'inline';
        document.getElementsByName("gamaSjecenja")[0].value = (90 - gama / 2).toFixed(2);
    } else {
        document.getElementById("iverice").style.display = 'none';
    }
}
