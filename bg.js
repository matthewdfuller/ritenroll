function main () {
    var _body = document.getElementsByTagName('body') [0];
    var _div = document.createElement('div');
    _div.innerHTML = "<div id=\"betabar\">Beta version! You will run into things that don't work yet - you've been warned.</div>";
    var _helperdiv = document.createElement('div');
    _helperdiv.innerHTML = "<div id=\"helpbelowcoursesubj\">Use the Select Subject button to choose your department NUMBER.</div>";
    
    document.body.parentElement.insertBefore(_div, document.body);
    document.getElementById('win0divDERIVED_CLSRCH_SSR_SUBJ_GROUP2').insertBefore(_helperdiv);
    document.getElementById('DERIVED_CLSRCH_SSR_CLASS_LBL_LBL').innerHTML = "Basic Information";
    document.getElementById('CLASS_SRCH_WRK2_SSR_PB_SUBJ_SRCH').innerHTML = "[ Select Subject ]"
    _body.replace("Class Search Criteria", "Step Two - Search Criteria");
    document.body.innerHTML = "";
}

window.onload = main;