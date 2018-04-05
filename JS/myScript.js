function izracunajGama() {
    var a = parseFloat(document.getElementsByName("a")[0].value);
    var b = parseFloat(document.getElementsByName("b")[0].value);
    var c = parseFloat(document.getElementsByName("c")[0].value);
    var cos_gama = (Math.pow(a,2) + Math.pow(b,2) - Math.pow(c,2)) / (2 * a * b);
    var gama = parseFloat(Math.acos(parseFloat(cos_gama)));
    gama = gama * (180 / Math.PI);
    gama = parseFloat(gama).toFixed(2);
    document.getElementsByName("gama")[0].value = gama;
    if (gama / 2 <= 45) {
        document.getElementById("iverice").style.display = 'inline';
        document.getElementById("tup").style.display = 'none';
        document.getElementById("ostar").style.display = 'inline';
        document.getElementsByName("gamaSjecenja")[0].value = (90 - gama).toFixed(2);
    }
    else if (gama / 2 > 45) {
        document.getElementById("iverice").style.display = 'inline';
        document.getElementById("ostar").style.display = 'none';
        document.getElementById("tup").style.display = 'inline';
        document.getElementsByName("gamaSjecenja")[0].value = (90 - gama / 2).toFixed(2);
    } else {
        document.getElementById("iverice").style.display = 'none';
    }
}

function izracunaj() {
    //msg="";
    var ah = parseFloat(document.getElementsByName("ah")[0].value);
    var hf = parseFloat(document.getElementsByName("hf")[0].value);
    var fb = parseFloat(document.getElementsByName("fb")[0].value);
    var ed = parseFloat(document.getElementsByName("ed")[0].value);
    var ae = parseFloat(document.getElementsByName("ae")[0].value);
    var bc = parseFloat(document.getElementsByName("bc")[0].value);
    var hj = parseFloat(document.getElementsByName("hj")[0].value);
    var jl = parseFloat(document.getElementsByName("jl")[0].value);

    if ((hf != 0) && (hj != 0)) {
          document.getElementById("slika2").src="./Images/slika21.png";
    }

    var d = parseFloat(document.getElementsByName("d")[0].value);
    if (d < 0) {
        document.getElementsByName("d")[0].value = Math.abs(d);
        d = Math.abs(d);
    }
    var p = parseFloat(document.getElementsByName("p")[0].value);
    if (p < 0) {
        document.getElementsByName("p")[0].value = Math.abs(p);
        p = Math.abs(p);
    }

    document.getElementsByName("hi2d")[0].style.display = 'inline';
    document.getElementsByTagName("span")[0].style.display = 'inline';
    var chi = document.getElementsByName("hi2d")[0].checked;
    var cfg = document.getElementsByName("fg2d")[0].checked;

    var k1 = 1;
    var k2 = 1;

    if (chi) {
        k1 = 2;
    }

    if (cfg) {
        k2 = 2;
    }

    if (ah < (2  + k1 / 2) * d) {
        document.getElementsByName("ah")[0].value = (2 + k1 / 2) * d;
        ah = ( 2 + k1 / 2) * d;
    }

    if (ed < 2 * d) {
        document.getElementsByName("ed")[0].value = 2 * d;
        ed = 2 * d;
    }

    if (ah <= ed) {
        document.getElementsByName("ed")[0].value = ah - k1 / 2 * d;
        ed = ah - k1 / 2 * d;
    }

    if ((hf < ((k1 + k2) / 2 + 1) * d) && (hf != 0) && (hj != 0)) {
        document.getElementsByName("hf")[0].value = ((k1 + k2) / 2 + 1) * d;
        hf = ((k1 + k2) / 2 + 1) * d;
    }

    if ((hf < ((k1 + k2) / 2) * d) && (hf != 0) && (hj == 0)) {
        document.getElementsByName("hf")[0].value = ((k1 + k2) / 2) * d;
        hf = ((k1 + k2) / 2) * d;
        document.getElementById("slika2").src="./Images/slika23.png";
    }

    if (hf == 0) {
        k1 = 0;
        document.getElementsByName("hi2d")[0].style.display = 'none';
        document.getElementsByTagName("span")[0].style.display = 'none';
        document.getElementsByName("jl")[0].value = 0;
        jl = 0;
        document.getElementsByName("lk")[0].value = 0;
        jk = 0;
        document.getElementById("slika2").src="./Images/slika22.png";
        document.getElementsByName("hj")[0].value = 0;
        hj = 0;
    }

    if (fb < (1 + k2 / 2) * d) {
        document.getElementsByName("fb")[0].value = (1 + k2 / 2) * d;
        fb = (1 / 2 + k2) * d;
    }

    if (ed < 2 * d) {
        document.getElementsByName("ed")[0].value = 2 * d;
        ed = 2 * d;
    }

    if (bc < ((2 + Math.sqrt(2)) * d + p).toFixed(2)) {
        document.getElementsByName("bc")[0].value = ((2 + Math.sqrt(2)) * d + p).toFixed(2);
        bc = ((2 + Math.sqrt(2)) * d + p).toFixed(2);
    }

    if (ae < ((3 + Math.sqrt(2)) * d + p).toFixed(2)) {
        document.getElementsByName("ae")[0].value = ((3 + Math.sqrt(2)) * d + p).toFixed(2);
        ae = ((3 + Math.sqrt(2)) * d + p).toFixed(2);
    }

    if (ae < bc + d) {
        document.getElementsByName("ae")[0].value = bc + d;
        ae = bc + d;
    }

    if (hj == 0) {
        document.getElementsByName("jl")[0].value = hf;
        jl = hf;
        document.getElementsByName("lk")[0].value = 0;
        lk = 0;
        if (hf != 0) {
            document.getElementById("slika2").src="./Images/slika23.png";
            }
        }

    if ((hj < (3 / 2) * d + p) && (hj != 0) && (hf != 0)) {
        document.getElementsByName("hj")[0].value = (3 / 2) * d + p;
        hj = (3 / 2) * d + p;
    }

    if ((jl < ((k1 + 1) / 2) * d) || (jl > hf - ((k1 + 1) / 2) * d)) {
        if (hf != 0) {
            if (hj != 0) {
                document.getElementsByName("jl")[0].value = ((k1 + 1) / 2) * d;
                jl = ((k1 + 1) / 2) * d;
                }
                else {
                  document.getElementsByName("jl")[0].value = 0;
                  jl = 0;
                }
            document.getElementsByName("lk")[0].value = hf - jl;
            lk = hf - jl;
            }
            else {
               document.getElementsByName("jl")[0].value = 0;
               jl = 0;
        }
    }
    else {
        if (hf != 0) {
            document.getElementsByName("lk")[0].value = hf - jl;
            lk = hf - jl;
        }
        else {
            document.getElementsByName("jl")[0].value = 0;
            jl = 0;
        }
    }

    var ab = ah + hf + fb;
    document.getElementsByName("ab")[0].value = ab.toFixed(2);
    var dc = parseFloat(Math.sqrt(Math.pow((ab - ed),2) + Math.pow((ae - bc),2)));

    var s = "";
    s = s + ab.toFixed(2);
    s= s + " = ";
    s = s + d + " (iverica) + ";

    if (hf != 0) {
      s = s + (ah - (d + k1 * d / 2)).toFixed(2) + " + ";
      s = s + k1 + " * " + d + " (iverica) + ";
      s = s + (hf - ((k1 + k2) * d / 2)).toFixed(2) + " + ";
    }
    else if (hf == 0) {
        s = s + (ah - (d + k2 * d / 2)).toFixed(2) + " + ";
    }

    s = s + k2 + " * " + d + " (iverica) + ";
    s = s + (fb - (d + k2 * d / 2)).toFixed(2) + " + ";
    s = s + d + " (iverica) ";
    document.getElementsByName("ab")[0].value = s;

    var cosAlfa = (ab - ed) / dc;
    var alfa = Math.acos(cosAlfa) * (180 / Math.PI);
    document.getElementsByName("alfa")[0].value = alfa.toFixed(2);
    document.getElementsByName("alfa")[1].value = alfa.toFixed(2);
    document.getElementsByName("alfaPola")[0].value = (alfa / 2).toFixed(2);

    s = "";
    s = s + dc.toFixed(2);
    s= s + " \u2248 ";
    if (hf != 0) {
        s = s + ((ah - ed - k1 * d / 2) / cosAlfa).toFixed(2) + " + ";
      }
      else {
          s = s + ((ah - ed - k2 * d / 2) / cosAlfa).toFixed(2) + " + ";
      }

    if ((hj == 0) && (hf != 0)) {
      s = s + k1 + " * " + (d / cosAlfa).toFixed(2) + " (iverica) + ";
      s = s + ((hf - ((k1 + k2) * d / 2)) / cosAlfa).toFixed(2) + " + ";
    }
    else if ((hj != 0) && (hf != 0)) {
      s = s + k1 + " * " + (d / cosAlfa).toFixed(2) + " (iverica) + ";
      s = s + ((jl - ((k1 + 1) * d / 2)) / cosAlfa).toFixed(2) + " + ";
      s = s + (d / cosAlfa).toFixed(2) + " (iverica) + ";
      s = s + ((lk - ((1 + k2) * d / 2)) / cosAlfa).toFixed(2) + " + ";
    }

    s = s + k2 + " * " + (d / cosAlfa).toFixed(2) + " (iverica) + ";
    s = s + ((fb - (d + k2 * d / 2)) / cosAlfa).toFixed(2) + " + ";
    s = s + (d / cosAlfa).toFixed(2) + " (iverica) ";
    document.getElementsByName("dc")[0].value = s;

    var k = (ae - bc) / (ab - ed);

    var hi = k * (hf + fb + (k1 / 2) * d) + bc;
    hi = hi - (p + d + d / cosAlfa);
    if (hj != 0) {
        s = "";
        s = s + hi.toFixed(2) + " \u2248 ";
        s = s + (hj - p - d - d / 2).toFixed(2) + " + " + d + " (iverica) + " + (hi + p + d - hj - d / 2).toFixed(2);
      }
      else {
          s = hi.toFixed(2);
      }
    if (hf == 0) {
        s=Number.NaN;
    }
    document.getElementsByName("hi")[0].value = s;


    var lm = k * (lk + fb + d / 2) + bc - hj;
    lm = lm - (d / 2 + d / cosAlfa);
    if (hj == 0) {
        lm=Number.NaN;
    }
    document.getElementsByName("lm")[0].value = lm.toFixed(2);

    var fg = k * (fb + (k2 / 2) * d) + bc;
    fg = fg - (p + d + d / cosAlfa);

    if (hj != 0) {
        s = "";
        s = s + fg.toFixed(2) + " \u2248 ";
        s = s + (hj - p - d - d / 2).toFixed(2) + " + " + d + " (iverica) + " + (fg + p + d - hj - d / 2).toFixed(2);
      }
      else {
          s = fg.toFixed(2);
      }
    document.getElementsByName("fg")[0].value = s;

    var d1 = parseFloat(document.getElementsByName("d1")[0].value);
    var d2 = d1/2 * (1 + 1/cosAlfa);
    document.getElementsByName("d2")[0].value = d2.toFixed(2);
}
