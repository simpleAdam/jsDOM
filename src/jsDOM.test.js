let StyledComponent = require('./jsDOM.js')

/* mocks */
let document={}
document.createElement=(tag) => {return {nodeName:tag.toUpperCase()} }

let component = new StyledComponent;

it('create method returns something like an element',function() {

	expect(component.create('span').el.nodeName).toBe("SPAN");
})
it('css method applies inline css properties',() => {
	component.css({color:'red',background:'blue'})

	expect(component.el.style['color']).toBe('red')
})
describe('text method creates a text node and sets its text content',() => {
	it("creates a textNode",() => {
		component.text("abc");
		expect(component.textNode).toBeTruthy()
	})

	it("and has set its text Content",() => {
		expect(component.textNode.textContent).toBe("abc")
	})
})



	