
// object 
var objectName = {
    property1 : 20 ,
    property2 : 52 ,
    property3 : 'string'

}



// full bject as a result
 console.log(objectName)
// //  to kmow any individual property from the object - when we know the object name
console.log(objectName.property1)
// // alternative
var kichuEkta = objectName['property3'];
console.log(kichuEkta);
// // sometimes may happen that we will not know the property name or the keys . we have to find the key names sometimes - to do that ,

var properties = Object.keys(objectName);
console.log(properties);
// to know all the values of an object but we dont know the property names or keys 
var propertyValue = Object.values(objectName);
console.log(propertyValue);

// // add new value to a property 
objectName.property2 = 65 ;
console.log(objectName)
// another way to know property value 
var propertyName = 'property2';
var propertyValue = objectName[propertyName];
console.log(propertyName, propertyValue);