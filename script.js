/* ============================================================
   IBGE ESTUDOS — SCRIPT V3.3 (PARTE 1/2)
   Correção Definitiva de Eventos dos Botões do Dashboard
============================================================ */

const STORAGE_KEY = "ibge_estudos_v2";
const QUESTIONS_PER_PAGE = 10; 

const BASE_VIDEOS = [
    {
        id: 999999, subject: "portugues", subjectName: "Língua Portuguesa",
        title: "SINÔNIMO E ANTÔNIMO ",
        embedUrl: "https://www.youtube.com/embed/jXgaKQZDb_M?si=qP9cF5DgP2Wn4o1m", 
        description: "Nesta aula, estudamos o sentido das palavras no contexto de provas de concursos, focando no reconhecimento de sinônimos, antônimos e na substituição vocabular sem alteração de sentido ou prejuízo à correção gramatical.",
        date: "29/08/2026"
    }
];

const BASE_QUESTIONS = [
    {
        id: 1, subject: "portugues", subjectName: "Língua Portuguesa", topic: "Interpretação de Texto", difficulty: "medium", banca: "INSTITUTO AVALIA", year: 2026,
        statement: "A interpretação de um texto exige que o leitor considere não apenas informações explícitas, mas também relações estabelecidas entre as ideias apresentadas. Nesse sentido, é correto afirmar que:",
        alternatives: [
            { letter: "A", text: "A interpretação deve considerar exclusivamente as informações literais do texto." },
            { letter: "B", text: "A compreensão textual pode envolver informações implícitas e relações entre diferentes partes do texto." },
            { letter: "C", text: "A interpretação depende exclusivamente da opinião pessoal do leitor." },
            { letter: "D", text: "Textos objetivos não apresentam informações implícitas." },
            { letter: "E", text: "O contexto não interfere na construção do sentido de um texto." }
        ],
        correct: "B", explanation: "A interpretação textual não se limita ao que está explicitamente escrito. O leitor também precisa perceber relações, pressupostos, inferências e informações implícitas."
    },
    {
        id: 2, subject: "portugues", subjectName: "Língua Portuguesa", topic: "Coesão e Coerência", difficulty: "medium", banca: "INSTITUTO AVALIA", year: 2026,
        statement: "Sobre os mecanismos responsáveis pela construção da coesão textual, assinale a alternativa correta.",
        alternatives: [
            { letter: "A", text: "A coesão está relacionada exclusivamente à organização dos parágrafos." },
            { letter: "B", text: "A coesão envolve mecanismos linguísticos que estabelecem relações entre as partes do texto." },
            { letter: "C", text: "A coerência e a coesão são exatamente o mesmo fenômeno." },
            { letter: "D", text: "Um texto coerente necessariamente precisa possuir períodos curtos." },
            { letter: "E", text: "A repetição de palavras sempre elimina a coesão textual." }
        ],
        correct: "B", explanation: "A coesão é construída por mecanismos linguísticos como pronomes, conjunções, conectivos, substituições e relações lexicais."
    },
    {
        id: 3, subject: "portugues", subjectName: "Língua Portuguesa", topic: "Concordância", difficulty: "hard", banca: "INSTITUTO AVALIA", year: 2026,
        statement: "Assinale a alternativa em que a concordância verbal está de acordo com a norma-padrão da língua portuguesa.",
        alternatives: [
            { letter: "A", text: "Houveram diversas mudanças no projeto." },
            { letter: "B", text: "Fazem dois anos que o programa foi criado." },
            { letter: "C", text: "Existem diversas possibilidades de atuação profissional." },
            { letter: "D", text: "Haviam muitos candidatos inscritos." },
            { letter: "E", text: "Deve existirem novas oportunidades." }
        ],
        correct: "C", explanation: "O verbo 'existir' é pessoal e deve concordar com o sujeito. 'Existem diversas possibilidades' está correto."
    },
    {
        id: 4, subject: "logica", subjectName: "Raciocínio Lógico", topic: "Proposições", difficulty: "medium", banca: "INSTITUTO AVALIA", year: 2026,
        statement: "Considere a proposição: 'Todo assistente social é profissional de nível superior.' Sobre essa afirmação, assinale a alternativa correta.",
        alternatives: [
            { letter: "A", text: "É uma proposição porque pode ser classificada como verdadeira ou falsa." },
            { letter: "B", text: "Não é uma proposição porque contém uma profissão." },
            { letter: "C", text: "Não pode possuir valor lógico." },
            { letter: "D", text: "É necessariamente uma proposição falsa." },
            { letter: "E", text: "Toda proposição precisa ser uma pergunta." }
        ],
        correct: "A", explanation: "Uma proposição é uma frase declarativa que pode receber um valor lógico: verdadeiro ou falso."
    },
    {
        id: 5, subject: "logica", subjectName: "Raciocínio Lógico", topic: "Porcentagem", difficulty: "easy", banca: "INSTITUTO AVALIA", year: 2026,
        statement: "Um candidato respondeu corretamente 36 questões de uma prova composta por 60 questões. Qual foi seu percentual de acertos?",
        alternatives: [
            { letter: "A", text: "50%" }, { letter: "B", text: "55%" }, { letter: "C", text: "60%" }, { letter: "D", text: "65%" }, { letter: "E", text: "70%" }
        ],
        correct: "C", explanation: "36 ÷ 60 = 0,60. Multiplicando por 100: 60% de aproveitamento."
    },
    {
        id: 6, subject: "logica", subjectName: "Raciocínio Lógico", topic: "Sequências", difficulty: "medium", banca: "INSTITUTO AVALIA", year: 2026,
        statement: "Observe a sequência: 2, 4, 8, 16, 32, ... Mantendo o mesmo padrão, qual será o próximo número?",
        alternatives: [
            { letter: "A", text: "48" }, { letter: "B", text: "54" }, { letter: "C", text: "60" }, { letter: "D", text: "64" }, { letter: "E", text: "72" }
        ],
        correct: "D", explanation: "Cada termo é obtido multiplicando o anterior por 2. 32 × 2 = 64."
    },
    {
        id: 7, subject: "especificos", subjectName: "Conhecimentos Específicos", topic: "Lei nº 8.662/1993", difficulty: "hard", banca: "INSTITUTO AVALIA", year: 2026,
        statement: "Considerando a regulamentação da profissão de Assistente Social no Brasil, assinale a alternativa correta acerca das atribuições privativas.",
        alternatives: [
            { letter: "A", text: "Exercidas por qualquer profissional de nível superior." },
            { letter: "B", text: "Atividades cuja execução é reservada ao Assistente Social." },
            { letter: "C", text: "Exclusivamente atividades administrativas." },
            { letter: "D", text: "Não possuem relação com a regulamentação." },
            { letter: "E", text: "Correspondem apenas a atividades voluntárias." }
        ],
        correct: "B", explanation: "A Lei nº 8.662/1993 regulamenta a profissão e estabelece competências e atribuições privativas."
    },
    {
        id: 8, subject: "especificos", subjectName: "Conhecimentos Específicos", topic: "Código de Ética", difficulty: "hard", banca: "INSTITUTO AVALIA", year: 2026,
        statement: "No exercício profissional do Serviço Social, a dimensão ética está relacionada:",
        alternatives: [
            { letter: "A", text: "Apenas ao cumprimento de ordens administrativas." },
            { letter: "B", text: "À atuação profissional orientada por princípios e valores estabelecidos no projeto ético-político." },
            { letter: "C", text: "Exclusivamente à relação entre profissional e empregador." },
            { letter: "D", text: "Somente ao cumprimento de normas internas." },
            { letter: "E", text: "À ausência de posicionamento profissional." }
        ],
        correct: "B", explanation: "A dimensão ética está articulada aos princípios e valores do projeto ético-político profissional."
    },
    {
        id: 9, subject: "especificos", subjectName: "Conhecimentos Específicos", topic: "Políticas Sociais", difficulty: "medium", banca: "INSTITUTO AVALIA", year: 2026,
        statement: "A Constituição Federal de 1988 representou importante marco para as políticas sociais brasileiras porque:",
        alternatives: [
            { letter: "A", text: "Eliminou completamente as desigualdades sociais." },
            { letter: "B", text: "Ampliou o reconhecimento dos direitos sociais e estabeleceu bases da Seguridade Social." },
            { letter: "C", text: "Retirou do Estado a responsabilidade pela proteção." },
            { letter: "D", text: "Determinou que todas as políticas fossem privadas." },
            { letter: "E", text: "Extinguiu as políticas de saúde." }
        ],
        correct: "B", explanation: "A CF/88 ampliou direitos sociais e estruturou a Seguridade Social."
    },
    {
        id: 10, subject: "especificos", subjectName: "Conhecimentos Específicos", topic: "Seguridade Social", difficulty: "medium", banca: "INSTITUTO AVALIA", year: 2026,
        statement: "De acordo com a CF/1988, a Seguridade Social compreende um conjunto integrado de ações relativas à:",
        alternatives: [
            { letter: "A", text: "Educação, cultura e segurança." },
            { letter: "B", text: "Saúde, previdência e assistência social." },
            { letter: "C", text: "Habitação, education e transporte." },
            { letter: "D", text: "Segurança pública e educação." },
            { letter: "E", text: "Trabalho e habitação." }
        ],
        correct: "B", explanation: "Compreende Saúde, Previdência Social e Assistência Social."
    },
    {
        id: 11, subject: "especificos", subjectName: "Conhecimentos Específicos", topic: "SUAS", difficulty: "medium", banca: "INSTITUTO AVALIA", year: 2026,
        statement: "O Sistema Único de Assistência Social — SUAS organiza a política considerando:",
        alternatives: [
            { letter: "A", text: "Apenas ações privadas." }, { letter: "B", text: "A organização descentralizada e participativa." },
            { letter: "C", text: "Ações emergenciais." }, { letter: "D", text: "Benefícios previdenciários." }, { letter: "E", text: "Substituição da previdência." }
        ],
        correct: "B", explanation: "O SUAS organiza a assistência social de forma descentralizada e participativa."
    },
    {
        id: 12, subject: "especificos", subjectName: "Conhecimentos Específicos", topic: "Pesquisa Social", difficulty: "hard", banca: "INSTITUTO AVALIA", year: 2026,
        statement: "Sobre a pesquisa social no Serviço Social, assinale a alternativa correta.",
        alternatives: [
            { letter: "A", text: "Não possui relação profissional." }, { letter: "B", text: "Contribui para compreender a realidade e subsidiar a intervenção." },
            { letter: "C", text: "Usa apenas métodos quantitativos." }, { letter: "D", text: "Dispensa teoria." }, { letter: "E", text: "Evita análise crítica." }
        ],
        correct: "B", explanation: "A pesquisa subsidia o conhecimento e a intervenção profissional."
    },
    {
        id: 13, subject: "especificos", subjectName: "Conhecimentos Específicos", topic: "Questão Social", difficulty: "hard", banca: "INSTITUTO AVALIA", year: 2026,
        statement: "Na perspectiva crítica, a questão social está relacionada principalmente:",
        alternatives: [
            { letter: "A", text: "A problemas individuais." }, { letter: "B", text: "Às expressões das desigualdades do capitalismo." },
            { letter: "C", text: "A conflitos familiares." }, { letter: "D", text: "A situações sem economia." }, { letter: "E", text: "À pobreza individual." }
        ],
        correct: "B", explanation: "A questão social refere-se às contradições e desigualdades do sistema capitalista."
    },
    {
        id: 14, subject: "especificos", subjectName: "Conhecimentos Específicos", topic: "Direitos Sociais", difficulty: "medium", banca: "INSTITUTO AVALIA", year: 2026,
        statement: "A atuação profissional diante das expressões da questão social deve considerar:",
        alternatives: [
            { letter: "A", text: "Somente características individuais." }, { letter: "B", text: "As determinações sociais, econômicas, políticas e culturais." },
            { letter: "C", text: "Apenas aspectos financeiros." }, { letter: "D", text: "Normas administrativas." }, { letter: "E", text: "Exclusão dos usuários." }
        ],
        correct: "B", explanation: "Exige considerar a multiplicidade de determinações na vida dos sujeitos."
    },
    {
        id: 15, subject: "especificos", subjectName: "Conhecimentos Específicos", topic: "Instrumentalidade", difficulty: "hard", banca: "INSTITUTO AVALIA", year: 2026,
        statement: "Sobre a instrumentalidade do Serviço Social, assinale a alternativa correta.",
        alternatives: [
            { letter: "A", text: "Corresponde ao uso de formulários." }, { letter: "B", text: "Envolve mediações que articulam conhecimentos, valores e instrumentos." },
            { letter: "C", text: "Elimina teoria." }, { letter: "D", text: "Limitada ao atendimento individual." }, { letter: "E", text: "Não possui finalidade." }
        ],
        correct: "B", explanation: "A instrumentalidade articula teoria, competências, valores e meios de intervenção."
    }

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
]
];

function getCombinedQuestions() {
    try {
        const customData = localStorage.getItem("ibge_custom_questions");
        if (customData) {
            const parsed = JSON.parse(customData);
            if (Array.isArray(parsed)) return [...BASE_QUESTIONS, ...parsed];
        }
    } catch (e) { console.error(e); }
    return [...BASE_QUESTIONS];
}
const QUESTIONS = getCombinedQuestions();

function createDefaultState() {
    return { answered: {}, favorites: [], history: [], lastActivity: null, theme: "light" };
}

function loadState() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (!saved) return createDefaultState();
        const parsed = JSON.parse(saved);
        if (!parsed.theme) parsed.theme = "light"; 
        return { ...createDefaultState(), ...parsed };
    } catch (error) { return createDefaultState(); }
}

function saveState() { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }

let state = loadState();
let currentPage = "dashboard";
let currentQuestions = [];
let currentPageIndex = 1;

/* ============================================================
   IBGE ESTUDOS — SCRIPT V3.3 (PARTE 2/2)
============================================================ */

function toggleTheme() { state.theme = state.theme === "dark" ? "light" : "dark"; saveState(); applyTheme(); }
function applyTheme() {
    const btn = document.getElementById("themeToggle");
    if (state.theme === "dark") { document.documentElement.setAttribute("data-theme", "dark"); if (btn) btn.innerHTML = "☀️"; } 
    else { document.documentElement.removeAttribute("data-theme"); if (btn) btn.innerHTML = "🌙"; }
}

function escapeHTML(text) {
    if (text === undefined || text === null) return "";
    return String(text).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}

function getQuestionById(id) { return QUESTIONS.find(q => Number(q.id) === Number(id)); }
function getAnsweredQuestion(id) { return state.answered[String(id)] || null; }
function isFavorite(id) { return state.favorites.includes(Number(id)); }
function getQuestionStatus(id) { const i = getAnsweredQuestion(id); return !i ? "new" : i.correct ? "correct" : "wrong"; }

function updateDashboardStats() {
    const answers = Object.values(state.answered);
    const answered = answers.length;
    const correct = answers.filter(item => item.correct === true).length;
    const wrong = answers.filter(item => item.correct === false).length;
    const accuracy = answered > 0 ? Math.round((correct / answered) * 100) : 0;

    setText("totalAnswered", answered); setText("statsAnswered", answered);
    setText("totalCorrect", correct); setText("statsCorrect", correct);
    setText("totalWrong", wrong); setText("statsWrong", wrong);
    setText("accuracy", `${accuracy}%`); setText("statsAccuracy", `${accuracy}%`);
}
function setText(id, value) { const el = document.getElementById(id); if (el) el.textContent = value; }

/* ROTEADOR SPA & LIGAÇÃO DOS BOTÕES DO DASHBOARD */
function refreshCurrentView() {
    if (currentPage === "questoes") renderQuestionBank();
    else if (currentPage === "videos") renderVideosPage();
}

function navigateTo(page) {
    document.querySelectorAll(".page").forEach(sec => sec.classList.remove("active"));
    const target = document.getElementById(page);
    if (target) { target.classList.add("active"); currentPage = page; }

    document.querySelectorAll(".menu-item").forEach(btn => {
        btn.classList.remove("active");
        if (btn.dataset.page === page) btn.classList.add("active");
    });

    const titles = { dashboard: "Olá! 👋", questoes: "Banco de Questões", videos: "Videoaulas", erradas: "Questões Erradas", favoritas: "Minhas Favoritas", estatisticas: "Minhas Estatísticas" };
    setText("pageTitle", titles[page] || "IBGE Estudos");
    document.getElementById("sidebar")?.classList.remove("mobile-open");

    if (page === "questoes") renderQuestionBank();
    if (page === "videos") renderVideosPage();
    if (page === "estatisticas") updateDashboardStats();
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* MODAL DE VÍDEO */
window.openVideoModal = function(url) {
    const modal = document.getElementById('videoModalOverlay');
    const container = document.getElementById('modalVideoContainer');
    if(modal && container) {
        let cleanUrl = url.trim();
        const sep = cleanUrl.includes('?') ? '&' : '?';
        container.innerHTML = `<iframe src="${cleanUrl}${sep}autoplay=1" allowfullscreen allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>`;
        modal.classList.add('active');
    }
};

window.closeVideoModal = function() {
    const modal = document.getElementById('videoModalOverlay');
    const container = document.getElementById('modalVideoContainer');
    if(modal && container) {
        modal.classList.remove('active');
        setTimeout(() => { container.innerHTML = ''; }, 300); 
    }
};

function renderVideosPage() {
    const container = document.getElementById("videosContainer");
    if (!container) return;

    const customVideos = JSON.parse(localStorage.getItem("ibge_video_lessons")) || [];
    const allVideos = [...BASE_VIDEOS, ...customVideos];

    let filterBar = document.getElementById("videoFilterBar");
    if (!filterBar) {
        const videosSection = document.getElementById("videos");
        const header = videosSection.querySelector(".page-header");
        
        filterBar = document.createElement("div");
        filterBar.id = "videoFilterBar";
        filterBar.className = "filters-card";
        filterBar.style.marginTop = "15px";
        filterBar.innerHTML = `
            <div class="filter-group" style="grid-column: 1 / -1;">
                <label>Filtrar Aulas por Disciplina</label>
                <select id="filterVideoSubject" style="width:100%;">
                    <option value="all">Todas as Disciplinas</option>
                    <option value="portugues">Língua Portuguesa</option>
                    <option value="logica">Raciocínio Lógico</option>
                    <option value="especificos">Conhecimentos Específicos</option>
                </select>
            </div>
        `;
        header.after(filterBar);
        document.getElementById("filterVideoSubject").addEventListener("change", renderVideosPage);
    }

    const selectedSubject = document.getElementById("filterVideoSubject")?.value || "all";
    const filteredVideos = allVideos.filter(v => selectedSubject === "all" || v.subject === selectedSubject);

    if (filteredVideos.length === 0) {
        container.innerHTML = `<div class="empty-state" style="grid-column: 1 / -1;"><div class="empty-icon">📹</div><h3>Nenhuma videoaula encontrada</h3></div>`;
        return;
    }

    container.innerHTML = filteredVideos.map(v => `
        <article class="video-card" onclick="openVideoModal('${v.embedUrl}')">
            <div class="video-wrapper">
                <iframe src="${v.embedUrl}" tabindex="-1"></iframe>
                <div class="expand-icon-overlay">▶</div>
            </div>
            <div class="video-info">
                <span class="video-subject">${escapeHTML(v.subjectName)}</span>
                <h4 class="video-title">${escapeHTML(v.title)}</h4>
                <p class="video-desc">${escapeHTML(v.description)}</p>
                <div class="video-meta"><span>Adicionado em: ${v.date}</span></div>
            </div>
        </article>
    `).join("");
}

/* BANCO DE QUESTÕES COM PRÁTICA CONTÍNUA */
function getFilteredQuestions() {
    const subject = document.getElementById("filterSubject")?.value || "all";
    const status = document.getElementById("filterStatus")?.value || "all";
    const diff = document.getElementById("filterDifficulty")?.value || "all";

    return QUESTIONS.filter(q => {
        if (subject !== "all" && q.subject !== subject) return false;
        if (diff !== "all" && q.difficulty !== diff) return false;
        const qStatus = getQuestionStatus(q.id);
        if (status !== "all" && qStatus !== status) return false;
        if (status === "favorite" && !isFavorite(q.id)) return false;
        return true;
    });
}

function renderQuestionBank() {
    const container = document.getElementById("questionsContainer");
    if (!container) return;
    const questions = getFilteredQuestions();
    currentQuestions = questions;

    if (questions.length === 0) {
        container.innerHTML = `<div class="empty-state"><h3>Nenhuma questão encontrada</h3><button class="primary-button" id="clearFiltersBtn">Limpar filtros</button></div>`;
        document.getElementById("clearFiltersBtn")?.addEventListener("click", () => {
            document.getElementById("filterSubject").value = "all";
            document.getElementById("filterStatus").value = "all";
            document.getElementById("filterDifficulty").value = "all";
            currentPageIndex = 1; renderQuestionBank();
        });
        return;
    }

    const totalPages = Math.ceil(questions.length / QUESTIONS_PER_PAGE);
    if (currentPageIndex > totalPages) currentPageIndex = totalPages;
    if (currentPageIndex < 1) currentPageIndex = 1;

    const paginated = questions.slice((currentPageIndex - 1) * QUESTIONS_PER_PAGE, currentPageIndex * QUESTIONS_PER_PAGE);

    let html = `<div class="questions-toolbar"><strong>${questions.length}</strong><span>questões encontradas</span><button class="small-action-button" id="randomQuestionButton">🎲 Questão aleatória</button></div>`;
    html += `<div class="question-list">${paginated.map(q => renderQuestionCard(q)).join("")}</div>`;
    
    if (totalPages > 1) {
        html += `<div class="pagination-controls"><span>Página ${currentPageIndex} de ${totalPages}</span><div class="pagination-actions">
            <button class="secondary-question-button" id="prevPage" ${currentPageIndex === 1 ? 'disabled' : ''}>← Anterior</button>
            <button class="secondary-question-button" id="nextPage" ${currentPageIndex === totalPages ? 'disabled' : ''}>Próxima →</button>
        </div></div>`;
    }
    container.innerHTML = html;
    bindQuestionEvents();
}

function renderQuestionCard(q) {
    const ans = getAnsweredQuestion(q.id);
    const fav = isFavorite(q.id);

    return `
        <article class="question-card" data-question-id="${q.id}">
            <div class="question-card-header">
                <span class="question-number">Q${String(q.id).padStart(3, "0")}</span>
                <button class="favorite-button ${fav ? "active" : ""}" data-fav="${q.id}">${fav ? "★" : "☆"}</button>
            </div>
            ${ans ? `<div style="background: var(--surface-soft); padding: 10px 15px; border-bottom: 1px solid var(--border); font-size: 12px; color: var(--text-light);">ℹ️ Você já respondeu esta questão anteriormente. Pode tentar novamente abaixo:</div>` : ""}
            <div class="question-statement">${escapeHTML(q.statement)}</div>
            <div class="alternatives">
                ${q.alternatives.map(a => {
                    return `<div class="alternative" data-alt="${a.letter}" data-qid="${q.id}">
                        <div class="alternative-main"><span class="alternative-letter">${a.letter}</span>${escapeHTML(a.text)}</div>
                        <button type="button" class="scissors-button" data-sci="${q.id}" data-alt="${a.letter}" title="Eliminar alternativa">✂</button>
                    </div>`;
                }).join("")}
            </div>
            <div class="question-actions">
                <button class="answer-button" data-ans="${q.id}">Responder Novamente</button>
            </div>
            <div class="explanation-box" id="exp-${q.id}">
                <div class="explanation-body">${escapeHTML(q.explanation)}</div>
            </div>
        </article>
    `;
}

function bindQuestionEvents() {
    document.getElementById("prevPage")?.addEventListener("click", () => { currentPageIndex--; renderQuestionBank(); window.scrollTo(0,0); });
    document.getElementById("nextPage")?.addEventListener("click", () => { currentPageIndex++; renderQuestionBank(); window.scrollTo(0,0); });
    document.getElementById("randomQuestionButton")?.addEventListener("click", () => {
        if (!currentQuestions.length) return;
        const rIdx = Math.floor(Math.random() * currentQuestions.length);
        currentPageIndex = Math.floor(rIdx / QUESTIONS_PER_PAGE) + 1;
        renderQuestionBank();
    });

    document.querySelectorAll(".alternative").forEach(el => {
        el.addEventListener("click", function(e) {
            if (e.target.closest(".scissors-button")) return;
            const qid = this.dataset.qid; 
            if (this.classList.contains("eliminated")) return;
            document.querySelectorAll(`.alternative[data-qid="${qid}"]`).forEach(i => i.classList.remove("selected"));
            this.classList.add("selected");
        });
    });

    document.querySelectorAll("[data-sci]").forEach(btn => {
        btn.addEventListener("click", e => {
            e.stopPropagation();
            const qid = btn.dataset.sci; const alt = btn.dataset.alt;
            const altDiv = document.querySelector(`.alternative[data-qid="${qid}"][data-alt="${alt}"]`);
            altDiv.classList.remove("selected"); altDiv.classList.toggle("eliminated");
            btn.innerHTML = altDiv.classList.contains("eliminated") ? "↩" : "✂";
        });
    });

    document.querySelectorAll("[data-ans]").forEach(btn => {
        btn.addEventListener("click", () => {
            const qid = btn.dataset.ans; 
            const sel = document.querySelector(`.alternative.selected[data-qid="${qid}"]`);
            if (!sel) return showToast("Selecione uma alternativa.", "warning");
            
            const q = getQuestionById(qid); 
            const selected = sel.dataset.alt; 
            const correct = selected === q.correct;

            state.answered[String(qid)] = { selected, correct, eliminated: [], answeredAt: new Date().toISOString(), showExplanation: true };
            saveState(); 
            updateDashboardStats();

            const card = document.querySelector(`[data-question-id="${qid}"]`);
            if(card) {
                const expBox = card.querySelector(`#exp-${qid}`);
                if(expBox) expBox.classList.add("visible");
                
                card.querySelectorAll(".alternative").forEach(altEl => {
                    const ltr = altEl.dataset.alt;
                    if(ltr === q.correct) altEl.style.background = "var(--green-light)";
                    if(ltr === selected && !correct) altEl.style.background = "var(--red-light)";
                });
            }

            showToast(correct ? "✓ Parabéns, você acertou!" : `✕ Resposta incorreta. O gabarito é ${q.correct}.`, correct ? "success" : "error");
        });
    });

    document.querySelectorAll("[data-fav]").forEach(btn => {
        btn.addEventListener("click", () => {
            const qid = Number(btn.dataset.fav); const idx = state.favorites.indexOf(qid);
            if (idx === -1) { state.favorites.push(qid); showToast("⭐ Favoritada", "success"); }
            else { state.favorites.splice(idx, 1); showToast("Desfavoritada", "info"); }
            saveState(); renderQuestionBank();
        });
    });
}

function showToast(msg, type = "info") {
    let container = document.getElementById("toastContainer");
    if (!container) { container = document.createElement("div"); container.id = "toastContainer"; document.body.appendChild(container); }
    const toast = document.createElement("div"); toast.className = `toast toast-${type}`; toast.textContent = msg; container.appendChild(toast);
    requestAnimationFrame(() => toast.classList.add("show"));
    setTimeout(() => { toast.classList.remove("show"); setTimeout(() => toast.remove(), 300); }, 2800);
}

function initializeApp() {
    document.getElementById("themeToggle")?.addEventListener("click", toggleTheme); applyTheme();
    
    // Liga os itens do menu lateral (Sidebar)
    document.querySelectorAll(".menu-item").forEach(b => {
        b.addEventListener("click", () => {
            const page = b.dataset.page;
            if (page) navigateTo(page);
        });
    });

    // CORREÇÃO: Liga os botões de atalho do Dashboard (ex: "Estudar Português", "Ver todas")
    document.querySelectorAll("[data-page-button]").forEach(b => {
        b.addEventListener("click", () => {
            const page = b.dataset.pageButton;
            if (page) navigateTo(page);
        });
    });

    document.getElementById("mobileMenu")?.addEventListener("click", () => document.getElementById("sidebar")?.classList.toggle("mobile-open"));
    
    ["filterSubject", "filterStatus", "filterDifficulty"].forEach(id => { 
        document.getElementById(id)?.addEventListener("change", () => { currentPageIndex = 1; renderQuestionBank(); }); 
    });

    document.getElementById("startQuestions")?.addEventListener("click", () => navigateTo("questoes"));
    
    const overlay = document.getElementById("videoModalOverlay");
    if(overlay) {
        overlay.addEventListener("click", (e) => { if(e.target === overlay) closeVideoModal(); });
        document.getElementById("closeVideoModalBtn")?.addEventListener("click", closeVideoModal);
        document.addEventListener("keydown", (e) => { if(e.key === "Escape") closeVideoModal(); });
    }

    updateDashboardStats();
    if (currentPage === "videos") renderVideosPage();
}

document.addEventListener("DOMContentLoaded", initializeApp);
