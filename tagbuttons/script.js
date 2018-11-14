function CountTotalElements() {
    var p_count=document.getElementsByTagName("p").length;
    var h1_count=document.getElementsByTagName("h1").length;
    document.getElementById("solution").innerHTML = "There are a total of " + p_count + " p elements and " + h1_count + " h1 elements in the entire page!"
}

function CountSection1Elements() {
    var section1 = document.getElementById('section1')
    var p_count= section1.getElementsByTagName("p").length;
    var h1_count=section1.getElementsByTagName("h1").length;
    document.getElementById("solution").innerHTML = "There are a total of " + p_count + " p elements and " + h1_count + " h1 elements in Section 1!"
}

function CountSection2Elements() {
    var section2 = document.getElementById('section2')
    var p_count= section2.getElementsByTagName("p").length;
    var h1_count=section2.getElementsByTagName("h1").length;
    document.getElementById("solution").innerHTML = "There are a total of " + p_count + " p elements and " + h1_count + " h1 elements in Section 2!"
}