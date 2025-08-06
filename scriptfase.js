   function idade() {
            let idadeUser = document.getElementById("uva").value;
            idadeUser = parseInt(idadeUser);
            console.log(idade);
            
            if (idadeUser < 12) {
                console.log("Você é uma criança");
                alert("Você é uma criança");
            } else if (idadeUser < 18) {
                console.log("Você é um adolescente");
                alert("Você é um adolescente");
            } else if (idadeUser < 59) {
                console.log("Você é um adulto");
                alert("Você é adulto");
            } else {
                console.log("Você é idoso");
                alert("Você é idoso!");
            }
        }

        function fruta() {
            let idadeUser = document.getElementById("uva").value;
            console.log(idadeUser);
        }
    
        function calculadora() {
            let number1 = parseInt(document.getElementById("number1").value);
            console.log(number1);
        
            let number2 = parseInt(document.getElementById("number2").value);
            console.log(number2);

            console.log( number1 + number2 );
            alert("O resultado é: " + (number1 + number2));
        }

        function calculadora2() {
            let number1 = parseInt(document.getElementById("numbera").value);
            console.log(number1);

            let number2 = parseInt(document.getElementById("numberb").value);
            console.log(number2);

            let resultado = number1 + number2;
            console.log( number1 + number2 );

            document.getElementById("resultado1").innerText = "Resultado: " + resultado;

            document.getElementById("img1").innerHTML = '<img src="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_16x9.jpg?w=1200" alt="Teste texto" style="width: 350px">';
        }

        function parimpar() {
            let parOuImpar = parseInt(document.getElementById("parOuImpar").value);
            console.log(parOuImpar % 2 == 0);

            if (parOuImpar % 2 == 0) {
                document.getElementById("img2").innerHTML = '<img src="https://i.ytimg.com/vi/7oyux71Q8AA/maxresdefault.jpg" alt="Positivo" title= "Positivo" style="width: 350px"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWPlCnk_Emv9HmFSLhUtE-tdNXtPHx_yeCXQ&s" title="Sinal Positivo" alt="Sinal positivo" style="width: 200px"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrYVb3HuEM1gIcIP3lAVndeVZwiK5p3V_w2n7f_fjjuXtEaSocSFm1YWtH3F9e3GVcfpY&usqp=CAU" title="Carinha feliz" alt="Carinha feliz" style="width: 200px">';
                document.getElementById("resultado2").innerText = "Seu número é par";
                console.log("seu numero é par");
            }
            else {
                document.getElementById("img2").innerHTML = '<img src="https://static.escolakids.uol.com.br/2022/06/numeros-impares-100.jpg" alt="Negativo" title="Negativo" style="width: 350px"><img src="https://img.freepik.com/vetores-gratis/polegar-para-baixo-no-circulo-vermelho_1025-582.jpg" title="Sinal Negativo" alt="Sinal negativo" style="width: 385px"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS49c9Qve6B3NSvEW2b8f6jdcDy6iQnbUHViw&s" title="Carinha triste" alt="carinha triste" width="385px">';
                document.getElementById("resultado2").innerText = "Seu número é impar";
                console.log("seu numero é impar");
            }
        }

       
      //num % 2 == 0
