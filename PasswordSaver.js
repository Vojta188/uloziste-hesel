let SaveDataHesloK = [];
let SaveDataHeslo = [];
let x = 0;
StyleSheet

function PasswordSaverViewer()
{
    
    
    const y = x++;
    
    let HesloK = document.getElementById("InputHesloK").value;
    let Heslo = document.getElementById("InputHeslo").value;
   
    
    if(Heslo == false || HesloK == false )
    {
        alert("Vyplňte")
    }
    else
    {
        SaveDataHesloK.push(y + " " + HesloK + " " );
        SaveDataHeslo.push(y + " " + Heslo + " " );
    }
     
    


    document.getElementById("SaveDataHesloKID").innerHTML = SaveDataHesloK;
    document.getElementById("SaveDataHesloID").innerHTML = SaveDataHeslo;

}