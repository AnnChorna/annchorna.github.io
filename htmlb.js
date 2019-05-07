let code = "";

class HTML{

	constructor(){
		this.open = "<HTML>\n";
		this.head = new Head();
		this.body = new Body();
		this.close = "</HTML>";
	}

	getCode(){
		code = this.open;
		this.head.getCode();
		this.body.getCode();
		code += this.close;
	}
}
class Head{
	constructor(){
		this.open = "<head>\n";
		this.child = new Map();

		this.close = "</head>\n";
	}

	addChild(id, child){
		this.child.set(id, child);
	}

	editChild(id, child){
		this.child.set(id, child);
	}

	removeChild(id){
		this.child.delete(id);
	}

	getCode(){
		code += this.open;
		for(let [k,v] of this.child){
			v.getCode();
		}
		code += this.close;
	}
}
class Title{
	constructor(title){
		this.open = "<title>";
		this.title = title;
		this.close = "</title>\n";
	}


	editScript(title){
		this.title = title;
	}

	getCode(){
		code += this.open;
		code += this.title;
		code += this.close;
	}
}
class ScriptFile{

	constructor(src){
		this.open = "<script src=\"";
		this.fileName = src;
		this.close = "\" ></script>\n";
	}


	editSRC(src){
		this.fileName = src;
	}

	removeSRC(){
		this.fileName = "";
	}

	getCode(){
		code += this.open;
		code += this.fileName;
		code += this.close;
	}
}
class Script{

	constructor(script){
		this.open = "<script>\n";
		this.script = script;
		this.close = "\n</script>\n";
	}


	editScript(src){
		this.fileName = src;
	}

	getCode(){
		code += this.open;
		code += this.script;
		code += this.close;
	}
}
class StyleLink{
	constructor(fileName){
		this.open = "<link type=\"text/css\" href=\"";
		this.css = fileName;
		this.close = "\"></link>\n";
	}


	editScript(src){
		this.css = fileName;
	}

	getCode(){
		code += this.open;
		code += this.css;
		code += this.close;
	}
}
class Style{
	constructor(style){
		this.open = "<style type=\"text/css\">\n";
		this.css = style;
		this.close = "\n</style>\n";
	}


	editScript(style){
		this.css = style;
	}

	getCode(){
		code += this.open;
		code += this.css;
		code += this.close;
	}
}
class Body{
	constructor(){
		this.open = "<body>\n";
		this.child = new Map();
		this.close = "</body>\n";
	}

	getChild(id){
		return this.child.get(id);
	}

	addChild(id, child){
		this.child.set(id, child);
	}

	editChild(id, child){
		this.child.set(id, child);
	}

	removeChild(id){
		this.child.delete(id);
	}

	getCode(){
		code += this.open;
		for(let [k,v] of this.child){
			v.getCode();
		}
		code += this.close;
	}
}
class Div{
	constructor(){
		this.open = "<div>\n";
		this.child = new Map();
		this.close = "\n</div>\n";
	}

	addChild(id, child){
		this.child.set(id, child);
	}

	editChild(id, child){
		this.child.set(id, child);
	}

	removeChild(id){
		this.child.delete(id);
	}

	getCode(){
		code += this.open;
		for(let [k,v] of this.child){
			v.getCode();
		}
		code += this.close;
	}
}
class Link{
	constructor(link, text){
		this.open = "<a href=\"";
		this.linkHref = link + "\">";
		this.linkText = text;
		this.close = "</a>\n";
	}


	editImages(link, text){
		this.linkHref = link + "\">";
		this.linkText = text;
	}

	getCode(){
		code += this.open;
		code += this.linkHref;
		code += this.linkText;
		code += this.close;
	}
}
class Input{
	constructor(type, id){
		this.open = "<input type=\"" + type + "\" id=\"" + id + "\">";
		this.inputId = id;
		this.textContent = "text";
		this.close = "</input>\n";
	}

	setText(text){
		this.textContent = text;
	}


	editImages(type, id, text){
		this.open = "<input type=\"" + type + "\" id=\"" + id + "\">";
		this.inputId = id;
		this,textContent = text;
	}

	getCode(){
		code += this.open;
		code += this.textContent;
		code += this.close;
	}
}
class TextArea{
	constructor(id, text){
		this.open = "<input id=\"" + id + "\">";
		this.inputId = id;
		this.areaContent = text;
		this.close = "</input>\n";
	}


	editImages(id, text){
		this.open = "<input id=\"" + id + "\">";
		this.inputId = id;
		this.areaContent = text;
	}

	getCode(){
		code += this.open;
		code += this.areaContent;
		code += this.close;
	}
}
class Text{
	constructor(type, id, text){
		this.open = "<" + type + " id=\"" + id + "\" value=\"";
		this.inputId = id;
		this.textValue = text;
		this.close = "\"> </" + type + ">\n";
	}


	editImages(type, id, text){
		this.open = "<" + type + " id=\"" + id + "\">";
		this.inputId = id;
		this.textValue = text;
	}

	getCode(){
		code += this.open;
		code += this.textContent;
		code += this.close;
	}
}


let html = new HTML();

html.head.addChild("title",new Title("New page"));
html.head.addChild("script",new Script("alert();"));
html.head.addChild("link",new StyleLink("css.css"));
html.head.addChild("style",new Style(""));

html.body.addChild("div1", new Div());


let a = new Link("img.jpg", "Images");
let input = new Input("input", "inpId");
input.setText("Input");
let button = new Input("button", "butId");
button.setText("Button");
html.body.getChild("div1").addChild("a", a);
html.body.getChild("div1").addChild(input.inputId, input);

html.body.getChild("div1").addChild(input.button, button);
html.getCode();

window.onload = function(){
	document.getElementById('text').innerHTML = code;
}


//TODO!!!!!!