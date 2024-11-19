var grayNumb = "";
var blackNumb = "";
var grayRow = document.querySelector('.grayNumb');
var blackRow = document.querySelector('.blackNumb');
var pointerCheck;
var sdvig = 5;
var prov = 0;
var numbOfOper=0;
var number1 = "";
var number2 = "";
var operator = "";
var prov2 = 0;

function numbButton(x){
	if (blackNumb === "Infinity") {alert('К бесконечности нельзя приписать число.')}
	else {
	if (x == 10) {
	x = ".";}
	if (blackNumb == "" && x == '.') {alert("Ни одно число не начинается с точки.");}
	else if (pointerCheck == '.' && x == '.') {alert("Ни одно вечественное число не имеет больше одной точки.");}
	else	{
	sdvig +=16;
	blackNumb = blackNumb + String(x);
	pointerCheck = blackNumb.replace(/[^.]/g, '');
	document.querySelector('.grayNumb').style.right =sdvig + 'px';
	document.querySelector('.blackNumb').textContent = blackNumb;
	}
}
}

function clearButton(){
	grayNumb = "";
	blackNumb = "";
	numbOfOper = 0;
	sdvig = 5;
	document.querySelector('.grayNumb').textContent = grayNumb;
	document.querySelector('.blackNumb').textContent = blackNumb;
}

function deleteButton(){
	if (blackNumb === "Infinity"){
		grayNumb = "";
		blackNumb = "";
		numbOfOper = 0;
		sdvig = 5;
		document.querySelector('.grayNumb').textContent = grayNumb;
		document.querySelector('.blackNumb').textContent = blackNumb; 
		
	}
	else if (blackNumb != ""){
	blackNumb = blackNumb.substring(0,blackNumb.length-1);
	pointerCheck = blackNumb.replace(/[^.]/g, '');
	sdvig -= 16;
	document.querySelector('.grayNumb').style.right =sdvig + 'px';
	document.querySelector('.blackNumb').textContent = blackNumb;
	}
	else if (numbOfOper>1) {
		numbOfOper -=1;
		grayNumb = grayNumb.substring(0,grayNumb.length-1);
		grayNumb = grayNumb.substring(0,grayNumb.length-1);
		grayNumb = grayNumb.substring(0,grayNumb.length-1);
		sdvig = 0;
		while (prov !=1){
			if (grayNumb.slice(-1) != ' '){
			blackNumb =grayNumb.slice(-1) + blackNumb;
			grayNumb = grayNumb.substring(0,grayNumb.length-1);
			}
			else {prov = 1;}
			sdvig += 16;
		}
		sdvig-=11;
		prov = 0;
	
	document.querySelector('.grayNumb').textContent = grayNumb;
	document.querySelector('.grayNumb').style.right =sdvig + 'px';	
	document.querySelector('.blackNumb').textContent = blackNumb;
	}
	else {
		numbOfOper -=1;
		grayNumb = grayNumb.substring(0,grayNumb.length-1);
		grayNumb = grayNumb.substring(0,grayNumb.length-1);
		grayNumb = grayNumb.substring(0,grayNumb.length-1);
		blackNumb = grayNumb;
		grayNumb = "";
	document.querySelector('.grayNumb').textContent = grayNumb;
	document.querySelector('.blackNumb').textContent = blackNumb;
	}
}

function operButton(x){
	 if (x === '-' && blackNumb === '-') {
		blackNumb = "";
		sdvig -=16;
		document.querySelector('.grayNumb').style.right =sdvig + 'px';
		document.querySelector('.grayNumb').textContent = grayNumb;
		document.querySelector('.blackNumb').textContent = blackNumb;
		}
	else if (blackNumb === '-') {
		alert('напишите циферки');
	}
	else if (blackNumb != "" && blackNumb.slice(-1) != '.'){
	numbOfOper +=1;
	grayNumb = grayNumb + blackNumb + ' ' + x + ' ';
	blackNumb = "";
	sdvig = 5;
	document.querySelector('.grayNumb').style.right =sdvig + 'px';
	document.querySelector('.grayNumb').textContent = grayNumb;
	document.querySelector('.blackNumb').textContent = blackNumb;
	}
	else if ((x === '-' && numbOfOper===0) || (x === '-' && grayNumb.slice(-2) != '/ ') || (x === '-' && grayNumb.slice(-2) != '* '))
	{
		sdvig +=16;
		blackNumb ='-' + blackNumb;
		document.querySelector('.grayNumb').style.right =sdvig + 'px';
		document.querySelector('.grayNumb').textContent = grayNumb;
		document.querySelector('.blackNumb').textContent = blackNumb;
	}
	else if (numbOfOper==0 && blackNumb.slice(-1) != '.') {alert("нельзя ставить знак перед циферками !!!!!")}
	else {alert("нельзя ставить несколько знаков подряд !!!!!")}
}

function equationButton(){
	if (blackNumb == "" || blackNumb.slice(-1) === '.') {alert("закончите выражение пожалуйста !!!!!")}
	else if (grayNumb === ""){}
	else {
		if (grayNumb.slice(1,2) === '-'){
		number1 ='-';
		grayNumb=grayNumb.substr(3);
		}
	while (prov!=1){
		if (grayNumb.slice(0,1) != ' '){
			number1 = number1 + String(grayNumb.slice(0,1));
			grayNumb=grayNumb.substr(1);
		}
		else {
			grayNumb=grayNumb.substr(1);
			operator = String(grayNumb.slice(0,1));
			grayNumb=grayNumb.substr(1);
			grayNumb=grayNumb.substr(1);
			prov = 1;
		}
		
	}
	prov =0;
	while (prov2!=1){
		if (grayNumb != "") {
			while (prov!=1){
				if (grayNumb.slice(0,1) != ' '){
					number2 = number2 + String(grayNumb.slice(0,1));
					grayNumb=grayNumb.substr(1);
				}
				else {		
					prov = 1;
				}
			}
			if (operator === '+'){
				number1 = Number(number1) + Number(number2);
				}
			else if (operator === '-'){
				number1 = Number(number1) - Number(number2);
				}
			else if (operator === '*'){
				number1 = Number(number1) * Number(number2);
				}
			else if (operator === '/'){
				number1 = Number(number1) / Number(number2);
				}
			else {break}
			
			grayNumb=grayNumb.substr(1);
			operator = String(grayNumb.slice(0,1));
			grayNumb=grayNumb.substr(1);
			grayNumb=grayNumb.substr(1);
			prov =0;
			number2 = "";
		}
		else {
			prov2=1;
		}
	}
	prov2=0;
			if (operator === '+'){
				blackNumb = Number(number1) + Number(blackNumb);
				}
			else if (operator === '-'){
				blackNumb = Number(number1) - Number(blackNumb);
				}
			else if (operator === '*'){
				blackNumb = Number(number1) * Number(blackNumb);
				}
			else if (operator === '/'){
				blackNumb = Number(number1) / Number(blackNumb);
				}
		blackNumb = blackNumb + 'a';
		blackNumb = blackNumb.substring(0,blackNumb.length-1);
		pointerCheck = blackNumb.replace(/[^.]/g, '');
		document.querySelector('.grayNumb').textContent = grayNumb;
		document.querySelector('.blackNumb').textContent = blackNumb;
		number1 = "";
		number2 = "";
		operator = "";
	}
}