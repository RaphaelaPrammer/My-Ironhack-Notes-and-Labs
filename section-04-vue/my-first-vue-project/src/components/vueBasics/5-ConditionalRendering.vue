<template>
  <div>
    <h1>Conditinal rendering using v-if, v-else-if, v-else directive</h1>
    <div id="conditional-rendering-part-1">
      <!-- Approach sencillo utilizando un v-if -->
      <h2 v-if="number === 0">Este numero equivale a cero</h2>
      <!-- Expandir la condicion de arriba añadiendo un directivo v-else -->
      <h1 v-else>Este numero no equivale a cero</h1>
      <!-- !!REGLAS: -->
      <!-- v-else y v-else-if, estas dos directivas condicionales tienen que siempre tener un v-if asociado, si no lo tienes te saltara un error en pantalla -->
    </div>
    <hr />
    <div id="conditional-rendering-part-2">
      <!-- Approach uhn poco mas complejo utilizando un v-if adinado dentro del h2 -->
      <h2 v-if="number >= 0">
        <span v-if="number >= 5">Este numero es mas grande que 5</span>
        <span v-else="number <= 5">Este numero es menor o igual que 5</span>
      </h2>
    </div>
    <hr />
    <div id="conditional-rendering-part-3">
      <!-- Trabajando con multiples directivos condicionales :) -->
      <h2 v-if="num === 0">Este numero es cero</h2>
      <h2 v-else-if="num < 0">Este numero es un numero negativo</h2>
      <h2 v-else-if="num > 0 && num >= 10">
        Este numero es un numero positivo mayor o igual a 10
      </h2>
      <h2 v-else>Esto nisiquiera es un numero.... ponete serio....</h2>
    </div>
    <div id="conditional-rendering-part-4">
      <!-- que pasaria si queremos darle visibilidad a mas de 1 elemento mediante nuestras directivas de condicion...  -->

      <!-- soluciones posibles:
      1. añadirle un v-if a cada elemento que queremos condicionar 
      2. wrappear todos los elementos que quiero mostrar dentro un elemento y condicionar ese elemento 
      3. Usar un elemento tipo <template> para evitar inyectar elementos extras dentro del DOM y asi mismo nos desprendemos de mostrar un elemento que capaz nos traiga errores de estilo o de logica.....
      -->

      <!-- Solution  01 -->
      <span>SOLUTION 001</span>
      <h2 v-if="display">Kendrick Lamar</h2>
      <h2 v-if="display">Andre 3000</h2>
      <h2 v-if="display">Slick Rick</h2>

      <!-- Solution 02 -->
      <span>SOLUTION 002</span>
      <div v-if="display">
        <h2>Kendrick Lamar</h2>
        <h2>Andre 3000</h2>
        <h2>Slick Rick</h2>
      </div>

      <!-- Solution 03 -->
      <span>SOLUTION 003</span>
      <template v-if="display">
        <h2>Kendrick Lamar</h2>
        <h2>Andre 3000</h2>
        <h2>Slick Rick</h2>
      </template>
    </div>
    <div id="conditional-rendering-part-5">
      <!-- usando un v-show directivo -->
      <h2 v-show="showElement">Usando un v-show directive</h2>
      <h2 v-if="showElement">Usando un v-if directive</h2>
    </div>
    <!-- -------------------------------------  -->
    <!-- -------------------------------------  -->
    <!-- -------------------------------------  -->
    <!-- -----------Exercises in class----------  -->
    <!-- -------------------------------------  -->
    <!-- -------------------------------------  -->
    <!-- -------------------------------------  -->
    <hr />
    <h1><mark>EXERCISE CLASS</mark></h1>

    <h1>Exercise 1</h1>
    <h2 v-if="ex1 === true">
      I'm showing up beacuse our reactive data is true!
    </h2>
    <h2 v-else>
      I'm the option anytime our reactive data cannot be read as true
    </h2>

    <hr />
    <h1>Exercise 2</h1>
    <p v-if="language === 'HTML'">Today we are learning {{ language }}</p>
    <p v-else-if="language === 'CSS'">Today we are learning {{ language }}</p>
    <p v-else-if="language === 'JS'">Today we are learning {{ language }}</p>
    <p v-else>Today is no class!</p>

    <hr />
    <h1>Exercise 3</h1>
    <div v-if="show">
      <h2>{{ myBio.firstName }}:</h2>
      <p v-if="myBio.age >= 18">I am an adult! :)</p>
      <p v-else>I am still a minor ! :(</p>
      <p v-if="myBio.hasCodedBefore">
        This is not my first time at the javascript rodeo
      </p>
      <p v-else>I am still a newbie to code but I'm learning fast</p>
    </div>
    <div v-else>No BIO to show here</div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
// Ejemplos de conditional rendering part 1 & 2
const number = ref(15);
// Ejemplos de conditional rendering part 3
const num = ref(14);
//Ejemplos de condtional rendering part 4
const display = ref(true);
//Ejemplos de conditional rendering part 5
const showElement = ref(false);

//-------------------------------------------------------------------------------
// CLASS EXCERCISE EXPLANATION ---------------------------------------------------
// Ejercicios Conditional Rendering
// Creamos la estructura básica de un componente de vue en la que vamos a mostrar el resultado de los ejercicios. Recordad importar el componente donde sea necesario para poder ver el avance de vuestros ejercicios.

// Ej.1: Creamos dos <h1> diferentes, uno que diga "I'm showing up beacuse our reactive data is true!" y el otro que diga "I'm the option anytime our reactive data cannot be read as true". Como vemos, los dos dependerán de una variable reactiva en vuestro script y, según si esta es true or false, enseñaréis uno u otro.

const ex1 = ref(false);

// Ej.2: Creamos cuatro <p> tags. Los cuatro se renderizarán condicionalmente mirando a una misma variable que llamaremos "language". Esta variable podrá tener tres valores distintos: "HTML", "CSS" o "JS". En nuestro template deberemos leer dicha variable y enseñar un <p> u otro según su valor. Cada uno de los <p> tags a su vez contendrá el texto "Today we are learing" seguido del valor de la variable que imprimiréis en pantalla usando la moustache syntax. El último <p> tag se encargará de aparecer cuando el valor de "language" no sea ninguno de los tres mencionado anteriormente, y contendrá el texto "Today there's no class!".

const language = ref("CSS");

// Ej.3***: Creamos una variable reactiva que contenga un objeto con vuestro nombre (string), vuestra edad (number) y una key hasCodedBefore (boolean) la cual será true or false dependiendo de si antes del bootcamp habíais picado código o no. Después creamos otra variable reactiva booleánica que podéis llamar show, por ejemplo. Según si show está en true or false, en vuestro template deberíais enseñar o no una pequeña biografía. Esta biografía, a su vez, constará primero de vuestro nombre como título. Después tendrá un <p> que se renderizará de manera condicional. En caso de que vuestra edad sea superior a 18 enseñaremos la frase "I am an adult! :)"; en caso contrario, enseñaremos "I'm still a minor :(". Finalmente, según si hasCodedBefore es true or false también renderizaréis "I am still a newbie to code but I'm learning fast" o "This is not my first time at the javascript rodeo".

const myBio = reactive({
  firstName: "Raphaela",
  age: 34,
  hasCodedBefore: false,
});

const show = ref(false);
</script>

<style scoped>
hr {
  margin: 0.5rem 0;
}
</style>
