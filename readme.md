# Bresa

Front-end framework made with ♥ by Fishy

Version 3.1

## Collaborators: ##
* Dereckson Santana
* Leticia Lima
* Filipe Andrade
* Bruno Dutra
* Rafael Freire


Sugestões é so fazer uma edição e manda o *pull request* =]

## License ##
LICENSE:
  MIT - http://www.opensource.org/licenses/mit-license.php


## Regras do Bresa ##
* SCSS compilado usando o GULP 
* Para iniciar o Gulp, rodar o comando npm install, onde estiver os arquivos: gulpfile.js e packaje.json
* Quando o site for publicado na versão final, NÃO SUBIR os arquivos de base (pasta src, node_modules, .git, gulpfile.js, packaje.json, readme.md);
* Utilizar as fontes apenas no formato específico;
* TABSIZE: 2 

## Usando SCSS ##
* Prefira dashes (-) no lugar de camelCasing em nomes de classes.
* Criar todas as variáveis de cor;
* Criar mixins para animações;
* Fazer os mixins de fontes (300, 400, 700), caso necessário;
* Configurar o media queries de acordo com a necessidade do projeto;
* Caso precise definir algum padrão para todos os elementos, utilizar o arquivo (reset.scss);
* Pense no reaproveitamento do código;

## O que NÃO FAZER ##
```
#!scss

.nao_fazer {
  border-radius:50%;
  border:2px solid white; }
.nao, .nope, .not_good {
  /* ...*/
}
#id?serio???? {
  /* ...*/
}
```
## COMO FAZER ##
```
#!scss

.avatar {border-radius:50%;border:2px solid white;}

.one,
.selector,
.per-line {
  border-radius:50%;border:2px solid white;
}
```

## Comentários no SCSS  ##
  * Tenha preferência em usar comentários ('//') em comentários de bloco;
  * Faça comentários onde inicia e conclui o código daquela sessão;

```
#!scss

// Pagina Interna - Quem Somos
.seletor {width:100%;height:30px;border:0;}
.seletor-two {width:100%;height:30px;border:0;}
.seletor-three {width:100%;height:30px;border:0;}
.seletor-four {width:100%;height:30px;border:0;}

// Final Pagina Interna - Quem Somos
```



## Seletores ID ##
  **Não escreve nesse nível de seletores **


```
#!scss

.page-container {
  .content {
    .profile {
      /* NAO FAZER ISSO!! */
    }
  }
}
```



  
## JavaScript hooks ##

  Evite vincular a mesma classe em seu CSS e JavaScript. Combinando os dois, muitas vezes resulta em tempo perdido durante refatoração, quando um desenvolvedor deve fazer uma referência cruzada de cada classe que está alterando e, pior ainda, o medo de quebrar alguma funcionalidade.

  Recomendamos a criação de classes específicas JavaScript para vinculação, com prefixo `.js-`:


```
#!html
  <button class="btn btn-primary js-request-to-book">Request to Book</button>

```

## Variáveis ##
  Prefira nomes de variáveis com dash-cased (ex. `$my-variable`) do que camelCased ou snake_cased. É aceitável adicionar prefíxos em nomes de variáveis que se destinam a ser usadas dentro do mesmo arquivo com um "underscore" (ex. `$_my-variable`).

## Mixins ##
  Mixins devem ser usados para limpar seu código, adicionar clareza ou abstrair complexidade, assim como funções bem nomeadas. Mixins que aceitam nenhum argumento podem ser úteis para isto, mas note que se você não compactar seu payload (ex. gzip) isto pode contribuir para duplicação de código desnecessário nos estilos resultantes.

## Extend ##
  `@extend` deve ser evitado porque possui comportamento não intuitivo e perigoso, especialmente quando usado em seletores agrupados. Mesmo extendendo os seletores placeholder de nível superior, isto pode causar problemas se a ordem dos seletores mudar mais tarde (ex. se eles estão em outros arquivos e a ordem dos mesmos variar). Gzipping lida com a maioria das economias que você teria ganho usando `@extend`, e, ainda, você pode limpar seus estilos muito bem com mixins.



## Compilando as Imagens ##
* Comprimir todas as imagens no final do projeto ( - sites de referência abaixo);
  * JPG - https://tinyjpg.com/
  * PNG - https://tinypng.com/
  * Compressor.io - https://compressor.io/


## JavaScript ##
 * Todos os comentários inseridos no arquivo (src/js/main.js), será removido quando compilado;
 * Criar functions para resize e window load, para evitar código repetido;
 * Não utilizar plugins para estilizar select's