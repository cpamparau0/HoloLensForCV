function d(id){
	return document.getElementById(id);
}

function tryToSubmit() {

    var error="";
    if (!isFieldRGBValid("init_R", "spaninit_R")) {
		error = "Valoarea trebuie sa fie intre 0 si 255";
        markValidity("init_R", "spaninit_R",error,false);
    }
	else{
		markValidity("init_R", "spaninit_R","",true);
	}
	
	if (!isFieldRGBValid("init_G", "spaninit_G")) {
		error = "Valoarea trebuie sa fie intre 0 si 255";
        markValidity("init_G", "spaninit_G",error,false);
    }
	else{
		markValidity("init_G", "spaninit_G","",true);
	}
	
	if (!isFieldRGBValid("init_B", "spaninit_B")) {
		error = "Valoarea trebuie sa fie intre 0 si 255";
        markValidity("init_B", "spaninit_B",error,false);
    }
	else{
		markValidity("init_B", "spaninit_B","",true);
	}

	if (!isFieldRGBValid("final_R", "spanfinal_R")) {
		error = "Valoarea trebuie sa fie intre 0 si 255";
        markValidity("final_R", "spanfinal_R",error,false);
    }
	else{
		markValidity("final_R", "spanfinal_R","",true);
	}
	
	if (!isFieldRGBValid("final_G", "spanfinal_G")) {
		error = "Valoarea trebuie sa fie intre 0 si 255";
        markValidity("final_G", "spanfinal_G",error,false);
    }
	else{
		markValidity("final_G", "spanfinal_G","",true);
	}
	
	if (!isFieldRGBValid("final_B", "spanfinal_B")) {
		error = "Valoarea trebuie sa fie intre 0 si 255";
        markValidity("final_B", "spanfinal_B",error,false);
    }
	else{
		markValidity("final_B", "spanfinal_B","",true);
	}
	
    contrast = d("contrast")
	if(!isNaN(contrast))
	{
		if( contrast.value != "" ) 
		{
			error = "Valoarea trebuie sa fie intre un numar intreg mai mare sau mai mic decat 1. De exemplu, 1.5=increase contrast 50%";
			markValidity("contrast", "spanContrast",error,false);
		}
	}
	else{
		markValidity("contrast", "spanContrast","",true);
	}
	
	brigthness = d("brigthness")
	if(!isNaN(brigthness))
	{
		if(brigthness.value != "")
		{
			error = "Valoarea trebuie sa fie intre un numar intreg. De exemplu, 60.";
			markValidity("brigthness", "spanBrigthness",error,false);
		}
	}
	else{
		markValidity("brigthness", "spanBrigthness","",true);
	}
	
	if (error == "")
	{
		d("form").submit();
	}

}


function isFieldRGBValid(id) {
    var id = d(id);
	if (id == null)
		return true;
	id = id.value
    if (id<0 || id >255) {
        return false;
    }
    return true;
}


function markValidity(id, spanName , errorMessages, isValid) {
    var control = d(id);
	var span = d(spanName);
    if (isValid) {
        control.style = "border-style:default;border-width:2px;valid";
		span.style.visibility = "hidden";
    } else {
		control.style = "border-style:solid; border-width:5px; border-color:red;";
		span.style.visibility = "visible";
		span.innerHTML = errorMessages;
    }
}