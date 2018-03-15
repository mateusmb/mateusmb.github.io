---
layout: post
title:  "O retorno do Coding Dojo ao IFC - Campus Blumenau"
date:   2018-03-14 20:20:00
categories: coding-dojo
---
<a href="http://media.riffsy.com/images/72e8935d857a5ab24d18f3ff5dc7bd59/tenor.gif"><img src="http://media.riffsy.com/images/72e8935d857a5ab24d18f3ff5dc7bd59/tenor.gif" title="codingdojo"/></a>

Voltei a realizar um Coding Dojo no IFC, após três anos sem nem sequer mencionar esse método
de treinamento de "resolvedores de problemas".

Mas antes de dizer como foi nosso evento, devo explicar o que é um Coding Dojo (desculpa ao pessoal que
foi e teve que ouvir minha explicação de 15 minutos e vão ter que ler agora [⌒_⌒;]).

# O que é um Coding Dojo

Em termos rápidos, um [Coding Dojo](http://codingdojo.org/) é um encontro de programadores e entusiastas que colaboram juntos para resolver um
ou mais problemas de programação.

A ideia de um Coding Dojo é a mesma de um dojo de artes marciais: treinar conceitos.

Programadores não tem a tendência de treinar o que sabem e o que aprendem. A aplicação do conhecimento é sempre mediante às demandas da
própria profissão. O mesmo vale para o público acadêmico: alunos programam só na hora da prova e, lá de vez em quando, nos exercícios
de sala.

Você sabe que é verdade...

Em um Coding Dojo reunimos os programadores e trabalhamos juntos para resolver os problemas, usando uma linguagem de programação qualquer, não sendo necessário que
todos os participantes a dominem. Utilizamos conceitos de programação Agile, como
__desenvolvimento orientado à testes__, __programação em pares__ e __baby steps__ (passos de bebê).

# Como funciona

<a href="https://www.beeva.com/wp-content/uploads/2016/06/BEEVA-coding-dojo-rantori-1200x565.png"><img src="https://www.beeva.com/wp-content/uploads/2016/06/BEEVA-coding-dojo-rantori-1200x565.png" title="codingdojo"/></a>

Há apenas um computador na sala, ligado a um projetor ou TV. O ideal é ter um quadro, também, para rabiscar ideias.

Na frente do computador, sentam duas pessoas: __piloto__ e __copiloto__.

O piloto escreve o código para tentar resolver o problema. Ele deve evoluir gradativamente em direção à solução.

O copiloto fica ao lado auxiliando na resolução, porém, sem encostar no computador. Apenas dicas e discussão de ideias
são ações permitidas ao copiloto.

O resto do público é considerado __plateia__ e assiste enquanto piloto e copiloto trabalham na resolução do problema.
A plateia pode pensar em soluções também e, até, rabiscar ideias em blocos de notas ou cadernos que trouxerem. Porém, devem permanecer
em silêncio e apenas se pronunciar após o piloto executar o código escrito.

Existe, também, a figura do __sensei__ que nada mais é que o organizador do encontro. O sensei não dá soluções e nem respostas, mas deve garantir que os
participantes não se desviem muito do caminho. Se necessário, ele pode assumir o papel de copiloto ou piloto quando precisar.

É definido um tempo limite para o piloto e copiloto. Estourado esse tempo, o piloto vai para a plateia, o copiloto assume o papel de piloto e alguém
da plateia vira copiloto. Esse rodízio acontece até que seja resolvido completamente o problema.

O piloto deve sempre testar o código que escreve. Por isso é importante que piloto e copiloto projetem pequenos testes que se concretizem na resolução completa.
A cada teste escrito, o piloto deve escrever um código que passe no teste. Depois de passar, a plateia pode se manifestar.

Esse fluxo serve para quebrarmos o problema em pequenas partes e pensarmos em conjunto.

Após terminarmos o Dojo, avaliamos como foi o encontro, fazendo uma lista de pontos positivos e pontos negativos.

# Como foi o Coding Dojo no IFC

<a href="https://i.imgur.com/tRhEgZ3.jpg"><img src="https://i.imgur.com/tRhEgZ3.jpg" title="dojoifc"/></a>

Realizamos o Coding Dojo do IFC no dia 09 de março de 2018 (sexta-feira). Tivemos a participação de oito pessoas no total (contando comigo) o que é
um número aceitável.

Como fazia muito tempo que não havia um Dojo no IFC e todos os participantes, com exceção de um, eram novatos, expliquei brevemente o que é um
Coding Dojo e como funciona.

Após a explicação, demonstrei a resolução de um problema para que os participantes entendessem como funciona o processo e, também, para apresentar a ferramenta
que utilizaríamos: o [cyber dojo](). Essa demonstração prévia se chama __Kata__ e faz parte do ritual do encontro.

Após o kata, começamos o __Randori__ que é o processo descrito antes, o qual contém os papeis de piloto, copiloto e plateia.

O problema escolhido foi o desenvolvimento de um conversor de números romanos para números arábicos e a linguagem utilizada foi __Python__.

A descrição do problema é a seguinte:

```
Os romanos escreviam números utilizando letras: I, V, X, L, C, D, M.

Escreva um programa que receba um número romano e retorne um número arábico. Exemplos:

I -> 1
IV -> 4
XIX -> 19
MCMXCIII -> 1993
```

Apesar de parecer simples, a resolução não foi tão trivial. Acabamos ficando muito presos à burocracia dos testes, o que não foi muito bom.

Conseguimos chegar mais perto da solução com a implementação de um dicionário que mapeia as letras para os números e, finalmente, solucionamos o problema
convertendo cada letra e somando os números de trás para frente. Caso um número posterior for menor que o atual, fazemos uma subtração.

O código da solução segue abaixo:

```
class Romanos:

    def converter(self, numero):
        arabicos = {}
        arabicos["I"] = 1
        arabicos["V"] = 5
        arabicos["X"] = 10
        arabicos["L"] = 50
        arabicos["C"] = 100
        arabicos["D"] = 500
        arabicos["M"] = 1000

        numero = numero[::-1]
        resultado = arabicos[numero[0]]
        for i in range(1, len(numero)):
            if numero[i] in arabicos:
                if arabicos[numero[i]] < arabicos[numero[i-1]]:
                    resultado -= arabicos[numero[i]]
                else:
                    resultado += arabicos[numero[i]]

        return resultado
```

E os testes:

```
import romanos
import unittest

class TestRomanos(unittest.TestCase):
    romanos = romanos.Romanos()
    def test_I_retorna_1(self):
        self.assertEquals(1993, self.romanos.converter('CMX'))
        self.assertEquals(910, self.romanos.converter('CMX'))

if __name__ == '__main__':
    unittest.main()
```

No final do Dojo, listamos os seguintes pontos __positivos__ e __negativos__:

|  Positivo  |  Negativo  |
| ---------- | ---------- |
| Conseguimos resolver o problema   | Não teve comida  |
| Boa ideia da Sabrina de usar dicionário do python  | Ficamos um tempo discutindo uma ideia de autômatos que não foi utilizada  |
| Boa ideia do André de somarmos de trás pra frente   | Muita burocracia de testes acabou retardando o processo de resolução  |
| Trabalhamos em equipe   | Seria legal se tivesse mais algumas pessoas  |
| Richard terminou dentro do tempo previsto   | Começamos meio atrasados  |

Para os próximos Dojos, devemos realçar os pontos positivos e corrigir os pontos negativos.

A ideia agora é manter o encontro de forma periódica e atacando variados tipos de problemas, sempre incentivando a interação, o trabalho em equipe e,
principalmente, se divertir enquanto pratica o que aprende.

__また今度__
