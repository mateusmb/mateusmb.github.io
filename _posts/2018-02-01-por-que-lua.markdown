---
layout: post
title:  "Um guia (não tão, mas quase) rápido de Lua"
date:   2018-02-04 21:15:00
categories: guias
---

<a href="https://www.lua.org/images/lua25.gif"><img src="https://www.lua.org/images/lua25.gif" title="lua"/></a>

[Lua](https://www.lua.org/) é uma linguagem de programação, desenvolvida aqui nesse país tropical, por uma equipe de desenvolvedores da PUC-RJ.

Ela (a linguagem, não o satélite natural) foi criada em 1993 para auxiliar engenheiros da Petrobrás e acabou correndo pelo
mundo nos anos seguintes e, até hoje, é a linguagem mais utilizada para scriptagem no mundo dos games.

As grandes vantagens de Lua são a sua sintaxe simples e poderosa, rapidez, tamanho enxuto e flexibilidade.

Mas o "brilho da Lua" vem de sua rápida prototipagem (você vai ver que eu vou fazer vários exemplos de código sem precisar de muito setup)
e, principalmente, da possibilidade de embutir a linguagem em projetos feitos em qualquer outra linguagem.

Você pode ter um programa feito em C ou até mesmo Python, por exemplo, que fazem os trabalhos mais sujos, por assim dizer, e estender as funcionalidades do programa em Lua, para adicionar mais features e garantir mais flexibilidade.

Esse guia é destinado para iniciantes em programação. Pessoas que já tiveram algum contato com qualquer linguagem vão usufruir bastante deste tutorial.

Caso seja completamente iniciante, tenha em mente que muitas coisas serão um pouco nebulosas. A dica é continuar buscando materiais na internet e praticar tudo que lê.

# Instalação

## Windows
Caso você esteja no Windows (masoquista você hein...) instale o Lua for Windows que já vem com tudo junto, inclusive um editor prontinho para você começar a rodar seus códigos.

A instalação é bem simples e intuitiva e, após realizada, é só você abrir o editor, escrever seu código e rodá-lo. Só atente que a versão do Lua nessa instalação é mais desatualizada que as versões do Linux.

## Linux
Na maioria das distribuições Linux (onde sua vida é mais fácil) você pode encontrar Lua diretamente no seu terminal. Apenas digite lua no terminal e comece a brincar.
Caso você não tenha Lua instalado, digite os comandos a seguir, de acordo com a sua distribuição.

* No Ubuntu, Debian, Mint e família:

`sudo apt install lua`

* No Arch Linux, Antergos, Manjaro e família:

`sudo pacman -S lua`

Caso Lua não esteja disponível no seu gerenciador de pacotes, compile a linguagem seguindo o guia abaixo.

* Instale as dependências

  * Ubuntu, Debian, Mint e família:

  `sudo apt install build-essential libreadline5-dev curl`

  * Arch Linux, Antergos, Manjaro e família:

  `sudo pacman -S readline curl`

Os comandos abaixo servem para todas as distribuições Linux.

* Baixe a linguagem compactada

`cd && curl -R -O http://www.lua.org/ftp/lua-5.3.4.tar.gz`

* Extraia o conteúdo da pasta

`tar zxf lua-5.3.4.tar.gz`

* Entre no diretório extraído

`cd lua-5.3.4`

* Compile (é bem rápido)

`make linux test`

* O executável do Lua ficará na pasta src. Para ter o executável em qualquer local do seu sistema de arquivos, execute:

`sudo make install`

## Mac OS
Você pode instalar Lua no seu computador chique através do homebrew. Após instalar e configurar o homebrew, execute:

`brew install lua`

Ou você pode fazer os mesmos passos da compilação do Linux, excluindo a parte de instalar as dependências e compilando com:

`make macosx test`

E depois:

`sudo make install`

<a href="https://imgflip.com/i/26c8iz"><img src="https://i.imgflip.com/26c8iz.jpg" title="vamo logo"/></a>

# Mãos à obra!

Para não nos estendermos num manual (muito) chato, vamos implementar algo bem legal e que vai nos ajudar a ter uma visão geral da linguagem:
uma lista de nossas bandas favoritas!

<a href="https://imgflip.com/i/26c99s"><img src="https://i.imgflip.com/26c99s.jpg" title="made at imgflip.com"/></a>

Nosso programa deve permitir adicionarmos e removermos nossas bandas favoritas em uma lista. Cada banda é composta pelo seu nome e pela música que mais gostamos da banda.

Também devemos permitir listar nossas bandas adicionadas e, para incluirmos um "desafiozinho" a mais, vamos também listar nossas bandas pelo nome em ordem alfabética e
pelos nomes das nossas músicas favoritas de cada banda em ordem alfabética.

Comece abrindo o terminal no Linux ou no Mac OS. Digite Lua no terminal e aperte enter. Você deve ver o seguinte no seu terminal:

`Lua 5.3.4  Copyright (C) 1994-2017 Lua.org, PUC-Rio`

`>`

Você pode ver uma versão diferente, dependendo da distribuição que você usa. Caso veja uma mensagem de erro, revise os passos da instalação.

No Windows, você pode usar o interpretador que já vem na instalação. Ele também abre um terminal parecido com o do Linux/Mac OS.

Se você já está acostumado com Python, Ruby, Perl ou outra linguagem interpretada, com certeza já sabe que pode executar comandos no interpretador e testar coisas.

Isso é importante para prototiparmos ideias de forma mais rápida. O lado ruim é que após terminarmos a execução do interpretador, perdemos nosso trabalho.

De qualquer forma, vamos testar algumas ideias e pegar o __feeling__ da linguagem. Digite os comandos abaixo e, ao fim, aperte enter para ver o resultado.

Se você receber erros, revise o comando e cheque se não cometeu algum erro de digitação.

<a href="https://imgflip.com/i/26c9ef"><img src="https://i.imgflip.com/26c9ef.jpg" title="made at imgflip.com"/></a>

Vamos começar *declarando* uma lista com algumas de nossas bandas. Você pode colocar as suas bandas favoritas, não precisa colocar as mesmas que as minhas.

`> bandas = {'Avenged Sevenfold', 'Gorillaz', 'Arctic Monkeys'}`

Ps.: O caracter ">" não precisa ser digitado. Isso é só para lembrar que você deve digitar o comando no interpretador Lua.

Depois que você apertou enter, pode ocorrer alguma confusão pois não aparece nada. Apenas pula a linha e mostra novamente o caracter ">".

Não se preocupe com isso. Você fez certo. O que aconteceu é que você declarou uma variável chamado "bandas" contendo os valores 'Avenged Sevenfold', 'Gorillaz' e
'Arctic Monkeys'. Caso já tenha sido esperto, você digitou as suas bandas favoritas dentro de cada aspas simples ''.

Falando de uma forma mais esmiuçada, o que acabou de acontecer foi que você pediu para o computador pegar um endereço da sua memória RAM e guardá-lo especialmente para você. Esse endereço de memória tem um rótulo (variável) chamado "bandas", para ser mais fácil usá-lo depois. Além disso, o endereço de memória reservado está com os valores que digitamos entre aspas simples *''*, dentro das chaves *{}*.

É claro que se finalizarmos a execução do interpretador ou desligarmos o computador, esse endereço de memória reservado será reutilizado para outra coisa que o computador achar necessário ou mesmo ficará disponível para ser utilizado. Dos 2,4,8,16 ou mais Gigabytes de memória do seu computador, alguns bytes foram
utilizados para guardar esses valores que digitamos. Não se preocupe, não estamos mais nos anos 80 ou 90 e não precisamos mais nos preocupar tanto em acabar a memória disponível.

Para esses endereços de memória serem utilizados de forma mais eficiente, as linguagens de programação definem tipos específicos para cada variável que criamos.

Não precisamos dizer de quais tipos serão nossas variáveis. A linguagem Lua já deduz o tipo pelo valor que atribuímos na variável.

Podemos ter tipos que representam números, textos, valores binários, listas, funções, entre outros.

No caso das bandas, o tipo da variável é uma tabela. A tabela é o único tipo composto/estrutura de dados que temos em Lua. Podemos utilizar tabelas para representarmos listas, hashmaps, vetores, arranjos,
dicionários. Não se preocupe se alguns desses termos são grego para você. Com o passar do tempo, você se acostumará com esses termos. Na nossa tabela, guardamos valores
que são do tipo *string*, que nada mais é que uma sequência de caracteres (texto).

Vamos ver o valor que temos na variável bandas:

`> print(bandas)`

O comando "print" escreve na tela o valor que temos na(s) variável(is) que colocamos entre os parênteses "()". O resultado deve ter sido algo como "table: 0x5607b10fbc10". Apesar de você ter esperado os nomes das bandas que colocamos, o que foi retornado é o endereço
da memória onde está nossa tabela. O nome 'bandas' é só um ponteiro, uma referência a esse endereço. Para vermos os valores que temos, é necessário passarmos por cada
item da lista e mostrarmos eles. Vamos utilizar os comandos de repetição da linguagem então.

`> for i=1, #bandas do print(bandas[i]) end`

<a href="https://imgflip.com/i/26c94l"><img src="https://i.imgflip.com/26c94l.jpg" title="made at imgflip.com"/></a>

Vamos por partes. Caso você saiba inglês, mesmo que pouco, você deve ter entendido o que aconteceu.

Anyway, em poucas palavras, eu pedi para que cada elemento da tabela "bandas" fosse escrito na tela do interpretador, que foi o que aconteceu.

A palavra *for* é reservada pela linguagem e serve para dizermos que queremos repetir um comando por algumas vezes. Eu especifiquei quantas vezes logo depois do *for*.

Eu declarei uma variável de nome *i* que recebe o valor *1*, ou seja, o tipo da variável i é numérico. Depois da vírgula *,*, vem um *#* seguido da minha variável
bandas, que é a lista. Esse *#* está dizendo que em vez de utilizar o valor de *bandas*, eu quero utilizar o tamanho numérico da lista, ou melhor, a quantidade de itens
que minha lista tem. No caso da minha, são três. Para ficar mais claro, digite o seguinte.

`> print(#bandas)`

Esse número representa a quantidade de itens, da nossa lista, ou seja o tamanho dela.

Então no *for*, eu estou dizendo que quero que a variável *i* comece em *1* e incremente esse valor até chegar em *3*, que é o tamanho da lista.
A cada incremento, é(são) executado(s) o(s) comando(s) que vai(ão) entre *do* e *end*. No nosso caso, é mostrado na tela o valor que está no índice *i* da lista *bandas*.

O índice, ou posição, que é o valor que vai dentro dos colchetes *[]* representa um rótulo ou número o qual podemos acessar o valor que temos naquela posição da tabela.

No caso da nossa tabela, cada nome de banda é referenciado por um número, na sequência que colocamos os nomes, começando do *1*:

1. 'Avenged Sevenfold'

2. 'Gorillaz'

3. 'Arctic Monkeys'

Como podemos ter qualquer tipo de valor na tabela e não vamos lembrar de cor onde está cada nome, pois podemos ter um monte, acessamos cada um pelo seu rótulo.

Poderíamos ter feito algo assim:

`bandas = {'banda1': 'Avenged Sevenfold', 'banda2': 'Gorillaz', etc}`

E acessarmos pelos rótulos 'banda1', 'banda2', etc.

Então, no *for* começamos com *i* em *1* e mostramos na tela o valor que *bandas* tem na posição *1*. Depois, *i* fica com valor *2* e mostramos o valor dessa
posição em *bandas*. Por fim, *i* tem *3* e mostra o último elemento da tabela. Como *#bandas* vai até *3*, o *for* termina aí.

Nosso programa já guarda nossas bandas favoritas, porém faltam alguns detalhes. Precisamos adicionar quantas bandas quisermos, remover quem não gostamos mais e precisamos
dar um jeito de colocarmos as nossas músicas favoritas, também, e relacionarmos com as bandas.

Poderíamos continuar colocando novas bandas na nossa lista, fazendo o seguinte.

`> table.insert(bandas,'The Killers')`

`> table.insert(bandas,'Coldplay')`

E assim sucessivamente. Se você executar o *for* novamente.

`> for i=1, #bandas do print(bandas[i]) end`

Verá todas as nossas bandas, incluindo as duas que coloquei a pouco. O comando *table.insert()* insere na tabela que colocamos primeiro entre os parênteses o valor que colocamos depois da vírgula. O valor de *#bandas* aumentou para *5*, no nosso caso, pois a quantidade de itens aumentou. Podemos aumentar indefinidamente, o quanto quisermos, até estourar a memória, o que pode ser muita coisa.

Para removermos uma banda da lista, temos que usar o comando *table.remove()*, informando a lista e o rótulo onde está o valor que queremos remover.

Por exemplo.

`> table.remove(bandas, 4)`

Remove 'The Killers', pois esta banda está na posição *4* da tabela *bandas*. Você pode executar o *for* novamente para ver a lista sem a banda que retiramos.

So far, so good, porém, ainda não temos nossas músicas favoritas e o pior: quando sairmos do interpretador, nosso programa estará perdido.

Vamos então, criar nosso programa de fato, para que seja usável em qualquer momento.

Começaremos criando um arquivo com extensão .lua que será executado pelo interpretador lua. Esse arquivo conterá nosso programa. Mas antes de partirmos para o programa
de fato, temos que criar uma forma de representarmos as bandas com o nome delas e a música favorita de cada uma. Porém, em Lua não temos o tipo Banda (e, acredito eu, nem outra linguagem de programação). Sendo assim, precisamos usar um recurso de programação chamado Orientação a Objetos.

Nesse paradigma, podemos criar variáveis que são de tipos que nós mesmo definirmos. Para isso, definimos como nosso tipo será em uma estrutura chamada *Classe*, que nada mais é que uma fôrma, um molde que servirá de modelo para nosso tipo.

Lua não é Orientada a Objetos, por padrão, mas podemos usar artifícios presentes nas tabelas para alterarmos o comportamento delas e simularmos classes.

Vamos lá, abra seu editor favorito (o meu é o Atom). Não pode ser Word, Writer, nem derivados. Já salve o seu documento em branco com o nome *banda.lua* em alguma pasta acessível. Comece definindo a classe exatamente desse jeito.

```
Banda = {}
Banda.__index = Banda
```

Definimos uma tabela chamada Banda e ela está vazia. Vamos colocar os valores conforme desenvolvermos essa classe. A classe nada mais é que essa tabela, com
comportamento que vamos definindo. O primeiro comportamento que definimos é a próxima linha que contém o nome da classe/tabela (Banda) seguido de ponto *.* e depois com
dois __underline__ juntos ("_" e "_" juntos), seguido da palavra index.

Toda tabela em Lua tem essa variável chamada *__index* que especifica o seguinte: caso criemos uma tabela vazia, Lua procurará pelo valor de *__index* que no caso é
a classe *Banda*. Fazemos isso porque as variáveis que criaremos do tipo *Banda*, ou seja, os objetos da classe *Banda* podem começar vazios e teremos que usar comportamentos definidos na classe *Banda*. Para que não tenhamos uma mensagem de erro porque acessaremos valores que não existem nas tabelas criadas, dizemos que, caso não seja encontrado nada no objeto, Lua terá que procurar por valores que estão na classe *Banda*. É confuso, mas ficará menos daqui a pouco.

Continue escrevendo nossa classe. Adicione as linhas abaixo depois de *Banda.__index = Banda*:

```
function Banda.new(nome,musica_favorita)
    local self = setmetatable({},Banda)
    self.nome = nome or ''
    self.musica_favorita = musica_favorita or ''
    return self
end

function Banda.setNome(self, nome)
    self.nome = nome
end

function Banda.setMusicaFavorita(self, musica_favorita)
    self.musica_favorita = musica_favorita
end

function Banda.getNome(self)
    return self.nome
end

function Banda.getMusicaFavorita(self)
    return self.musica_favorita
end

function Banda.print(self)
    print(self:getNome() .. " - " .. self:getMusicaFavorita())
end
```

Agora foi bastante coisa!

O que você deve saber é que estamos criando funções para nossa classe. Funções são tipos em Lua que nada mais são que uma sequência de comandos que podem ser chamados a qualquer momento, apenas chamando pelo seu nome. As funções podem retornar valores que podem ser atribuídos a outras variáveis e, também, podem receber valores para serem trabalhados.

Estamos criando várias funções que estarão na classe *Banda*. A sintaxe *Classe.função*, como em *Banda.new*, é a mesma coisa que:

`Banda = {function new(nome,musica_favorita), etc }`

Isso mesmo! Tabelas podem ter funções como valores. Legal, né!

A função *new* será chamado quando criarmos nossos objetos. Poderemos definir já na criação o nome e a música favorita de nossas bandas.

Na função *new* recebemos o nome da banda e a música favorita, pelas variáveis *nome* e *musica_favorita*. Na primeira linha da função definimos uma tabela chamada *self*. Essa tabela representa as variáveis de nosso objeto. Para especificarmos que só aceitaremos coisas especificadas na própria classe *Banda*, utilizamos a função
setmetatable(). Essa função recebe como parâmetros uma tabela que sofrerá alterações de comportamento e outra tabela que servirá de modelo para essas alterações. No caso, dizemos que nossa tabela *self* começa vazia ({}) e a classe *Banda* é a tabela que definirá o comportamento de *self*. É aí que está a jogada da "Orientação a objetos" de Lua.

Na sequência, colocamos as variáveis *nome* e *musica_favorita* dentro da tabela *self*. Atribuímos o valor dos parâmetros que recebemos na função ou, caso não sejam passados, são inicializados vazios (''). Retornamos self no fim para o objeto.

As próximas funções definem como serão gerenciados os atributos *nome* e *musica_favorita* da nossa classe. Os métodos que começam com *set* permitem que troquemos os valores de nossos atributos por parâmetros que passamos na função. Os métodos que começam com *get* são usados para retornarmos os valores que estão nos atributos da nossa classe. Por fim, definimos uma função chamada *print* que mostra na tela os valores dos atributos.

Salve e feche o arquivo *banda.lua* e vamos testar nossa classe.

Abra o terminal e digite lua novamente. Vamos testar no interpretador.

Para usarmos nossa classe recém-criada, navegue pelos diretórios até entrar na pasta onde salvamos nosso arquivo *banda.lua* e digite o seguinte:

`lua`

E dentro do interpretador:

`> require "banda"`

Esse comando procurará por arquivos chamado banda.lua na pasta atual. Caso encontre, poderemos usar nossa classe.

`>a7x = Banda.new('Avenged Sevenfold', 'A Little Piece of Heaven')`

Estamos criando um objeto chamado a7x e chamamos a função *new* da classe *Banda*. Agora temos um objeto que representa uma Banda.
Mostre o que temos na nossa banda usando o comando *print* do objeto.

`> a7x:print()`

É mostrado exatamente o que definimos no nosso objeto. Utilizamos ":" porque na nossa classe Banda, cada função tem o primeiro parâmetro *self*, isto é, a tabela que representa nosso objeto. Para não termos que colocar toda vez o nome do nosso objeto entre parênteses cada vez que usamos as funções, o ":" é usado como um atalho para isso.

<a href="https://imgflip.com/i/26c9n4"><img src="https://i.imgflip.com/26c9n4.jpg" title="made at imgflip.com"/></a>

Vamos criar mais uma banda.

`> gorillaz = Banda.new()`

Perceba que criamos ela vazia. Vamos verificar o conteúdo dela com o comando *print* do objeto:

`> gorillaz:print()`

Foi mostrado apenas um "-" porque não definimos o nome nem a música favorita.

Faça isso agora com as funções *set*:

`> gorillaz:setNome('Gorillaz')`

`> gorillaz:setMusicaFavorita('La Mañana')`

E, de novo agora:

`> gorillaz:print()`



Agora já podemos até inserir nossas bandas em uma lista.

Mas vamos aproveitar que estamos *pro* e vamos já criar um programa que gerencie isso para gente.

Abra o seu editor de novo, crie um novo arquivo chamado *BandasFavoritas.lua* e salve-o na mesma pasta de *banda.lua*.

Vamos criar várias funções que serão chamadas conforme a operação que desejamos fazer.

Coloque o comando que indica que usaremos a classe Banda no nosso código.

`require "banda"`

Comecemos criando uma tabela que representará a lista de bandas:

`lista_bandas = {}`

E agora, vamos criar uma função que permita adicionar bandas nessa lista:

```
function adicionarBanda()
    repeat
        print("Digite o nome da banda")
        nome_banda = io.read()
        print("Digite a sua música favorita dessa banda")
        musica_favorita = io.read()
        table.insert(lista_bandas, Banda.new(nome_banda, musica_favorita))
        print("Deseja adicionar mais uma banda? s/n")
        opcao = io.read()
    until opcao ~= 's'
end
```

Nessa função, estamos operando em uma repetição diferente do nosso *for*. O comando *repeat* repete a execução das linhas que escrevemos até que uma condição seja satisfeita.

A condição a ser satisfeita é definida em *until*. No caso, verificamos se o valor da variável *opcao* é diferente do caracter 's'. Caso seja, a execução da função será finalizada. Pedimos pelo nome e música favorita da banda e guardamos em variáveis que serão utilizadas para criar nossos objetos e inserí-los na lista. Para receber entradas do teclado, utilizamos a função *read()* de *io*. Em vez de darmos um nome cada vez que criamos um objeto, utilizamos a função *new()* da classe *Banda*, direto na inserção na lista, criando vários objetos sem nome, que serão referenciados pelos indíces na tabela.

Vamos agora criar uma função que mostra os elementos da nossa lista. Mas antes, criaremos uma função que verificará se a lista não está vazia. Caso esteja, retornará o valor binário *true*, senão *false*.

```
function isListaVazia()
    if #lista_bandas == 0 then
        return true
    else
        return false
    end
end
```

Seja esperto. Estamos vendo se o tamanho da lista é *0*.

Agora sim, listaremos as bandas.

```
function listarBandas()
    repeat
        if isListaVazia() then
            print("A lista está vazia")
            break
        else
            print("Lista da suas bandas favoritas")
            for i=1,#lista_bandas do
                lista_bandas[i]:print()
            end
            print("Deseja listar novamente? s/n")
            opcao = io.read()
        end
    until opcao ~= 's'
end
```

Utilizamos o mesmo laço de repetição, caso o usuário quiser listar novamente. Verificamos numa estrutura condicional, o *if* *else*, se nossa lista está vazia, utilizando a função que fizemos antes. Mostramos a mensagem "A lista está vazia" se ela esitver vazia (duh), senão, iteramos na nossa lista com o *for* utilizando a função *print()* dos nossos objetos da classe *Banda* que estão em cada posição da lista de bandas.

Até agora nós só criamos as funções. Se executarmos nosso arquivo *BandasFavoritas.lua*, não acontecerá nada, pois não estamos chamando nossas funções.

Para mantermos a organização, vamos criar uma função chamada *menuPrincipal()* que será a única função chamada e apresentará opções para escolhermos qual função desejamos chamar.

```
function menuPrincipal()
    while(true) do
        print("Programa para gerenciar suas bandas favoritas")
        print("Digite o número da opção")
        print("1 - Listar bandas")
        print("2 - Listar bandas por nome")
        print("3 - Listar bandas por música favorita")
        print("4 - Adicionar banda")
        print("5 - Remover banda")
        print("0 - Sair")
        opcao = io.read()

        if opcao == '1' then
            listarBandas()
        elseif opcao == '2' then
            listarBandasNome()
        elseif opcao == '3' then
            listarBandasMusicaFavorita()
        elseif opcao == '4' then
            adicionarBanda()
        elseif opcao == '5' then
            removerBanda()
        elseif opcao == '0' then
            break
        else
            print("Opção inválida")
        end
    end
end
```

Percebe que utilizamos uma estrutura de repetição nova. O *while* executa as linhas de *do* até o último *end* enquanto a condição especificada dentro dos parênteses for satisfeita. No caso, colocamos um valor binário *true* para que ele seja executado para sempre. O único jeito desse "laço ser quebrado" é com um comando chamado *break*.

Se você olhar no último *elseif*, verificamos se a *opcao* é igual a *0*. Caso seja, o *break* é executado, encerrando o *while* e a função. Perceba também a diferença entre "=" e "==": o primeiro é *atribuição* e o segundo é *comparação*.

Temos várias opções de operações. As nossas funções recém-criadas estão nas opções 1 e 4. Já aproveitei para listar as próximas funções e é isso que faremos.

Vamos começar removendo uma banda.

```
function removerBanda()
    repeat
        if isListaVazia() then
            print("A lista está vazia")
            break
        else
            print("Digite o número da banda que você deseja remover")
            for i=1,#lista_bandas do
                print(i .. " - " .. lista_bandas[i]:getNome())
            end
            opcao = tonumber(io.read())
            if opcao < 1 or opcao > #lista_bandas then
                print("Opção inválida!")
                break
            end

            table.remove(lista_bandas, opcao)
            print("Deseja remover mais uma banda? s/n")
            opcao = io.read()
        end
    until opcao ~= 's'
end
```

Usamos novamente nossa função que verifica se uma lista está vazia, para impedirmos que o usuário tente remover bandas sem nem ter bandas na lista. O *break* também pode ser utilizado no *repeat*.

Primeiro listamos nossas bandas. Poderíamos ter usado nossa função que lista as bandas, mas percebe que inserimos o índice na frente de cada nome. Além disso, não estamos mostrando as músicas favoritas pois não é tão necessário.

Recebemos o índice que o usuário deseja remover e passamos na função *table.insert()*. Fazemos mais uma verificação para checar se a opção digitada está dentro da quantidade de bandas na lista. O usuário pode remover quantas bandas quiser, enquanto a lista tiver bandas e enquanto ele digitar 's', da mesma forma que inserimos.

Agora vamos fazer nossas últimas funções, que são listar as bandas por ordem dos nomes e por ordem das músicas favoritas, alfabeticamente.

```
function listarBandasNome()
    repeat
        if isListaVazia() then
            print("A lista está vazia")
            break
        else
            print("Lista das bandas por nome")
            local t = {}
            for k,v in ipairs(lista_bandas) do table.insert(t, v) end
            table.sort(t, function(a,b) return a:getNome()<b:getNome() end)
            for i=1,#t do
                t[i]:print()
            end
            t = nil
            print("Deseja listar novamente? s/n")
            opcao = io.read()
        end
    until opcao ~= 's'
end

function listarBandasMusicaFavorita()
    repeat
        if isListaVazia() then
            print("A lista está vazia")
            break
        else
            print("Lista das bandas por música favorita")
            local t = {}
            for k,v in ipairs(lista_bandas) do table.insert(t, v) end
            table.sort(t, function(a,b) return a:getMusicaFavorita()<b:getMusicaFavorita() end)
            for i=1,#t do
                t[i]:print()
            end
            t = nil
            print("Deseja listar novamente? s/n")
            opcao = io.read()
        end
    until opcao ~= 's'
end
```

As duas funções são bem parecidas. Ainda utilizamos nossas verificações de lista vazia e dentro de laços de repetição.

Porém, nossa listagem é bem diferente. Primeiro, criamos uma tabela vazia *t*. Depois, copiamos o conteúdo da nossa lista para essa tabela *t* em um *for* diferente.

Dessa vez, declaramos duas variáveis *k* e *v* que representam cada índice (chave) e seu respectivo valor (value) da tabela. Esse tipo de *for* é muito útil em tabelas que não tem valores referenciados por índices numéricos. Coloquei esse exemplo aqui para que você conheça mais essa feature e para variar um pouco.

Inserimos na tabela *t*, cada valor *v* que iteramos no *for*. Quando iteramos tudo, todas as bandas na lista de bandas estão agora também na tabela *t*.

Fiz isso, pois vamos reordenar nossa lista de bandas. Para não fazer isso na mesma lista que utilizamos nas outras funções, utilizo essa variável *t* apenas para isso.

A função *table.sort()* ordena a tabela que passamos de acordo com condições que prescrevemos. Veja que dentro dessa função eu passo outra função sem nome que especifica como será a ordenação. Essa função tem dois parâmentros genéricos *a* e *b* que representarão nossas bandas, na sequência em que elas aparecem. Assim, dentro da função, verificamos se o nome de uma banda é "menor" que o nome da próxima banda. Quando comparamos *strings*, comparamo-as alfabeticamente.

A única diferença para a função que lista pelas músicas favoritas, é que na função anônima de comparação, utilizamos o atributo da música favorita, mas a comparação é bem parecida.

Com essa reordenação feita, iteramos pela nossa tabela ordenada e executamos a função *print()* dos objetos.

Com isso é só você adicionar uma última linha, chamando nossa *menuPrincipal()*

`menuPrincipal()`

Salve, feche e abra o terminal na pasta onde estão seus códigos.

Agora é só executar o arquivo BandasFavoritas.lua da seguinte forma:

`lua BandasFavoritas.lua`

Vá seguindo as orientações da tela e adicione e remova quantas bandas quiser. Liste-as das diferentes formas que implementamos e teste cada opção.

O código completo do arquivo banda.lua:

```
-- Classe que representa uma banda
Banda = {}
Banda.__index = Banda

function Banda.new(nome,musica_favorita)
    local self = setmetatable({},Banda)
    self.nome = nome or ''
    self.musica_favorita = musica_favorita or ''
    return self
end

function Banda.setNome(self, nome)
    self.nome = nome
end

function Banda.setMusicaFavorita(self, musica_favorita)
    self.musica_favorita = musica_favorita
end

function Banda.getNome(self)
    return self.nome
end

function Banda.getMusicaFavorita(self)
    return self.musica_favorita
end

function Banda.print(self)
    print(self:getNome() .. " - " .. self:getMusicaFavorita())
end
```

A primeira linha, que começa com "--", define um comentário, que nada mais é que um texto que será ignorado pelo nosso interpretador e serve para organizarmos melhor o código.

E o arquivo do nosso programa BandasFavoritas.lua

```
require "banda"

a7x = Banda.new('Avenged Sevenfold', 'So Far Away')

lista_bandas = {}
table.insert(lista_bandas,a7x)

function isListaVazia()
    if #lista_bandas == 0 then
        return true
    else
        return false
    end
end

function listarBandas()
    repeat
        if isListaVazia() then
            print("A lista está vazia")
            break
        else
            print("Lista da suas bandas favoritas")
            for i=1,#lista_bandas do
                lista_bandas[i]:print()
            end
            print("Deseja listar novamente? s/n")
            opcao = io.read()
        end
    until opcao ~= 's'
end

function listarBandasNome()
    repeat
        if isListaVazia() then
            print("A lista está vazia")
            break
        else
            print("Lista das bandas por nome")
            local t = {}
            for k,v in ipairs(lista_bandas) do table.insert(t, v) end
            table.sort(t, function(a,b) return a:getNome()<b:getNome() end)
            for i=1,#t do
                t[i]:print()
            end
            t = nil
            print("Deseja listar novamente? s/n")
            opcao = io.read()
        end
    until opcao ~= 's'
end

function listarBandasMusicaFavorita()
    repeat
        if isListaVazia() then
            print("A lista está vazia")
            break
        else
            print("Lista das bandas por música favorita")
            local t = {}
            for k,v in ipairs(lista_bandas) do table.insert(t, v) end
            table.sort(t, function(a,b) return a:getMusicaFavorita()<b:getMusicaFavorita() end)
            for i=1,#t do
                t[i]:print()
            end
            t = nil
            print("Deseja listar novamente? s/n")
            opcao = io.read()
        end
    until opcao ~= 's'
end

function adicionarBanda()
    repeat
        print("Digite o nome da banda")
        nome_banda = io.read()
        print("Digite a sua música favorita dessa banda")
        musica_favorita = io.read()
        table.insert(lista_bandas, Banda.new(nome_banda, musica_favorita))
        print("Deseja adicionar mais uma banda? s/n")
        opcao = io.read()
    until opcao ~= 's'
end

function removerBanda()
    repeat
        if isListaVazia() then
            print("A lista está vazia")
            break
        else
            print("Digite o número da banda que você deseja remover")
            for i=1,#lista_bandas do
                print(i .. " - " .. lista_bandas[i]:getNome())
            end
            opcao = tonumber(io.read())
            if opcao < 1 or opcao > #lista_bandas then
                print("Opção inválida!")
                break
            end

            table.remove(lista_bandas, opcao)
            print("Deseja remover mais uma banda? s/n")
            opcao = io.read()
        end
    until opcao ~= 's'
end

function menuPrincipal()
    while(true) do
        print("Programa para gerenciar suas bandas favoritas")
        print("Digite o número da opção")
        print("1 - Listar bandas")
        print("2 - Listar bandas por nome")
        print("3 - Listar bandas por música favorita")
        print("4 - Adicionar banda")
        print("5 - Remover banda")
        print("0 - Sair")
        opcao = io.read()

        if opcao == '1' then
            listarBandas()
        elseif opcao == '2' then
            listarBandasNome()
        elseif opcao == '3' then
            listarBandasMusicaFavorita()
        elseif opcao == '4' then
            adicionarBanda()
        elseif opcao == '5' then
            removerBanda()
        elseif opcao == '0' then
            break
        else
            print("Opção inválida")
        end
    end
end

menuPrincipal()
```

Ufa! Terminamos nosso tour pela linguagem Lua. Esse exemplo cobre boa parte das *features* da linguagem e já serve como referência para você desenvolver outras coisas.

É claro que é recomendadíssimo ler, pelo menos o tutorial da linguagem, ou adquirir os livros de referência escritos pela próprio equipe que mantém Lua.

Como tarefa, altere nossa classe para que permita que mais músicas sejam adicionadas. Altere nosso programa principal, também, para permitir a listagem das músicas por banda. Você pode tornar o programa mais completo, verificando sempre se as entradas do usuário são válidas quando ele digita uma opção.

É isto e até a próxima.
