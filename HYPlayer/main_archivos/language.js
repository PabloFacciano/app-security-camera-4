// JavaScript Document
var language=getcookie('language');

if(language=='simple_chinese')
	document.write('<script src="language/simple_chinese.js"><\/script>');
else if (language=='tradi_chinese')
	document.write('<script src="language/tradi_chinese.js"><\/script>');
else if (language=='deutsch')
	document.write('<script src="language/deutsch.js"><\/script>');
else if (language=='french')
	document.write('<script src="language/french.js"><\/script>');
else if (language=='hungarian')
	document.write('<script src="language/hungarian.js"><\/script>');
else if (language=='portuguese')
	document.write('<script src="language/portuguese.js"><\/script>');
else if (language=='spain')
	document.write('<script src="language/spanish.js"><\/script>');
else if (language=='italian')
	document.write('<script src="language/italian.js"><\/script>');
else if (language=='polish')
	document.write('<script src="language/polish.js"><\/script>');
else if (language == 'czech')
    document.write('<script src="language/czech.js"><\/script>');
else if (language=='japanese')
	document.write('<script src="language/japanese.js"><\/script>');
else if (language=='slovak')
	document.write('<script src="language/slovak.js"><\/script>');
else if (language=='english')
	document.write('<script src="language/english.js"><\/script>');
else
	document.write('<script src="language/english.js"><\/script>');