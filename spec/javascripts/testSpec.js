// TO DO LIST

/*
	1.   => 
	2.  hola => hola
	3.  hola adeu => hola adeu
	4.  carlos@iexpertos.com => carlos@iexpertos.com
	5.  carlos(AT)iexpertos.com => carlos@iexpertos.com
	6.  carlos(AT)iexpertos(DOT)com => carlos@iexpertos.com 
	7.  I want to send an email to carlos(AT)iexpertos.com => I want to send an email to carlos@iexpertos.com
	8.  I want to send an email to carlos(AT)iexpertos(DOT)com => I want to send an email to carlos@iexpertos.com
	9.  I want to send an email to carlos-AT-iexpertos-DOT-com => I want to send an email to carlos@iexpertos.com
	10. I want to send an email to carlos(AT)iexpertos-DOT-com => I want to send an email to carlos@iexpertos.com
	11. I want to send an email to carlos-AT-iexpertos(DOT)com => I want to send an email to carlos@iexpertos.com
*/
function converter (arg) {
	if (!arg) {
		return"";
	};
	arg = arg.replace("(AT)", "@");
	arg = arg.replace("(DOT)", ".");
	return arg;
}

describe("Hide email converter", function() {
	it("returns an empty string if input is empty", function() {
		expect(converter("")).toBe("");
	});

	it("returns the content of the passed string if there are no special cases", function(){
		expect(converter('hola')).toBe('hola');
	});

	it("returns @ where there was (AT) ", function() {
		expect(converter("(AT)")).toBe("@");
	});

	it("returns . where there was (DOT)", function() {
		expect(converter('(DOT)')).toBe('.');
	});


});