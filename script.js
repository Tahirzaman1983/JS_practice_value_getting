function setvalue(){
    let zipcode=+document.getElementById("zipcode").value;
    let area=document.getElementById("area");

    if(zipcode===123){
    area.value="Orakzai";
    }
    else if(zipcode===222){
        area.value="hangu";
    }
    else if(zipcode===1122){
        area.value="kohat";
    }
    else{
        alert("You entered the invalid zipcode ");
    }
}