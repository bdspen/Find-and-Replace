describe('replace', function() {
	it("returns input string", function(){
		expect(replace("Hello World")).to.equal("Hello World")
	});
	it("replaces a one letter word that user tells the program to replace with another one letter word", function(){
		expect(replace("a", "a", "b")).to.equal("b")
	});
	it("replaces the word that user tells the program to replace with newWord in a one word sentence", function(){
		expect(replace("World", "World", "Universe")).to.equal("Hello Universe")
	});
	it("replaces the word that user tells the program to replace with newWord in a multi word sentence", function(){
		expect(replace("Hello World", "World", "Universe")).to.equal("Hello Universe")
	});
	it("replaces the word that user tells the program to replace with newWord in a multi word sentence", function(){
		expect(replace("Hello Hello World", "Hello", "Hi")).to.equal("Hi Hi World")
	});

	//capitalization
	//punctuation - "Hello!", "Hello", "Hi" -> "Hi!"
	//negative cases - "My dog has fleas", "banana" -> ? error, return the same sentence? 

	// it("replaces more than one instance of the search word", function(){
	// 	expect(replace("Hello World World", "World", "Universe")).to.equal("Hello Universe Universe")
	// })
});
