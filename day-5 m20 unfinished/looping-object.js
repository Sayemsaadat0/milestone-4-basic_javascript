var objectsName = {
    property1 : 20 ,
    property2 : 52 ,
    property3 : 2,
    property4 : 10

}
const keys = Object.keys(objectsName);
const values = Object.values(objectsName);
// tough one
for (i=0; i < keys.length; i++){
    var propName = keys[i];
    var propValue = objectsName[propName];
    // console.log(propName, propValue)
}


// for in loop ()
for ( var propName in objectsName){
    const value = objectsName[propName];
    console.log(propName, value);
}