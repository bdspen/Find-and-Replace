describe('replace', function() {
	it("returns input string", function(){
		expect(replace("Hello World")).to.equal("Hello World")
	});
	it("replaces the word that user tells the program to replace with newWord", function(){
		expect(replace("Hello World", "World", "Universe")).to.equal("Hello Universe")
	});
	// it("replaces more than one instance of the search word", function(){
	// 	expect(replace("Hello World World", "World", "Universe")).to.equal("Hello Universe Universe")
	// })
});
