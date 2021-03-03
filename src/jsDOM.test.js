/**
 * @jest-environment jsdom
 */
let StyledComponent = require('./jsDOM.js')

test('use jsdom in this test file', () => {
    const element = document.createElement('div');
    expect(element).not.toBeNull();
  });
  
  let component = new StyledComponent;

  it('create method returns something like an element',function() {
  
      expect(component.create('span').el.nodeName).toBe("SPAN");
  })
  it('css method applies inline css properties',() => {
      component.css({color:'red',background:'blue'})
  
      expect(component.el.style['color']).toBe('red')
  })
/*
  describe('text method creates a text node and sets its text content',() => {
	it("creates a textNode",() => {
		component.text("abc");
		expect(component.textNode).toBeTruthy()
	})

	it("and has set its text Content",() => {
		expect(component.textNode.textContent).toBe("abc")
	})
})
*/
describe('text method sets text content',() => {
	it("has a text content",() => {
		component.text("abc");
		expect(component.el.textContent).toBe("abc")
	})
})

describe('can apply styles',() => {
	it("takes an object and sets css",() => {
		component.css({background:"red",color:"blue"});
		expect(component.el.style.background).toBe("red")
        expect(component.el.style.color).toBe("blue")
	})
})

describe('can apply attributes',() => {
	it("takes an object and sets attributes",() => {
		component.attr({class:"header",dataTest:"test-id"})
		expect(component.el.getAttribute('dataTest')).toBeTruthy()
        expect(component.el.classList.contains("header")).toBeTruthy()
	})
})

/*
it('renders to document',() => {
	let el=new StyledComponent()
	el.init('div')
	el.text('hello')
	document.body.appendChild(el.el)
	expect('hello').toBeInDocument();
})
*/