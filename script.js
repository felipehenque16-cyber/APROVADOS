[
    {
        id: 18,
        subject: "logica",
        subjectName: "Raciocínio Lógico",
        topic: "Conjuntos",
        difficulty: "medium",
        banca: "CESPE",
        year: 2015,
        statement: `Um grupo de 300 soldados deve ser vacinado contra febre amarela e malária. Sabendo-se que a quantidade de soldados que receberam previamente a vacina de febre amarela é o triplo da quantidade de soldados que receberam previamente a vacina de malária, que 45 soldados já haviam recebido as duas vacinas e que apenas 25 não haviam recebido nenhuma delas, é correto afirmar que a quantidade de soldados que já haviam recebido apenas a vacina de malária é[cite: 1]`,
        alternatives: [
            { letter: "A", text: "superior a 40." },
            { letter: "B", text: "inferior a 10." },
            { letter: "C", text: "superior a 10 e inferior a 20." },
            { letter: "D", text: "superior a 20 e inferior a 30." },
            { letter: "E", text: "superior a 30 e inferior a 40" }
        ],
        correct: "E",
        explanation: `Os soldados que tomaram previamente a vacina de febre amarela são $F+45$ e os que tomaram a da malária previamente são $45+M$. Sabendo-se que a quantidade de soldados que receberam previamente a vacina de febre amarela é o triplo da quantidade de soldados que receberam previamente a vacina de malária, podemos escrever que:
$F+45=3\\times(45+M)$
$F=90+3M$
Sabemos que o total de soldados é igual a 300, portanto podemos somar todas as partes do nosso diagrama e igualar a 300:
$300=25+F+45+M$
$230=F+M$
$230=(90+3M)+M$
$140=4M$
$M=35$
Assim, a quantidade de soldados que já haviam recebido apenas a vacina de malária é de 35.[cite: 1]`
    },
    {
        id: 19,
        subject: "logica",
        subjectName: "Raciocínio Lógico",
        topic: "Conjuntos",
        difficulty: "medium",
        banca: "CESPE",
        year: 2015,
        statement: `No triênio 2011-2013, 240 grupos internacionais de pesquisa patentearam seus produtos em pelo menos um dos seguintes países: Brasil, Estados Unidos da América (EUA) e França. Desses grupos, 50 patentearam produtos somente no Brasil e na França; 27 patentearam seus produtos nos três países; 36 patentearam seus produtos somente no Brasil; 40 patentearam seus produtos somente nos EUA e na França; 60 patentearam somente nos EUA e no Brasil; e 130 patentearam seus produtos na França. Com base nessa situação hipotética, julgue os itens a seguir: Menos de 60 grupos patentearam seus produtos na França e nos EUA.[cite: 1]`,
        alternatives: [
            { letter: "C", text: "Certo" },
            { letter: "E", text: "Errado" }
        ],
        correct: "E",
        explanation: `Sabemos ainda que 130 patentearam seus produtos na França. Excluindo os 50, 27 e 40 que já colocamos no conjunto da França, temos $130-50-27-40 = 13$ que patentearam somente na França. [...] Os grupos que patentearam seus produtos nos EUA e na França são $27+40 = 67$. Item ERRADO.[cite: 1]`
    },
    {
        id: 20,
        subject: "logica",
        subjectName: "Raciocínio Lógico",
        topic: "Regra de Três Composta",
        difficulty: "medium",
        banca: "FCC",
        year: 2016,
        statement: `Uma indústria produz um tipo de máquina que demanda a ação de grupos de funcionários no preparo para o despacho ao cliente. Um grupo de 20 funcionários prepara o despacho de 150 máquinas em 45 dias. Para preparar o despacho de 275 máquinas, essa indústria designou 30 funcionários. O número de dias gastos por esses 30 funcionários para preparem essas 275 máquinas é igual a[cite: 1]`,
        alternatives: [
            { letter: "A", text: "55" },
            { letter: "B", text: "36." },
            { letter: "C", text: "60." },
            { letter: "D", text: "72." },
            { letter: "E", text: "48." }
        ],
        correct: "A",
        explanation: `Note que quanto MAIS dias tivermos para fazer o trabalho, MENOS funcionários são necessários, e MAIS máquinas podem ser despachadas. Portanto, devemos inverter a coluna dos funcionários, que é inversamente proporcional.
Montando a proporção:
$45/D=(30/20)\\times(150/275)$
$45/D=(3/2)\\times(6/11)$
$45/D=18/22$
$5/D=1/11$
$D=55$ dias[cite: 1]`
    },
    {
        id: 21,
        subject: "logica",
        subjectName: "Raciocínio Lógico",
        topic: "Lógica Proposicional",
        difficulty: "easy",
        banca: "CESPE",
        year: 2015,
        statement: `Considerando a proposição P: "Se João se esforçar o bastante, então João conseguirá o que desejar", julgue os itens a seguir. () A proposição "João não se esforça o bastante ou João conseguirá o que desejar" é logicamente equivalente à proposição P.[cite: 1]`,
        alternatives: [
            { letter: "C", text: "Certo" },
            { letter: "E", text: "Errado" }
        ],
        correct: "C",
        explanation: `Veja que P é uma condicional $p \\rightarrow q$, onde $p =$ João se esforçar, e $q =$ João conseguirá. Sabemos que isto é equivalente a $\\sim p \\lor q$, onde $\\sim p =$ João NÃO se esforçar. Escrevendo $\\sim p \\lor q$, temos: "João não se esforça o bastante OU João conseguirá o que desejar". Item CORRETO.[cite: 1]`
    },
    {
        id: 22,
        subject: "logica",
        subjectName: "Raciocínio Lógico",
        topic: "Lógica de Argumentação",
        difficulty: "medium",
        banca: "FCC",
        year: 2015,
        statement: `Dadas apenas as proposições "nenhum contador é médico" e "algum médico é biólogo", do ponto de vista da lógica é válido concluir que:[cite: 1]`,
        alternatives: [
            { letter: "A", text: "algum biólogo não é contador" },
            { letter: "B", text: "algum biólogo é contador." },
            { letter: "C", text: "todo biólogo é médico." },
            { letter: "D", text: "algum biólogo é contador e não é médico." },
            { letter: "E", text: "existe biólogo que não é médico." }
        ],
        correct: "A",
        explanation: `Com as duas frases dadas, vemos que existe médico que é biólogo. Esses médicos que são biólogos certamente não são contadores (pois nenhum contador é médico). Assim, vemos que existem biólogos que não são contadores (aqueles biólogos que são médicos certamente não são contadores).[cite: 1]`
    },
    {
        id: 23,
        subject: "logica",
        subjectName: "Raciocínio Lógico",
        topic: "Porcentagem e Frações",
        difficulty: "medium",
        banca: "FCC",
        year: 2016,
        statement: `Uma empresa investiu 3,42 bilhões de reais na construção de uma rodovia. Perto do final da construção a empresa solicitou uma verba adicional de 7% do valor investido para terminar a obra. Sabe-se que três oitavos desse valor adicional estavam destinados ao pagamento de fornecedores e equivalem, em reais, a[cite: 1]`,
        alternatives: [
            { letter: "A", text: "89.775,00." },
            { letter: "B", text: "897.750.000,00." },
            { letter: "C", text: "8.977.500,00." },
            { letter: "D", text: "897.750,00." },
            { letter: "E", text: "89.775.000,00" }
        ],
        correct: "E",
        explanation: `A verba adicional é de 7% de 3,42 bilhões de reais [...] Três oitavos desta verba adicional correspondem a: $3/8$ da verba adicional $= 7\\% \\times 3,42 \\times 3/8 = 0,089775$ bilhões = 89,775 milhões = 89.775.000 reais.[cite: 1]`
    },
    {
        id: 24,
        subject: "logica",
        subjectName: "Raciocínio Lógico",
        topic: "Verdades e Mentiras",
        difficulty: "hard",
        banca: "FCC",
        year: 2014,
        statement: `Alan, Beto, Caio e Décio são irmãos e foram interrogados pela própria mãe para saber quem comeu, sem autorização, o chocolate que estava no armário. Sabe-se que apenas um dos quatro comeu o chocolate, e que os quatro irmãos sabem quem foi. A mãe perguntou para cada um quem cometeu o ato, ao que recebeu as seguintes respostas: Alan diz que foi Beto; Beto diz que foi Caio; Caio diz que Beto mente; Décio diz que não foi ele. O irmão que fala a verdade e o irmão que comeu o chocolate são, respectivamente,[cite: 1]`,
        alternatives: [
            { letter: "A", text: "Beto e Décio." },
            { letter: "B", text: "Alan e Beto." },
            { letter: "C", text: "Beto e Caio." },
            { letter: "D", text: "Alan e Caio." },
            { letter: "E", text: "Caio e Décio" }
        ],
        correct: "E",
        explanation: `Assumindo que apenas um deles fala a verdade, e os demais mentem. Se assumirmos que Caio disse a verdade. Neste caso as frases verdadeiras seriam: Não foi Beto, Não foi Caio, Beto mente (Beto fala a verdade é falso, então Beto mente é real), Foi Décio. Veja que aqui não temos contradição. O culpado é apenas Décio, e quem disse a verdade foi Caio.[cite: 1]`
    },
    {
        id: 25,
        subject: "logica",
        subjectName: "Raciocínio Lógico",
        topic: "Associações Lógicas",
        difficulty: "medium",
        banca: "FCC",
        year: 2015,
        statement: `Luiz, Arnaldo, Mariana e Paulo viajaram em janeiro, todos para diferentes cidades, que foram Fortaleza, Goiânia, Curitiba e Salvador. Com relação às cidades para onde eles viajaram, sabe-se que: Luiz e Arnaldo não viajaram para Salvador; Mariana viajou para Curitiba; Paulo não viajou para Goiânia; Luiz não viajou para Fortaleza. É correto concluir que, em janeiro,[cite: 1]`,
        alternatives: [
            { letter: "A", text: "Paulo viajou para Fortaleza." },
            { letter: "B", text: "Luiz viajou para Goiânia" },
            { letter: "C", text: "Arnaldo viajou para Goiânia." },
            { letter: "D", text: "Mariana viajou para Salvador." },
            { letter: "E", text: "Luiz viajou para Curitiba." }
        ],
        correct: "B",
        explanation: `Mariana viajou para Curitiba. Luiz e Arnaldo não viajaram para Salvador, então Paulo viajou para Salvador. Sobram Fortaleza e Goiânia para Luiz e Arnaldo. Como Luiz não viajou para Fortaleza, Luiz foi para Goiânia. Com isso, sobra apenas Fortaleza para Arnaldo. Portanto, Luiz viajou para Goiânia está CORRETO.[cite: 1]`
    },
    {
        id: 26,
        subject: "logica",
        subjectName: "Raciocínio Lógico",
        topic: "Princípio da Casa dos Pombos",
        difficulty: "medium",
        banca: "FGV",
        year: 2016,
        statement: `Dos 40 funcionários de uma empresa, o mais novo tem 25 anos e o mais velho tem 37 anos. Considerando a idade de cada funcionário como um número inteiro de anos, conclui-se que:[cite: 1]`,
        alternatives: [
            { letter: "A", text: "A média das idades de todos os funcionários é 31 anos" },
            { letter: "B", text: "A idade de pelo menos um dos funcionários é 31 anos" },
            { letter: "C", text: "Nenhum funcionário tem idade igual a 31 anos" },
            { letter: "D", text: "No máximo 25 funcionários têm a mesma idade" },
            { letter: "E", text: "No mínimo 4 funcionários têm a mesma idade." }
        ],
        correct: "E",
        explanation: `De 25 a 37 anos de idade nós temos um total de 13 idades possíveis (em valores inteiros). Fazendo a divisão de 40 por 13, que nos dá o resultado 3 e o resto 1. Isto significa que, mesmo se colocarmos 3 pessoas em cada uma das 13 idades, sobra ainda 1 pessoa, que necessariamente vai entrar em alguma das 13 idades já utilizadas, passando a ser a $4^{a}$ pessoa com aquela idade.[cite: 1]`
    },
    {
        id: 27,
        subject: "logica",
        subjectName: "Raciocínio Lógico",
        topic: "Orientação Espacial e Associações",
        difficulty: "hard",
        banca: "FGV",
        year: 2015,
        statement: `Pai, mãe e seu casal de filhos estão sentados em volta de uma mesa quadrada. Os homens chamam-se Roberto e Sérgio e as mulheres chamam-se Teresa e Fernanda. Sabe-se que: O pai tem Fernanda à sua frente e o filho à esquerda. A mãe está do lado direito de Sérgio. Considere as afirmações: I - A mãe chama-se Fernanda. II - Roberto está em frente de Teresa. III - O pai chama-se Sérgio. É verdadeiro somente o que se afirma em:[cite: 1]`,
        alternatives: [
            { letter: "A", text: "I;" },
            { letter: "B", text: "II;" },
            { letter: "C", text: "III;" },
            { letter: "D", text: "I e II;" },
            { letter: "E", text: "II e III" }
        ],
        correct: "E",
        explanation: `Posicionando o Pai, Fernanda (à frente) e o filho (à esquerda). A mãe não pode estar à direita do filho, pois quem está à direita dele é o pai. Mas a mãe pode estar à direita do pai. Assim, descobrimos que o pai se chama Sérgio. O nome Roberto é do filho. Fernanda é a filha, e Teresa é o nome da mãe. Afirmações: I (FALSO), II (VERDADEIRO), III (VERDADEIRO). Portanto, II e III.[cite: 1]`
    },
    {
        id: 28,
        subject: "logica",
        subjectName: "Raciocínio Lógico",
        topic: "Calendários",
        difficulty: "medium",
        banca: "FCC",
        year: 2015,
        statement: `O mês de fevereiro tem 28 dias em anos regulares e 29 dias em anos bissextos. [...] Se 1° de janeiro de um ano bissexto caiu em uma sexta-feira, o dia 1° de março do ano seguinte cairá em uma[cite: 1]`,
        alternatives: [
            { letter: "A", text: "quarta-feira" },
            { letter: "B", text: "segunda-feira." },
            { letter: "C", text: "sexta-feira." },
            { letter: "D", text: "terça-feira." },
            { letter: "E", text: "quinta-feira." }
        ],
        correct: "A",
        explanation: `Um ano bissexto é composto por 366 dias. Somando ainda os 31 dias de janeiro do ano seguinte, os 28 dias de fevereiro do ano seguinte e mais o dia $1^{\\circ}$ de março, ficamos com um total de: $366+31+28+1 = 426$ dias. Dividindo 426 por 7, obtemos 60 e resto 6. Temos 60 semanas completas (terminando na quinta-feira) e mais seis dias: sexta, sábado, domingo, segunda, terça, QUARTA. Portanto, quarta-feira.[cite: 1]`
    },
    {
        id: 29,
        subject: "logica",
        subjectName: "Raciocínio Lógico",
        topic: "Sequências Lógicas",
        difficulty: "medium",
        banca: "FCC",
        year: 2014,
        statement: `A sequência: 2; 3; 5; 6; 11; 12; 23; 24;... foi criada com um padrão. A diferença entre os $14^{\\circ}$ e $11^{\\circ}$ termos é igual a[cite: 1]`,
        alternatives: [
            { letter: "A", text: "48." },
            { letter: "B", text: "97" },
            { letter: "C", text: "65." },
            { letter: "D", text: "25." },
            { letter: "E", text: "19" }
        ],
        correct: "B",
        explanation: `Temos duas sequências intercaladas. A lógica de formação é a mesma: primeiro somamos 3 unidades, depois 6, depois 12... seguindo esta lógica, devemos somar 24, 48, 96 e assim por diante. Escrevendo os próximos termos, temos: 2; 3; 5; 6; 11; 12; 23; 24; 47; 48; 95; 96; 191; 192. Assim, o $14^{\\circ}$ termo é 192, e o $11^{\\circ}$ é 95. A diferença entre eles é $192-95=97$.[cite: 1]`
    },
    {
        id: 30,
        subject: "logica",
        subjectName: "Raciocínio Lógico",
        topic: "Probabilidade",
        difficulty: "medium",
        banca: "FGV",
        year: 2015,
        statement: `Um tabuleiro de damas tem 32 quadradinhos pretos e 32 quadradinhos brancos. Um desses 64 quadradinhos é sorteado ao acaso. A probabilidade de que o quadradinho sorteado seja um quadradinho preto da borda do tabuleiro é:[cite: 1]`,
        alternatives: [
            { letter: "A", text: "1/2" },
            { letter: "B", text: "1/4" },
            { letter: "C", text: "1/8" },
            { letter: "D", text: "9/16" },
            { letter: "E", text: "7/32." }
        ],
        correct: "E",
        explanation: `Contando os quadradinhos pretos nas quatro bordas do tabuleiro, vemos que, ao todo, são 14. O total de quadradinhos é 64. Probabilidade $=$ casos favoráveis / total de casos $= 14/64 = 7/32$.[cite: 1]`
    }
][
    {
        id: 18,
        subject: "logica",
        subjectName: "Raciocínio Lógico",
        topic: "Conjuntos",
        difficulty: "medium",
        banca: "CESPE",
        year: 2015,
        statement: `Um grupo de 300 soldados deve ser vacinado contra febre amarela e malária. Sabendo-se que a quantidade de soldados que receberam previamente a vacina de febre amarela é o triplo da quantidade de soldados que receberam previamente a vacina de malária, que 45 soldados já haviam recebido as duas vacinas e que apenas 25 não haviam recebido nenhuma delas, é correto afirmar que a quantidade de soldados que já haviam recebido apenas a vacina de malária é[cite: 1]`,
        alternatives: [
            { letter: "A", text: "superior a 40." },
            { letter: "B", text: "inferior a 10." },
            { letter: "C", text: "superior a 10 e inferior a 20." },
            { letter: "D", text: "superior a 20 e inferior a 30." },
            { letter: "E", text: "superior a 30 e inferior a 40" }
        ],
        correct: "E",
        explanation: `Os soldados que tomaram previamente a vacina de febre amarela são $F+45$ e os que tomaram a da malária previamente são $45+M$. Sabendo-se que a quantidade de soldados que receberam previamente a vacina de febre amarela é o triplo da quantidade de soldados que receberam previamente a vacina de malária, podemos escrever que:
$F+45=3\\times(45+M)$
$F=90+3M$
Sabemos que o total de soldados é igual a 300, portanto podemos somar todas as partes do nosso diagrama e igualar a 300:
$300=25+F+45+M$
$230=F+M$
$230=(90+3M)+M$
$140=4M$
$M=35$
Assim, a quantidade de soldados que já haviam recebido apenas a vacina de malária é de 35.[cite: 1]`
    },
    {
        id: 19,
        subject: "logica",
        subjectName: "Raciocínio Lógico",
        topic: "Conjuntos",
        difficulty: "medium",
        banca: "CESPE",
        year: 2015,
        statement: `No triênio 2011-2013, 240 grupos internacionais de pesquisa patentearam seus produtos em pelo menos um dos seguintes países: Brasil, Estados Unidos da América (EUA) e França. Desses grupos, 50 patentearam produtos somente no Brasil e na França; 27 patentearam seus produtos nos três países; 36 patentearam seus produtos somente no Brasil; 40 patentearam seus produtos somente nos EUA e na França; 60 patentearam somente nos EUA e no Brasil; e 130 patentearam seus produtos na França. Com base nessa situação hipotética, julgue os itens a seguir: Menos de 60 grupos patentearam seus produtos na França e nos EUA.[cite: 1]`,
        alternatives: [
            { letter: "C", text: "Certo" },
            { letter: "E", text: "Errado" }
        ],
        correct: "E",
        explanation: `Sabemos ainda que 130 patentearam seus produtos na França. Excluindo os 50, 27 e 40 que já colocamos no conjunto da França, temos $130-50-27-40 = 13$ que patentearam somente na França. [...] Os grupos que patentearam seus produtos nos EUA e na França são $27+40 = 67$. Item ERRADO.[cite: 1]`
    },
    {
        id: 20,
        subject: "logica",
        subjectName: "Raciocínio Lógico",
        topic: "Regra de Três Composta",
        difficulty: "medium",
        banca: "FCC",
        year: 2016,
        statement: `Uma indústria produz um tipo de máquina que demanda a ação de grupos de funcionários no preparo para o despacho ao cliente. Um grupo de 20 funcionários prepara o despacho de 150 máquinas em 45 dias. Para preparar o despacho de 275 máquinas, essa indústria designou 30 funcionários. O número de dias gastos por esses 30 funcionários para preparem essas 275 máquinas é igual a[cite: 1]`,
        alternatives: [
            { letter: "A", text: "55" },
            { letter: "B", text: "36." },
            { letter: "C", text: "60." },
            { letter: "D", text: "72." },
            { letter: "E", text: "48." }
        ],
        correct: "A",
        explanation: `Note que quanto MAIS dias tivermos para fazer o trabalho, MENOS funcionários são necessários, e MAIS máquinas podem ser despachadas. Portanto, devemos inverter a coluna dos funcionários, que é inversamente proporcional.
Montando a proporção:
$45/D=(30/20)\\times(150/275)$
$45/D=(3/2)\\times(6/11)$
$45/D=18/22$
$5/D=1/11$
$D=55$ dias[cite: 1]`
    },
    {
        id: 21,
        subject: "logica",
        subjectName: "Raciocínio Lógico",
        topic: "Lógica Proposicional",
        difficulty: "easy",
        banca: "CESPE",
        year: 2015,
        statement: `Considerando a proposição P: "Se João se esforçar o bastante, então João conseguirá o que desejar", julgue os itens a seguir. () A proposição "João não se esforça o bastante ou João conseguirá o que desejar" é logicamente equivalente à proposição P.[cite: 1]`,
        alternatives: [
            { letter: "C", text: "Certo" },
            { letter: "E", text: "Errado" }
        ],
        correct: "C",
        explanation: `Veja que P é uma condicional $p \\rightarrow q$, onde $p =$ João se esforçar, e $q =$ João conseguirá. Sabemos que isto é equivalente a $\\sim p \\lor q$, onde $\\sim p =$ João NÃO se esforçar. Escrevendo $\\sim p \\lor q$, temos: "João não se esforça o bastante OU João conseguirá o que desejar". Item CORRETO.[cite: 1]`
    },
    {
        id: 22,
        subject: "logica",
        subjectName: "Raciocínio Lógico",
        topic: "Lógica de Argumentação",
        difficulty: "medium",
        banca: "FCC",
        year: 2015,
        statement: `Dadas apenas as proposições "nenhum contador é médico" e "algum médico é biólogo", do ponto de vista da lógica é válido concluir que:[cite: 1]`,
        alternatives: [
            { letter: "A", text: "algum biólogo não é contador" },
            { letter: "B", text: "algum biólogo é contador." },
            { letter: "C", text: "todo biólogo é médico." },
            { letter: "D", text: "algum biólogo é contador e não é médico." },
            { letter: "E", text: "existe biólogo que não é médico." }
        ],
        correct: "A",
        explanation: `Com as duas frases dadas, vemos que existe médico que é biólogo. Esses médicos que são biólogos certamente não são contadores (pois nenhum contador é médico). Assim, vemos que existem biólogos que não são contadores (aqueles biólogos que são médicos certamente não são contadores).[cite: 1]`
    },
    {
        id: 23,
        subject: "logica",
        subjectName: "Raciocínio Lógico",
        topic: "Porcentagem e Frações",
        difficulty: "medium",
        banca: "FCC",
        year: 2016,
        statement: `Uma empresa investiu 3,42 bilhões de reais na construção de uma rodovia. Perto do final da construção a empresa solicitou uma verba adicional de 7% do valor investido para terminar a obra. Sabe-se que três oitavos desse valor adicional estavam destinados ao pagamento de fornecedores e equivalem, em reais, a[cite: 1]`,
        alternatives: [
            { letter: "A", text: "89.775,00." },
            { letter: "B", text: "897.750.000,00." },
            { letter: "C", text: "8.977.500,00." },
            { letter: "D", text: "897.750,00." },
            { letter: "E", text: "89.775.000,00" }
        ],
        correct: "E",
        explanation: `A verba adicional é de 7% de 3,42 bilhões de reais [...] Três oitavos desta verba adicional correspondem a: $3/8$ da verba adicional $= 7\\% \\times 3,42 \\times 3/8 = 0,089775$ bilhões = 89,775 milhões = 89.775.000 reais.[cite: 1]`
    },
    {
        id: 24,
        subject: "logica",
        subjectName: "Raciocínio Lógico",
        topic: "Verdades e Mentiras",
        difficulty: "hard",
        banca: "FCC",
        year: 2014,
        statement: `Alan, Beto, Caio e Décio são irmãos e foram interrogados pela própria mãe para saber quem comeu, sem autorização, o chocolate que estava no armário. Sabe-se que apenas um dos quatro comeu o chocolate, e que os quatro irmãos sabem quem foi. A mãe perguntou para cada um quem cometeu o ato, ao que recebeu as seguintes respostas: Alan diz que foi Beto; Beto diz que foi Caio; Caio diz que Beto mente; Décio diz que não foi ele. O irmão que fala a verdade e o irmão que comeu o chocolate são, respectivamente,[cite: 1]`,
        alternatives: [
            { letter: "A", text: "Beto e Décio." },
            { letter: "B", text: "Alan e Beto." },
            { letter: "C", text: "Beto e Caio." },
            { letter: "D", text: "Alan e Caio." },
            { letter: "E", text: "Caio e Décio" }
        ],
        correct: "E",
        explanation: `Assumindo que apenas um deles fala a verdade, e os demais mentem. Se assumirmos que Caio disse a verdade. Neste caso as frases verdadeiras seriam: Não foi Beto, Não foi Caio, Beto mente (Beto fala a verdade é falso, então Beto mente é real), Foi Décio. Veja que aqui não temos contradição. O culpado é apenas Décio, e quem disse a verdade foi Caio.[cite: 1]`
    },
    {
        id: 25,
        subject: "logica",
        subjectName: "Raciocínio Lógico",
        topic: "Associações Lógicas",
        difficulty: "medium",
        banca: "FCC",
        year: 2015,
        statement: `Luiz, Arnaldo, Mariana e Paulo viajaram em janeiro, todos para diferentes cidades, que foram Fortaleza, Goiânia, Curitiba e Salvador. Com relação às cidades para onde eles viajaram, sabe-se que: Luiz e Arnaldo não viajaram para Salvador; Mariana viajou para Curitiba; Paulo não viajou para Goiânia; Luiz não viajou para Fortaleza. É correto concluir que, em janeiro,[cite: 1]`,
        alternatives: [
            { letter: "A", text: "Paulo viajou para Fortaleza." },
            { letter: "B", text: "Luiz viajou para Goiânia" },
            { letter: "C", text: "Arnaldo viajou para Goiânia." },
            { letter: "D", text: "Mariana viajou para Salvador." },
            { letter: "E", text: "Luiz viajou para Curitiba." }
        ],
        correct: "B",
        explanation: `Mariana viajou para Curitiba. Luiz e Arnaldo não viajaram para Salvador, então Paulo viajou para Salvador. Sobram Fortaleza e Goiânia para Luiz e Arnaldo. Como Luiz não viajou para Fortaleza, Luiz foi para Goiânia. Com isso, sobra apenas Fortaleza para Arnaldo. Portanto, Luiz viajou para Goiânia está CORRETO.[cite: 1]`
    },
    {
        id: 26,
        subject: "logica",
        subjectName: "Raciocínio Lógico",
        topic: "Princípio da Casa dos Pombos",
        difficulty: "medium",
        banca: "FGV",
        year: 2016,
        statement: `Dos 40 funcionários de uma empresa, o mais novo tem 25 anos e o mais velho tem 37 anos. Considerando a idade de cada funcionário como um número inteiro de anos, conclui-se que:[cite: 1]`,
        alternatives: [
            { letter: "A", text: "A média das idades de todos os funcionários é 31 anos" },
            { letter: "B", text: "A idade de pelo menos um dos funcionários é 31 anos" },
            { letter: "C", text: "Nenhum funcionário tem idade igual a 31 anos" },
            { letter: "D", text: "No máximo 25 funcionários têm a mesma idade" },
            { letter: "E", text: "No mínimo 4 funcionários têm a mesma idade." }
        ],
        correct: "E",
        explanation: `De 25 a 37 anos de idade nós temos um total de 13 idades possíveis (em valores inteiros). Fazendo a divisão de 40 por 13, que nos dá o resultado 3 e o resto 1. Isto significa que, mesmo se colocarmos 3 pessoas em cada uma das 13 idades, sobra ainda 1 pessoa, que necessariamente vai entrar em alguma das 13 idades já utilizadas, passando a ser a $4^{a}$ pessoa com aquela idade.[cite: 1]`
    },
    {
        id: 27,
        subject: "logica",
        subjectName: "Raciocínio Lógico",
        topic: "Orientação Espacial e Associações",
        difficulty: "hard",
        banca: "FGV",
        year: 2015,
        statement: `Pai, mãe e seu casal de filhos estão sentados em volta de uma mesa quadrada. Os homens chamam-se Roberto e Sérgio e as mulheres chamam-se Teresa e Fernanda. Sabe-se que: O pai tem Fernanda à sua frente e o filho à esquerda. A mãe está do lado direito de Sérgio. Considere as afirmações: I - A mãe chama-se Fernanda. II - Roberto está em frente de Teresa. III - O pai chama-se Sérgio. É verdadeiro somente o que se afirma em:[cite: 1]`,
        alternatives: [
            { letter: "A", text: "I;" },
            { letter: "B", text: "II;" },
            { letter: "C", text: "III;" },
            { letter: "D", text: "I e II;" },
            { letter: "E", text: "II e III" }
        ],
        correct: "E",
        explanation: `Posicionando o Pai, Fernanda (à frente) e o filho (à esquerda). A mãe não pode estar à direita do filho, pois quem está à direita dele é o pai. Mas a mãe pode estar à direita do pai. Assim, descobrimos que o pai se chama Sérgio. O nome Roberto é do filho. Fernanda é a filha, e Teresa é o nome da mãe. Afirmações: I (FALSO), II (VERDADEIRO), III (VERDADEIRO). Portanto, II e III.[cite: 1]`
    },
    {
        id: 28,
        subject: "logica",
        subjectName: "Raciocínio Lógico",
        topic: "Calendários",
        difficulty: "medium",
        banca: "FCC",
        year: 2015,
        statement: `O mês de fevereiro tem 28 dias em anos regulares e 29 dias em anos bissextos. [...] Se 1° de janeiro de um ano bissexto caiu em uma sexta-feira, o dia 1° de março do ano seguinte cairá em uma[cite: 1]`,
        alternatives: [
            { letter: "A", text: "quarta-feira" },
            { letter: "B", text: "segunda-feira." },
            { letter: "C", text: "sexta-feira." },
            { letter: "D", text: "terça-feira." },
            { letter: "E", text: "quinta-feira." }
        ],
        correct: "A",
        explanation: `Um ano bissexto é composto por 366 dias. Somando ainda os 31 dias de janeiro do ano seguinte, os 28 dias de fevereiro do ano seguinte e mais o dia $1^{\\circ}$ de março, ficamos com um total de: $366+31+28+1 = 426$ dias. Dividindo 426 por 7, obtemos 60 e resto 6. Temos 60 semanas completas (terminando na quinta-feira) e mais seis dias: sexta, sábado, domingo, segunda, terça, QUARTA. Portanto, quarta-feira.[cite: 1]`
    },
    {
        id: 29,
        subject: "logica",
        subjectName: "Raciocínio Lógico",
        topic: "Sequências Lógicas",
        difficulty: "medium",
        banca: "FCC",
        year: 2014,
        statement: `A sequência: 2; 3; 5; 6; 11; 12; 23; 24;... foi criada com um padrão. A diferença entre os $14^{\\circ}$ e $11^{\\circ}$ termos é igual a[cite: 1]`,
        alternatives: [
            { letter: "A", text: "48." },
            { letter: "B", text: "97" },
            { letter: "C", text: "65." },
            { letter: "D", text: "25." },
            { letter: "E", text: "19" }
        ],
        correct: "B",
        explanation: `Temos duas sequências intercaladas. A lógica de formação é a mesma: primeiro somamos 3 unidades, depois 6, depois 12... seguindo esta lógica, devemos somar 24, 48, 96 e assim por diante. Escrevendo os próximos termos, temos: 2; 3; 5; 6; 11; 12; 23; 24; 47; 48; 95; 96; 191; 192. Assim, o $14^{\\circ}$ termo é 192, e o $11^{\\circ}$ é 95. A diferença entre eles é $192-95=97$.[cite: 1]`
    },
    {
        id: 30,
        subject: "logica",
        subjectName: "Raciocínio Lógico",
        topic: "Probabilidade",
        difficulty: "medium",
        banca: "FGV",
        year: 2015,
        statement: `Um tabuleiro de damas tem 32 quadradinhos pretos e 32 quadradinhos brancos. Um desses 64 quadradinhos é sorteado ao acaso. A probabilidade de que o quadradinho sorteado seja um quadradinho preto da borda do tabuleiro é:[cite: 1]`,
        alternatives: [
            { letter: "A", text: "1/2" },
            { letter: "B", text: "1/4" },
            { letter: "C", text: "1/8" },
            { letter: "D", text: "9/16" },
            { letter: "E", text: "7/32." }
        ],
        correct: "E",
        explanation: `Contando os quadradinhos pretos nas quatro bordas do tabuleiro, vemos que, ao todo, são 14. O total de quadradinhos é 64. Probabilidade $=$ casos favoráveis / total de casos $= 14/64 = 7/32$.[cite: 1]`
    }
]
