<script setup>
import { ref } from 'vue'

let rows = ref(10)
let cols = ref(10)
let name = ref(null)
let shouldCalculate = ref(false)
let toHighlight = ref(null)
</script>

<template>
  <h1>Multiplication Table</h1>
  <div>
    <div class="inputs">
      <label id="name">
        <span>Name: </span>
        <input id="name" v-model="name" />
      </label>

      <label id="row">
        <span>Rows: </span>
        <input id="rows" type="number" v-model.number="rows" />
      </label>

      <label id="cols">
        <span>Columns: </span>
        <input id="cols" type="number" v-model.number="cols" />
      </label>

      <label id="shouldCalculate">
        <span>Do you wanna see the calculated values?</span>
        <input type="checkbox" id="shouldCalculate" v-model="shouldCalculate">
      </label>

      <label>
        <span>Which row/col to highlight?</span>
        <input type="number" id="highlight" v-model="toHighlight"/>
      </label>

      <p>Hi there {{ name }}, let's build our table:</p>

      <p>You want {{ rows }} rows</p>
      <p>You want {{ cols }} cols</p>

      <p>Should we calculate? {{shouldCalculate}}</p>


      <table>
        <tr v-for="row in rows" :key="row" :class="{ 'highlighted' : row === toHighlight}">
          <td v-for="col in cols" :key="col" :class="{'highlighted' : col === toHighlight}">
            <template v-if="shouldCalculate">
              {{ row }} * {{ col }}
            </template>

            <template v-else>
              {{ row * col}}
            </template>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<style scoped>
h1 {
  text-align: center;
}
div.inputs {
  max-width: 30%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0 auto;

  label {
    padding: 1em;
    border: 1px solid black;
    display: flex;
    gap: 15px;
  }

  table {
    border: 1px solid black;
    box-shadow: 1px 1px 1px gray;
    background-color: white;
    border-collapse: collapse;


    tr, td{
      text-align: center;

      &.highlighted {
        background-color: pink;
      }

    }
  }
}
</style>
