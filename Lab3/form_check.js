function isWhiteSpaceOrEmpty(str) {
 return /^[\s\t\r\n]*$/.test(str);
}

function isEmpty(str) {
	if(str.length==0)
		return true;
	else return false;
}

function checkString(str, msg){
	if (isWhiteSpaceOrEmpty(str)==true){
		alert(msg);
		return false;
	}
	else return true;
}

function checkStringAndFocus(obj, msg) {
	 let str = obj.value;
	 let errorFieldName = "e_" + obj.name.substr(2, obj.name.length);
	 if (isWhiteSpaceOrEmpty(str)) {
		 document.getElementById(errorFieldName).innerHTML = msg;
		 obj.focus();
		 return false;
	 }
	 else {
		document.getElementById(errorFieldName).innerHTML = "";
		obj.focus();
		return true;
	 }
}


function checkEmailAndFocus(obj,msg) {
	 let email = /^[a-zA-Z_0-9\.]+@[a-zA-Z_0-9\.]+\.[a-zA-Z][a-zA-Z]+$/;
	 let str = obj.value;
	 let errorFieldName = "e_" + obj.name.substr(2, obj.name.length);
	 if (email.test(str)){
		 document.getElementById(errorFieldName).innerHTML = "";
		 obj.focus();
		 return true;
	 }
	 else {
		 document.getElementById(errorFieldName).innerHTML = msg;
		 obj.focus();
		 return false;
	}
}

function checkAndFocus(obj, msg, fun){
	fun(obj,msg);
	}


function showElement(e) {
	document.getElementById(e).style.visibility = 'visible';
}
function hideElement(e) {
	document.getElementById(e).style.visibility = 'hidden';
}


function alterRows(i, e) {
	 if (e) {
		 if (i % 2 == 1) {
			e.setAttribute("style", "background-color: Aqua;");
		 }
		 e = e.nextSibling;
		 while (e && e.nodeType != 1) {
			e = e.nextSibling;
		 }
		 alterRows(++i, e);
	 }
}

function cnt(form, msg, maxSize) {
 if (form.value.length > maxSize)
 form.value = form.value.substring(0, maxSize);
 else
 msg.innerHTML = maxSize - form.value.length;
}


function nextNode(e) {
	 while (e && e.nodeType != 1) {
	 e = e.nextSibling;
	 }
	 return e;
}
function prevNode(e) {
	 while (e && e.nodeType != 1) {
	 e = e.previousSibling;
	 }
	 return e;
}
function swapRows(b) {
	 let tab = prevNode(b.previousSibling);
	 let tBody = nextNode(tab.firstChild);
	 let lastNode = prevNode(tBody.lastChild);
	 tBody.removeChild(lastNode);
	 let firstNode = nextNode(tBody.firstChild);
	 tBody.insertBefore(lastNode, firstNode);
}

function validate(formularz){
	checkAndFocus(formularz.elements["f_imie"],"Podaj imię!", checkStringAndFocus);
	checkAndFocus(formularz.elements["f_nazwisko"],"Podaj nazwisko!", checkStringAndFocus);
	checkAndFocus(formularz.elements["f_kod"],"Podaj kod pocztowy!", checkStringAndFocus);
	checkAndFocus(formularz.elements["f_miasto"],"Podaj miasto!", checkStringAndFocus);
	checkAndFocus(formularz.elements["f_ulica"],"Podaj ulicę!", checkStringAndFocus);
	checkAndFocus(formularz.elements["f_email"], "Podaj właściwy email!", checkEmailAndFocus);
}