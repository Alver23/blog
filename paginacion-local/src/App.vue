<template>
<div>
    <b-list-group>
      <b-list-group-item v-for="item in paginador(items)" v-bind:key="item.id">
       {{item.nombre}}
      </b-list-group-item>
    </b-list-group>
    <b-pagination align="center" :total-rows="this.items.length " v-model="paginaActual " :per-page="itemsPorPagina" >
    </b-pagination>
</div>
</template>

<script>
import bListGroup from "bootstrap-vue/es/components/list-group/list-group";
import bListGroupItem from "bootstrap-vue/es/components/list-group/list-group-item";
import bPagination from "bootstrap-vue/es/components/pagination/pagination";

export default {
  components: { bListGroup, bListGroupItem, bPagination },
  name: "app",
  data() {
    return {
      items: [],
      paginaActual: 1,
      itemsPorPagina: 5
    };
  },
  methods: {
    paginador(items) {
      const itemInicio = (this.paginaActual - 1) * this.itemsPorPagina;
      const itemFinal =
        itemInicio + this.itemsPorPagina > items.length
          ? items.length
          : itemInicio + this.itemsPorPagina;
      return items.slice(itemInicio, itemFinal);
    }
  },

  created() {
    for (let i = 0; i < 28; i++)
      this.items.push({
        id: i + 1,
        nombre: `item ${i + 1}`
      });
  }
};
</script>

<style>

</style>
