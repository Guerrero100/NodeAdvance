/*
let data = fs.readFileSync('./data/personas.json');
 console.log(data);
let personas = JSON.parse(data).personas;
console.log(personas);
console.log(typeof (personas));

- require es una función sincrónica y se llama solo una vez, lo que significa que las llamadas reciben 
un resultado en caché. Si el archivo está actualizado, no puede volver a leerlo con este método.
- Su archivo debe tener la extensión '.json', por lo que no puede ser tan flexible. Sin la extensión 
adecuada, require no trata el archivo como un archivo JSON.
*/

let data= {
    "cursos": [{
        "Codigo": "924813",
        "Nombre": "Lenguaje" 
    },{
        "Codigo": "824571",
        "Nombre": "Matematica"
    },{
        "Codigo": "862138",
        "Nombre": "Quimica",
    },{
        "Codigo": "415263",
        "Nombre": "Programación"
    }]
};
//let jsonData = JSON.stringify(data);
/* console.log(jsonData);
console.log(typeof (jsonData)); */
//console.log("Archivo generado exitosamente!");

 /*  fs.writeFile('./data/cursos.json', jsonData, (error) => {
    if (error) {
         console.log(`Error: ${error}`); 
    }  else {
        console.log("Archivo JSON generado correctamente");
    } 
})  */
