<template>
  <div v-if="asks.length || bids.length">
    <proposal v-if="proposal && swapping" :swapping="swapping" :proposal="proposal" @close="swapping = false" />
    <v-card class="mb-1 pa-2 pb-0">
      <v-card-text class="white--text flex-grow-1 text-right py-0">
        <v-container class="pa-0">
          <v-row class="font-weight-bold">
            <span style="position: absolute">Swap</span>
            <v-btn icon style="visibility: hidden; height: 0;">
              <v-icon color="primary">$atom</v-icon></v-btn
            >
            <v-col @click="priceToggle" style="cursor: pointer">Price</v-col>
            <v-col>Amount</v-col>
            <v-col>Total</v-col>
          </v-row>
          <v-row v-for="p in asks" :key="p.id" class="hover">
            <v-btn icon @click="swap(p)"><v-icon color="primary">$atom</v-icon></v-btn>
            <v-col class="my-auto">
              {{ (inverse ? 1 / p.rate : p.rate).toFixed(8) }}
            </v-col>
            <v-col class="my-auto">{{ format(p.a1, p.v1) }}</v-col>
            <v-col class="my-auto ml-1" style="position: relative">
              <div class="ask bg" :style="bg(p, asks)" />
              {{ format(p.a1, p.total) }}
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
    </v-card>
    <v-card class="mb-1 pa-2 pt-0">
      <v-card-text class="white--text flex-grow-1 text-right py-0">
        <v-container class="pa-0">
          <v-row v-for="p in bids" :key="p.id" class="hover">
            <v-btn icon @click="swap(p)"><v-icon color="primary">$atom</v-icon></v-btn>
            <v-col class="my-auto">
              {{ (inverse ? p.rate : 1 / p.rate).toFixed(8) }}
            </v-col>
            <v-col class="my-auto">{{ format(p.a2, p.v2) }}</v-col>
            <v-col class="my-auto ml-1" style="position: relative">
              <div class="bid bg" :style="bg(p, bids)" />
              {{ format(p.a2, p.total) }}
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import { get } from 'vuex-pathify';
import Proposal from './Proposal';

export default {
  props: {
    a1: { type: String },
    a2: { type: String },
  },
  components: { Proposal },
  data: () => ({
    proposal: null,
    swapping: false,
    inverse: false,
  }),
  computed: {
    assets: get('assets'),
    proposals: get('proposals'),
    bids() {
      return this.proposals
        .filter(p => !p.accepted && p.a1 === this.a2 && p.a2 === this.a1)
        .sort((a, b) =>
          a.rate === b.rate ? a.id - b.id : a.rate > b.rate ? 1 : -1
        )
        .reduce(
          (a, x, i) => [
            ...a,
            { ...x, total: x.v2 + (a[i - 1] ? a[i - 1].total : 0) },
          ],
          []
        );
    },
    asks() {
      let asks = [
        ...this.proposals
          .filter(p => !p.accepted && p.a1 === this.a1 && p.a2 === this.a2)
          .sort((a, b) =>
            a.rate === b.rate ? a.id - b.id : a.rate > b.rate ? 1 : -1
          )
          .reduce(
            (a, x, i) => [
              ...a,
              { ...x, total: x.v1 + (a[i - 1] ? a[i - 1].total : 0) },
            ],
            []
          ),
      ].reverse();

      return asks;
    },
  },
  methods: {
    swap(p) {
      this.proposal = p;
      this.swapping = true;
    },
    priceToggle() {
      this.inverse = !this.inverse;
    },
    bg(p, arr) {
      let total = Math.max(arr[0].total, arr[arr.length - 1].total);
      return { width: `${(p.total / total) * 100}%` };
    },
    format(asset, value) {
      let precision = 0,
        ticker;
      let obj = this.assets[asset];
      if (obj) ({ precision, ticker } = obj);
      if (value)
        return parseFloat(this.$format(value, precision)).toFixed(precision);
      if (ticker) return ticker;
      return asset.substr(0, 3);
    },
  },
};
</script>

<style lang="stylus">
.bg
  position absolute
  right -4px
  top -4px
  height 30px
  opacity 0.4

.ask
  background #b71c1c

.bid
  background #4CAF50

.col
  padding 0

.hover
  &:hover
    background #333
</style>
