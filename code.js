/**
 * Created by BeatriceVilhelmsson on 2016-12-02.
 */
    // Global variables
    var oneDay = document.getElementById("day1");
    var secondDay = document.getElementById("day2");
    var firstNight = document.getElementById("night1");
    var secondNight = document.getElementById("night2");
    var firstLunch = document.getElementById("lunch1");
    var secondLunch = document.getElementById("lunch2");

    // Set standard value
    var price = 0;
    var priceNightCounter = 0;
    var priceLunchCounter = 0;
    var counterForTextInput = 0;
    document.getElementById("textArea").maxLength = "200";
    firstNight.style.visibility = "hidden";
    document.getElementById("night1TEXT").style.visibility = "hidden";
    secondNight.style.visibility = "hidden";
    document.getElementById("night2TEXT").style.visibility = "hidden";
    firstLunch.style.visibility = "hidden";
    document.getElementById("lunch1TEXT").style.visibility = "hidden";
    secondLunch.style.visibility = "hidden";
    document.getElementById("lunch2TEXT").style.visibility = "hidden";
    document.getElementById("extra").style.visibility="hidden";
    document.getElementById("specialLunch").style.visibility ="hidden";
    document.getElementById("spLunch").style.visibility = "hidden";

    //Converting values to string to be readable to HTML page
    document.getElementById("priceList").innerHTML = price.toString();
    document.getElementById("counting").innerHTML = counterForTextInput.toString();

    //PriceList
    function priceList(){
        "use strict";
    document.getElementById("priceList").innerHTML = price.toString();
    }

    //Counts chars
    function countChar() {
        "use strict";
    counterForTextInput = document.getElementById("textArea").value.length;
    document.getElementById("counting").innerHTML = counterForTextInput.toString();
    }

    // Validates all when submitted
    document.getElementById("sbmt").addEventListener("click",function(eve){
        "use strict";
        eve.preventDefault();
        validateForm();
    });

    // Validates
    oneDay.addEventListener("change", checkAll);
    oneDay.addEventListener("change", checkPriceDays);
    secondDay.addEventListener("change", checkAll);
    secondDay.addEventListener("change", checkPriceDays);
    firstNight.addEventListener("change", checkPriceNight);
    secondNight.addEventListener("change", checkPriceNight);
    firstLunch.addEventListener("change", checkPriceLunch);
    secondLunch.addEventListener("change", checkPriceLunch);
    document.getElementById("fname").addEventListener("keyup", firstNameValidation);
    document.getElementById("fname").addEventListener("keypdown", firstNameValidation);
    document.getElementById("fname").addEventListener("change", firstNameValidation);
    document.getElementById("lname").addEventListener("keyup", lastNameValidation);
    document.getElementById("lname").addEventListener("keydown", lastNameValidation);
    document.getElementById("lname").addEventListener("change", lastNameValidation);
    document.getElementById("cpname").addEventListener("keyup", companyNameValidation);
    document.getElementById("cpname").addEventListener("keydown", companyNameValidation);
    document.getElementById("cpname").addEventListener("change", companyNameValidation);
    document.getElementById("Email").addEventListener("keyup", emailValidation);
    document.getElementById("Email").addEventListener("keydown", emailValidation);
    document.getElementById("Email").addEventListener("change", emailValidation);
    document.getElementById("imageInput").addEventListener("change", previewImage);
    document.getElementById("imageInput").addEventListener("change", imageValidation);
    document.getElementById("overNight").addEventListener("change", checkNight);
    document.getElementById("overNight").addEventListener("change", checkPriceNight);
    document.getElementById("lunchDays").addEventListener("change", checkLunch);
    document.getElementById("lunchDays").addEventListener("change", checkPriceLunch);
    document.getElementById("specialLunch").addEventListener("change", checkLunch);
    firstLunch.addEventListener("change", checkLunch);
    secondLunch.addEventListener("change", checkLunch);
    document.getElementById("lectureOption").addEventListener("change",lectureOptionValidation);
    document.getElementById("textArea").addEventListener("keyup", countChar);
    document.getElementById("textArea").addEventListener("keydown", countChar);

    // Function that validates all states
    function validateForm() {
        "use strict";
        firstNameValidation();
        lastNameValidation();
        companyNameValidation();
        emailValidation();
        imageValidation();
        dayValidation();
        lectureOptionValidation();
        checkLengthOfText();
        checkAll();
        if(firstNameValidation() && lastNameValidation() && companyNameValidation() && emailValidation() && dayValidation() &&
            lectureOptionValidation() &&  imageValidation() && checkLengthOfText() === true){
            window.location.href = "dummy.html";
        }
    }
    // Function that checks when input
    function checkAll() {
        "use strict";
        checkNight();
        checkLunch();
        dayValidation();
    }

    // Validates the First name
    function firstNameValidation() {
        "use strict";
        var fn = document.getElementById("fname");
        if (fn.value == "" || fn.value.length == 1) {
            document.getElementById("pow").style.visibility = "visible";
            document.getElementById("pow").style.color = "red";
            document.getElementById("fname").style.borderBottomColor = "red";
            var newElement = document.createElement("p");
            var note = document.createTextNode("Måste fylla i förnamn");
            if(document.getElementById("fna").childNodes.length == 0){
                newElement.appendChild(note);
                document.getElementById("fna").appendChild(newElement);
            }

        }
        else{
            var errorMsg = document.getElementById("fna");
            errorMsg.innerHTML = "";
            document.getElementById("pow").style.visibility = "hidden";
            document.getElementById("fname").style.borderBottomColor ="#02f340";
            return true;
        }
    }
    // Validates the Last name
    function lastNameValidation() {
        "use strict";
        var ln = document.getElementById("lname");
        if (ln.value == "" || ln.value.length == 1) {
            document.getElementById("pow1").style.visibility = "visible";
            document.getElementById("pow1").style.color = "red";
            document.getElementById("lname").style.borderBottomColor = "red";
            var newElement = document.createElement("p");
            var note = document.createTextNode("Måste fylla i efterrnamn");
            if(document.getElementById("lna").childNodes.length == 0 ){
             newElement.appendChild(note);
            document.getElementById("lna").appendChild(newElement);
            }
        }
        else{
            var errorMsg = document.getElementById("lna");
            errorMsg.innerHTML = "";
            document.getElementById("pow1").style.visibility = "hidden";
            document.getElementById("lname").style.borderBottomColor = "#02f340";
            return true;
        }
    }
    // Validate Company name
    function companyNameValidation() {
        "use strict";
        var cpn = document.getElementById("cpname");
        if(cpn.value == "" || cpn.value.length == 1){
            document.getElementById("pow2").style.visibility = "visible";
            document.getElementById("pow2").style.color = "red";
            document.getElementById("cpname").style.borderBottomColor = "red";
            var newElement = document.createElement("p");
            var note = document.createTextNode("Måste fylla i vilket företag");
            if(document.getElementById("cne").childNodes.length == 0) {
                newElement.appendChild(note);
                document.getElementById("cne").appendChild(newElement);
            }
        }
        else{
                var errorMsg = document.getElementById("cne");
                errorMsg.innerHTML = "";
            document.getElementById("pow2").style.visibility = "hidden";
            document.getElementById("cpname").style.borderBottomColor = "#02f340";
            return true;
            }
    }
    // Validate email
    function emailValidation() {
        "use strict";
        var email = document.getElementById("Email");
        var pattern = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
        var isValid = pattern.test(email.value);
        if(email.value == "" || email.value.length == 1 ) {
            var errorMsg = document.getElementById("eml");
            errorMsg.innerHTML = "";
            document.getElementById("pow3").style.visibility = "visible";
            document.getElementById("pow3").style.color = "red";
            document.getElementById("Email").style.borderBottomColor = "red";
            var newElement = document.createElement("p");
            var note = document.createTextNode("Måste fylla i email");
            if(document.getElementById("eml").childNodes.length == 0) {
                newElement.appendChild(note);
                document.getElementById("eml").appendChild(newElement);
            }
        }
        else if (!isValid) {
            var errorMsg = document.getElementById("eml");
            errorMsg.innerHTML = "";
            document.getElementById("pow3").style.visibility = "visible";
            document.getElementById("pow3").style.color = "red";
            document.getElementById("Email").style.borderBottomColor = "orange";
            var newElement = document.createElement("p");
            var note = document.createTextNode("Ogiltig Email, prova igen");
            newElement.appendChild(note);
            document.getElementById("eml").appendChild(newElement);
        }
        else{
            var errorMsg = document.getElementById("eml");
            errorMsg.innerHTML = "";
            document.getElementById("pow3").style.visibility = "hidden";
            document.getElementById("Email").style.borderBottomColor = "#02f340";
            return true;
        }

    }
    //Validate image
    function imageValidation() {
        "use strict";
        var imgInput = document.getElementById("imageInput").value;
        var imgExtension = imgInput.substring(imgInput.lastIndexOf("."));
        var imgPreview = document.getElementById("imgPrev");
        if(imgExtension == ".jpg" || imgExtension == ".JPG" || imgExtension == ".png" ||
        imgExtension == ".PNG"){
            var errorMsg = document.getElementById("imgv");
            errorMsg.innerHTML = "";

            return true;
        }
        else {
            imgPreview.src = "";
            document.getElementById("imageInput").value = "";
            var newElement = document.createElement("p");
            var note = document.createTextNode("Måste ladda upp bild");
            if(document.getElementById("imgv").childNodes.length == 0){
                newElement.appendChild(note);
                document.getElementById("imgv").appendChild(newElement);
            }

        }

    }
    //Validate day/days
    function dayValidation(){
        "use strict";
        if(!oneDay.checked && !secondDay.checked){
            document.getElementById("pow4").style.visibility = "visible";
            document.getElementById("pow4").style.color = "red";
            var newElement = document.createElement("p");
            var note = document.createTextNode("Måste kryssa i minst en dag!");
            if(document.getElementById("dayday").childNodes.length == 0) {
                newElement.appendChild(note);
                document.getElementById("dayday").appendChild(newElement);
            }
        }
        else{
            var errorMsg = document.getElementById("dayday");
            errorMsg.innerHTML = "";
            document.getElementById("pow4").style.visibility = "hidden";
            return true;
        }
    }
    //Validate lecture form
    function lectureOptionValidation(){
        "use strict";
        var lecture = document.getElementById("lectureOption").options[1];
        var seminarium = document.getElementById("lectureOption").options[2];
        var disscussion = document.getElementById("lectureOption").options[3];
        if((lecture.selected) || (seminarium.selected) || (disscussion.selected)){
            document.getElementById("pow5").style.visibility = "hidden";
            document.getElementById("lectureOption").style.borderBottomColor ="#02f340";
            var errorMsg = document.getElementById("opt");
            errorMsg.innerHTML = "";
            return true;
        }
        else {
            var newElement = document.createElement("p");
            document.getElementById("pow5").style.visibility = "visible";
            document.getElementById("pow5").style.color ="red";
            document.getElementById("lectureOption").style.borderBottomColor ="red";
            var note = document.createTextNode("Väl en av alternativen för att gå vidare");
            if(document.getElementById("opt").childNodes.length == 0){
                newElement.appendChild(note);
                document.getElementById("opt").appendChild(newElement);
            }
        }

    }
    //Checks if the person choose to stay overnight and check which day it will go
    function checkNight(){
        "use strict";
        var overNight = document.getElementById("overNight");
        var firstNightText = document.getElementById("night1TEXT");
        var secondNightText = document.getElementById("night2TEXT");
        secondNight.disabled = false;
        firstNight.disabled = false;
        firstNightText.style.color = "Black";
        secondNightText.style.color = "Black";
        if((overNight.checked) && (oneDay.checked) && (!secondDay.checked)){
            firstNight.style.visibility = "visible";
            secondNight.style.visibility = "visible";
            firstNightText.style.visibility = "visible";
            secondNightText.style.visibility = "visible";
            secondNight.disabled = true;
            secondNight.checked = false;
            secondNightText.style.color = "Grey";
            var errorMsg = document.getElementById("nError");
            errorMsg.innerHTML = "";
        }
        else if((overNight.checked) && (secondDay.checked) && (!oneDay.checked)){
            firstNight.style.visibility = "visible";
            secondNight.style.visibility = "visible";
            firstNightText.style.visibility = "visible";
            secondNightText.style.visibility = "visible";
            firstNight.disabled = true;
            firstNight.checked = false;
            firstNightText.style.color = "Grey";
            var errorMsg = document.getElementById("nError");
            errorMsg.innerHTML = "";
        }
        else if((overNight.checked) && (oneDay.checked) && (secondDay.checked)){
            firstNight.style.visibility = "visible";
            secondNight.style.visibility = "visible";
            firstNightText.style.visibility = "visible";
            secondNightText.style.visibility = "visible";
            var errorMsg = document.getElementById("nError");
            errorMsg.innerHTML = "";
        }
        else if ((overNight.checked) && (!oneDay.checked) && (!secondDay.checked)){
            var newElement = document.createElement("p");
            var note = document.createTextNode("Dag inte vald.");
            if(document.getElementById("nError").childNodes.length == 0) {
                newElement.appendChild(note);
                document.getElementById("nError").appendChild(newElement);
            }
        }
        else {
            firstNight.style.visibility = "hidden";
            secondNight.style.visibility = "hidden";
            firstNightText.style.visibility = "hidden";
            secondNightText.style.visibility = "hidden";
            firstNight.checked = false;
            secondNight.checked = false;
            var errorMsg = document.getElementById("nError");
            errorMsg.innerHTML = "";

        }
    }
    //Checks if the person have choosen to eat and check which day "it" will go
    function checkLunch(){
    "use strict";
    var lunchDay = document.getElementById("lunchDays");
        var firstLunchText = document.getElementById("lunch1TEXT");
    var secondLunchText = document.getElementById("lunch2TEXT");
    var xtrLABEL = document.getElementById("extra");
    var xtra = document.getElementById("specialLunch");
    var specialField = document.getElementById("spLunch");
    secondLunch.disabled = false;
    firstLunch.disabled = false;
    firstLunchText.style.color = "Black";
    secondLunchText.style.color = "Black";

    if((lunchDay.checked) && (oneDay.checked) && (!secondDay.checked)){
        firstLunch.style.visibility = "visible";
        secondLunch.style.visibility = "visible";
        firstLunchText.style.visibility = "visible";
        secondLunchText.style.visibility = "visible";
        secondLunch.disabled = true;
        secondLunch.checked = false;
        secondLunchText.style.color = "Grey";
        xtrLABEL.style.visibility = "visible";
        xtra.style.visibility = "visible";
        var errorMsg = document.getElementById("lError");
        errorMsg.innerHTML = "";

        if((firstLunch.checked) && (xtra.checked)){
        specialField.style.visibility = "visible";
        }
        else if(!xtra.checked){
            specialField.style.visibility = "hidden";
            document.getElementById("xtra1").checked = false;
            document.getElementById("xtra2").checked = false;
            document.getElementById("xtra3").checked = false;
        }
        else {
            xtra.checked = false;
            specialField.style.visibility = "hidden";
            document.getElementById("xtra1").checked = false;
            document.getElementById("xtra2").checked = false;
            document.getElementById("xtra3").checked = false;
        }
    }
    else if((lunchDay.checked) && (secondDay.checked) && (!oneDay.checked)){
        firstLunch.style.visibility = "visible";
        secondLunch.style.visibility = "visible";
        firstLunchText.style.visibility = "visible";
        secondLunchText.style.visibility = "visible";
        firstLunch.disabled = true;
        firstLunch.checked = false;
        firstLunchText.style.color = "Grey";
        xtrLABEL.style.visibility = "visible";
        xtra.style.visibility = "visible";
        var errorMsg = document.getElementById("lError");
        errorMsg.innerHTML = "";
        if((firstLunch.checked)|| (secondLunch.checked) && (xtra.checked)){
            specialField.style.visibility = "visible";
        }
        else if(!xtra.checked){
            specialField.style.visibility = "hidden";
            document.getElementById("xtra1").checked = false;
            document.getElementById("xtra2").checked = false;
            document.getElementById("xtra3").checked = false;
        }
        else {
            specialField.style.visibility = "hidden";
            xtra.checked = false;
            document.getElementById("xtra1").checked = false;
            document.getElementById("xtra2").checked = false;
            document.getElementById("xtra3").checked = false;
        }
    }
    else if((lunchDay.checked) && (oneDay.checked) && (secondDay.checked)){
        firstLunch.style.visibility = "visible";
        secondLunch.style.visibility = "visible";
        firstLunchText.style.visibility = "visible";
        secondLunchText.style.visibility = "visible";
        xtrLABEL.style.visibility = "visible";
        xtra.style.visibility = "visible";
        var errorMsg = document.getElementById("lError");
        errorMsg.innerHTML = "";
        if((xtra.checked) && ((firstLunch.checked) || (secondLunch.checked))){
            specialField.style.visibility = "visible";
        }
        else if(!xtra.checked){
            specialField.style.visibility = "hidden";
            document.getElementById("xtra1").checked = false;
            document.getElementById("xtra2").checked = false;
            document.getElementById("xtra3").checked = false;
        }
        else {
            specialField.style.visibility = "hidden";
            xtra.checked = false;
            document.getElementById("xtra1").checked = false;
            document.getElementById("xtra2").checked = false;
            document.getElementById("xtra3").checked = false;
        }
    }

    else if ((lunchDay.checked) && (!oneDay.checked) && (!secondDay.checked)) {
        var newElement = document.createElement("p");
        var note = document.createTextNode("Dag inte vald.");
        if (document.getElementById("lError").childNodes.length == 0) {
            newElement.appendChild(note);
            document.getElementById("lError").appendChild(newElement);
        }
    }
    else {
        var errorMsg = document.getElementById("lError");
        errorMsg.innerHTML = "";
        firstLunch.style.visibility = "hidden";
        secondLunch.style.visibility = "hidden";
        firstLunchText.style.visibility = "hidden";
        secondLunchText.style.visibility = "hidden";
        xtrLABEL.style.visibility = "hidden";
        xtra.style.visibility = "hidden";
        specialField.style.visibility = "hidden";
        xtra.checked = false;
        firstLunch.checked = false;
        secondLunch.checked = false;
        document.getElementById("xtra1").checked = false;
        document.getElementById("xtra2").checked = false;
        document.getElementById("xtra3").checked = false;
    }
}
    //Checks the lenght of textbox
    function checkLengthOfText() {

    if(document.getElementById("textArea").value.length <= 200){
        return true;
    }
    else {
        return false;

    }
}
    //Checks the price per day
    function checkPriceDays() {
    "use strict";
        if((oneDay.checked) && (secondDay.checked)){
                price += 500;
            }
        else if(oneDay.checked || secondDay.checked){
            if(oneDay.checked) {
                if(price > 0){
                    price -= 500;
                    checkPriceNight();
                    checkPriceLunch();

                }
                else{
                price += 1000;}
            }
            else if(secondDay.checked) {
                if(price > 0 ){
                    price -= 500;
                    checkPriceNight();
                    checkPriceLunch();
                }
                else {
                    price += 1000;
                }
            }
            }
        else {
            price = 0;

        }
        priceList();
    }
    //Checks the price per night
    function checkPriceNight(){
    "use strict";
    if((firstNight.checked) && (secondNight.checked)){
        price -= 400;
        priceNightCounter = 0;
        priceNightCounter += 800;
    }
    else if(firstNight.checked || secondNight.checked){
        if(firstNight.checked) {
                if(priceNightCounter === 0) {
                    priceNightCounter += 400;
                }
                else if(priceNightCounter === 400) {
                    priceNightCounter -= 800;
                }else if(priceNightCounter === 800) {
                    priceNightCounter -= 1200;
                }
            }
            else if (secondNight.checked){
                if(priceNightCounter === 0) {
                    priceNightCounter += 400;
                }
                else if(priceNightCounter === 400) {
                    priceNightCounter -= 800;
                }
                else if(priceNightCounter === 800) {
                priceNightCounter -= 1200;
            }


        }
    }
    else {
        if(priceNightCounter === 0){
            priceNightCounter = 0;
        }
        else if((priceNightCounter === 400) || (priceNightCounter === -400)) {
            price -= 400;
        }
        else if(priceNightCounter >=800){
            price -= 800;
        }
        priceNightCounter = 0;

    }
    price += priceNightCounter;
        priceList();

}
    // Checks the price of lunch
    function checkPriceLunch(){
        "use strict";
        if((firstLunch.checked) && (secondLunch.checked)){
            price -= 50;
            priceLunchCounter = 0;
            priceLunchCounter += 100;
        }
        else if(firstLunch.checked || secondLunch.checked){
            if(firstLunch.checked) {
                if(priceLunchCounter === 0) {
                    priceLunchCounter += 50;
                }
                else if(priceLunchCounter === 50) {
                    priceLunchCounter -= 100;
                }else if(priceLunchCounter === 100) {
                    priceLunchCounter -= 150;
                }
            }
            else if (secondLunch.checked){
                if(priceLunchCounter === 0) {
                    priceLunchCounter += 50;
                }
                else if(priceLunchCounter === 50) {
                    priceLunchCounter -= 100;
                }
                else if(priceLunchCounter === 100) {
                    priceLunchCounter -= 150;
                }


            }
        }
        else {
            if(priceLunchCounter === 0){
                priceLunchCounter = 0;
            }
            else if((priceLunchCounter === 50) || (priceLunchCounter === -50)){
                price -= 50;
            }
            else if(priceLunchCounter === 100){
                price -= 100;
            }
            priceLunchCounter = 0;

        }
        price += priceLunchCounter;
        priceList();
}
    // Preview the image from input
    function previewImage(){
        "use strict";
        var imgInput = document.getElementById("imageInput");
        var imgInputVal = document.getElementById("imageInput").value;
        var imgPreview = document.getElementById("imgPrev");
        var imgExtension = imgInputVal.substring(imgInputVal.lastIndexOf("."));
        var fileReader = new FileReader();
        if(imgInput.files[0]) {
            if(imgExtension === ".jpg" || imgExtension === ".JPG" || imgExtension === ".png" ||
            imgExtension === ".PNG"){
                fileReader.readAsDataURL(imgInput.files[0]);
                fileReader.onload = function (frEvent) {
                    imgPreview.src = frEvent.target.result;
                };
            }
            else{
                imgPreview.src = "";
                imageValidation();
            }
        }
        else {
            imgInput.innerHTML = "";
        }

    }











