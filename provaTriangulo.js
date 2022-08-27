function Enviar () {
    var ladoA = document.querySelector ('#comp1');
    var ladoB = document.querySelector ('#comp2');
    var ladoC = document.querySelector ('#comp3');
    var res = document.querySelector ('#res');


    var ladoA = Number (comp1.value);
    var ladoB = Number (comp2.value);
    var ladoC = Number (comp3.value);

    var img = document.createElement ('img')
    img.setAttribute ('id', 'foto')

    if (ladoA == " " || ladoB == " " || ladoC == " ") {
        alert ('Preencha os campos corretamente !')

    } else if ((ladoA  == ladoB) && (ladoB == ladoC)) {

        img.setAttribute ('src', 'foto-equi.png')
        res.innerHTML = `Foi detectado que é um Triangulo Equilátero `
        document.body.style.background = "#3E7D94"
        res.appendChild (img)

    }else if ( (ladoA  == ladoB) || (ladoA == ladoC) || (ladoB == ladoC)) {

        img.setAttribute ('src', 'foto-iso.png')
        res.innerHTML = `Foi detectado que é um Triangulo Isósceles `
        document.body.style.background = "#684191"
        res.appendChild (img)
    } else {

        img.setAttribute ('src', 'foto-esca.png')
        res.innerHTML = `Foi detectado que é um Triangulo Escaleno `
        document.body.style.background = "#8CABE6"
        res.appendChild (img)
    } 
    
   





    
}