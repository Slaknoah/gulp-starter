function loadSprites() {
    var xmlFile="assets/svg/sprite.svg"
    var loadXML = new XMLHttpRequest;
    loadXML.onload = callback;
    loadXML.open("GET", xmlFile, true);
    loadXML.send();
    function callback()
    {
        //---responseText---
        var xmlString=loadXML.responseText
        //---DOMParser---
        var parser = new DOMParser();
        var mySpritesDoc=parser.parseFromString(xmlString,"text/xml").documentElement ;
        var addSprites=mySpritesDoc.childNodes
        for(var k=0;k<addSprites.length;k++)
        {
           var sprite=addSprites.item(k).cloneNode(true)
           document.getElementById("svg-sprite").appendChild(sprite)
        }
    }
}
loadSprites();