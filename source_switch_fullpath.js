strin = window.prompt( "Please input sentence:");
var path = 'https://benjamin1021523.github.io/SScharacters/'
var p1 = '<img src="' + path + 'image/';
var p2 = '.png" id="word" alt="';
var un = '<img src="' + path + 'image/unknown.png" id="word" alt="';
for(var i = 0;i < strin.length;i++){
	t = strin.charCodeAt(i);
	switch(t){
		case 32:	case 63:
		case 65:	case 66:	case 67:	case 68:	case 69:
		case 70:	case 71:	case 72:	case 73:	case 74:
		case 75:	case 76:	case 77:	case 78:	case 79:
		case 80:	case 81:	case 82:	case 83:	case 84:
		case 85:	case 86:	case 87:	case 88:	case 89:
		case 90:	case 97:	case 98:	case 99:	case 100:
		case 101:	case 102:	case 103:	case 104:	case 105:
		case 106:	case 107:	case 108:	case 109:	case 110:
		case 111:	case 112:	case 113:	case 114:	case 115:
		case 116:	case 117:	case 118:	case 119:	case 120:
		case 121:	case 122:
			document.write(p1 + t + p2 + t + '">');
			break;
		default:
			document.write(un + t + '">');
			break;
	}
}
document.writeln("<br>");