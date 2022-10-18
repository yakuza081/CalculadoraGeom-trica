function triangulo() {
    const base = parseFloat(prompt("informe a base do triângulo:"))
    const altura = parseFloat(prompt("Informe a altura do triãngulo:"))
    return (base * altura) / 2
}

function retângulo() {
    const base = parseFloat(prompt("informe a base do retângulo:"))
    const altura = parseFloat(prompt("Informe a altura do retngulo:"))
    return base * altura
}

function quadrado(){
    const lado = parseFloat(prompt("Informe o Lado do Quadrado:"))
    return lado * lado
}

function trapezio() {
    const maior = parseFloat(prompt("Informe a Base maior do Trapézio:"))
    const menor = parseFloat(prompt("Informe a Base menor do Trapézio:"))
    const altura = parseFloat(prompt("Informe a Altura do Trapézio:"))
    return (maior + menor) * altura / 2
}

function circulo() {
    
    const raio = parseFloat(prompt("Informe o Raio do Círculo"))
    return  3.14 * raio **2
}

function menu(){
    return prompt("Calculadora Geométrica\n" +
    "1. Calcular Área do Triângulo\n" +
    "2. Calcular Área do Retângulo\n" +  
    "3. Calcular Área do Quadrado\n" +  
    "4. Calcular Área do Trapézio\n" +  
    "5. Calcular Área do Círculo\n" +
    "6. Sair"

    )
}

function executar() {
    let opcao = ""

    do {
        opcao = menu()
        let resultado
        
        switch (opcao) {
            case  "1":
                resultado = triangulo()
                break;
            case "2":
                resultado = retângulo()
                break;
            case "3": 
                resultado = quadrado()
                break;
            case "4":
                resultado = trapezio()
                break;  
            case "5":
                resultado = circulo()
                break;
            case "6":
                alert("Saindo...")
                break;
        
            default:
                alert("Opção Inválida!")
                break;
        }
    
        if(resultado){
            alert("A área é  " + resultado)
        }
    } while (opcao !== "6");
}
executar()