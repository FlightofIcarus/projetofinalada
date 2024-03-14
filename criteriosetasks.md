# Critérios de aceite

1 - Todas as tasks devem estar em done
2 - Usar branchs separadas, seguindo regra: feature(desenvolvimento) e release(Produção)
3 - Projeto deve ter estrutura com front, API e BFF(Back for front)
4 - Deve receber um valor, uma medida temporal e calcular o valor de retorno sobre investimento e montante devolvido ao investidor.
5 - API deve calcular o investimento baseado nos inputs fornecidos e devolver os valores já calculados.
6 - BFF deve receber requisição do front e enviar para a API
7 - API deve ter no mínimo uma rota
8 - Períodos abaixo de 30 dias não apresentam rendimento/dividendos
9 - API deve ter cobertura de teste (Mínimo de 1 suit de testes)
10 - BFF deve ter cobertura de teste (Mínimo de 1 suit de testes)


# Tasks

01 - Criar repositório
02 - Criar backlog
03 - Criar issues
04 - Criar input de valor
05 - Criar input de tempo
06 - Criar button submit (com prevent default)
07 - Criar p de taxa de juros
08 - Criar p de valor de retorno
09 - Criar p montante
10 - Criar rota/endpoint
11 - Criar o servidor base Express
12 - Criar arquivo com variáveis de ambiente (.env)
13 - Criar o controller
14 - Criar camada de service com regras de negócio
15 - Criar função de cálculo de dividendos
16 - Criar arquivo de entrypoint(app.ts/js ou server.ts/js)
17 - Criar o servidor BFF Express
18 - Criar rota/endpoint do BFF
19 - Criar arquivo com variáveis de ambiente (.env)
20 - Criar de entrypoint
21 - Criar teste para no mínimo camada de service da API
22 - Criar teste para requisição do BFF
