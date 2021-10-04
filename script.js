// total marks count
function Total(){
    var sub1 = parseInt(document.getElementById("eng").value);
    var sub2 = parseInt(document.getElementById("mat").value);
    var sub3 = parseInt(document.getElementById("phy").value);
    var sub4 = parseInt(document.getElementById("urd").value);
    var sub5 = parseInt(document.getElementById("sci").value);

    if(sub1>100 || sub2>100 || sub3>100 || sub4>100 || sub5>100){
        alert("Please Enter a Mark in Range of 100")
    }
    else{
        var total = sub1 + sub2 + sub3 + sub4 +sub5 ;
        document.getElementById("total").innerHTML = "English Marks: "+sub1+ "<br> Mathmetics Marks: "+sub2+ "<br> Physics Marks: "+sub3+ "<br> Computer Marks: "+sub4+ "<br> Science Marks: "+sub5+ "<br>_______________<br> Total Marks: "+total;

    }
}

// average marks count
function Average(){
    var sub1 = parseInt(document.getElementById("eng").value);
    var sub2 = parseInt(document.getElementById("mat").value);
    var sub3 = parseInt(document.getElementById("phy").value);
    var sub4 = parseInt(document.getElementById("urd").value);
    var sub5 = parseInt(document.getElementById("sci").value);

    if(sub1>100 || sub2>100 || sub3>100 || sub4>100 || sub5>100){
        alert("Please Enter a Mark in Range of 100")
    }
    else{
        var total = sub1 + sub2 + sub3 + sub4 +sub5;
        var ave = total/5;
        document.getElementById("average").innerHTML = "Your Average Marks is: " +ave;
    }
}

// grade identification
function Grade(){
    var sub1 = parseInt(document.getElementById("eng").value);
    var sub2 = parseInt(document.getElementById("mat").value);
    var sub3 = parseInt(document.getElementById("phy").value);
    var sub4 = parseInt(document.getElementById("urd").value);
    var sub5 = parseInt(document.getElementById("sci").value);

    if(sub1>100 || sub2>100 || sub3>100 || sub4>100 || sub5>100){
        alert("Please Enter a Mark in Range of 100")
    }
    else{
        var total = sub1 + sub2 + sub3 + sub4 +sub5;
        var ave = total/5;
        if(ave>=80 && ave<=100){
            document.getElementById("grade").innerHTML = "Your Grade is 'A+'";
        }
        else if(ave>=75 && ave<=80){
            document.getElementById("grade").innerHTML = "Your Grade is 'A'";
        }
        else if(ave>=65 && ave<=75){
            document.getElementById("grade").innerHTML = "Your Grade is 'A-'";
        }
        else if(ave>=55 && ave<=65){
            document.getElementById("grade").innerHTML = "Your Grade is 'B'";
        }
        else if(ave>=45 && ave<=55){
            document.getElementById("grade").innerHTML = "Your Grade is 'C'";
        }
        else if(ave>=33 && ave<=45){
            document.getElementById("grade").innerHTML = "Your Grade is 'D'";
        }
        else{
            document.getElementById("grade").innerHTML = "Your Grade is 'F'";
        }
    }
}