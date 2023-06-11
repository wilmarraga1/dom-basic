var estudiantes=["maria","sergio","rosa","daniel"];
function saludarestudiantes(estudiante){
    console.log('hola, ${estudiante}');
}
for (var i=0;i<estudiantes.length;i++){
    saludarestudiantes(estudiantes[i]);
}