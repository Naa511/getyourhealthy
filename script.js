function openAbout(namaabout)
{
    var i;
    var x = document.getElementsByClassName("about");
    for(i = 0; i< x.length; i++)
    {
        x[i].style.display = "none";
    }
    document.getElementById(namaabout).style.display = "block";
}

function submitDP()
{
    document.getElementById("data_pribadi").submit();
}

function reset()
{
    document.getElementById("data_pribadi").reset();
    document.getElementById("bmi_f").reset();
    document.getElementById("gizi_f").reset();
}

function bmiResult()
{
    var gender=document.form.gender.value;
    var umur=document.form.umur.value;
    var tinggi=document.form.tinggi.value;
    var berat=document.form.berat.value;
    
    var operasi=berat/(tinggi/100)**2;
    document.form.operasi.value=operasi;

    if(gender=="male")
    {
        if(umur=="13-15 Tahun")
        {
            if((operasi >18.5) && (operasi <=24.9)) var keterangan="NORMAL";
            if((operasi >12.5) && (operasi <=18.5)) var keterangan="UNDERWEIGHT";
            if((operasi >24.5) && (operasi <=29.9)) var keterangan="OVERWEIGHT";
            if((operasi >29.9) && (operasi <=42.8)) var keterangan="OBESITY";
        }
        if(umur=="16-18 Tahun")
        {
            if((operasi >18.5) && (operasi <=24.9)) var keterangan="NORMAL";
            if((operasi >12.5) && (operasi <=18.5)) var keterangan="UNDERWEIGHT";
            if((operasi >24.5) && (operasi <=29.9)) var keterangan="OVERWEIGHT";
            if((operasi >29.9) && (operasi <=42.8)) var keterangan="OBESITY";
        }
        if(umur=="19-29 Tahun")
        {
            if((operasi >18.5) && (operasi <=24.9)) var keterangan="NORMAL";
            if((operasi >12.5) && (operasi <=18.5)) var keterangan="UNDERWEIGHT";
            if((operasi >24.5) && (operasi <=29.9)) var keterangan="OVERWEIGHT";
            if((operasi >29.9) && (operasi <=42.8)) var keterangan="OBESITY";
        }
    }
    if(gender=="female")
    {
        if(umur=="13-15 Tahun")
        {
            if((operasi >18.5) && (operasi <=24.9)) var keterangan="NORMAL";
            if((operasi >12.5) && (operasi <=18.5)) var keterangan="UNDERWEIGHT";
            if((operasi >24.5) && (operasi <=29.9)) var keterangan="OVERWEIGHT";
            if((operasi >29.9) && (operasi <=42.8)) var keterangan="OBESITY";
        }
        if(umur=="16-18 Tahun")
        {
            if((operasi >18.5) && (operasi <=24.9)) var keterangan="NORMAL";
            if((operasi >12.5) && (operasi <=18.5)) var keterangan="UNDERWEIGHT";
            if((operasi >24.5) && (operasi <=29.9)) var keterangan="OVERWEIGHT";
            if((operasi >29.9) && (operasi <=42.8)) var keterangan="OBESITY";
        }
        if(umur=="19-29 Tahun")
        {
            if((operasi >18.5) && (operasi <=24.9)) var keterangan="NORMAL";
            if((operasi >12.5) && (operasi <=18.5)) var keterangan="UNDERWEIGHT";
            if((operasi >24.5) && (operasi <=29.9)) var keterangan="OVERWEIGHT";
            if((operasi >29.9) && (operasi <=42.8)) var keterangan="OBESITY";
        }
    }      
    document.form.keterangan.value=keterangan;
}

function gizi()
{
    var gender=document.form1.gender.value;
    var umur=document.form1.umur.value;

    if(gender=="male")
    {
        if(umur=="13-15 Tahun")
        {
            var protein=70;
            var lemak=80;
            var karbohidrat=350;
            var serat=34;
            var air=2100;
        }
        if(umur=="16-18 Tahun")
        {
            var protein=75;
            var lemak=85;
            var karbohidrat=400;
            var serat=37;
            var air=2300;
        }
        if(umur=="19-29 Tahun")
        {
            var protein=65;
            var lemak=75;
            var karbohidrat=430;
            var serat=37;
            var air=2500;
        }
    }
    if(gender=="female")
    {
        if(umur=="13-15 Tahun")
        {
            var protein=65;
            var lemak=70;
            var karbohidrat=300;
            var serat=29;
            var air=2100;
        }
        if(umur=="16-18 Tahun")
        {
            var protein=65;
            var lemak=70;
            var karbohidrat=300;
            var serat=29;
            var air=2150;
        }
        if(umur=="19-29 Tahun")
        {
            var protein=60;
            var lemak=65;
            var karbohidrat=360;
            var serat=32;
            var air=2350;
        }
    }
    document.form1.protein.value=protein;
    document.form1.lemak.value=lemak;
    document.form1.karbohidrat.value=karbohidrat;
    document.form1.serat.value=serat;
    document.form1.air.value=air;
}