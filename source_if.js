strin = window.prompt( "Please input sentence:");
var p1 = '<img src="image/';
var p2 = '.png" id="word" alt="';
var un = '<img src="image/unknown.png" id="word" alt="';
for(var i = 0;i < strin.length;i++){
	t = strin.charCodeAt(i);
	if((t <= 90 && t >= 65) || (t <= 122 && t >= 97) || t == 63 || t == 32){
		document.write(p1 + t + p2 + strin.charCodeAt(i) + '">');
	}
	else{
		document.write(un + strin.charCodeAt(i) + '">');
	}
}
document.writeln("<br>");