<template>
  <div
    v-if="invoice.amount > 0 || invoice.network === 'lightning'"
    class="mb-2"
  >
    <div v-if="invoice.amount > 0" class="d-flex flex-wrap justify-center">
      <div class="display-1 mr-1">
        <span>{{ total }}</span>
        <v-btn
          class="black--text toggle"
          :color="color(ticker)"
          @click="toggleUnit"
          >{{ ticker }}</v-btn
        >
        <span class="print body-1">{{ ticker }}</span>
      </div>
      <div v-if="isBtc" class="yellow--text display-1">
        <span>{{ invoice.fiatAmount }}</span>
        <span v-if="invoice.tip"
          >&nbsp;<span class="headline">+{{ invoice.fiatTip }}</span></span
        >
        <v-btn
          class="black--text toggle"
          color="yellow"
          @click="shiftCurrency"
          >{{ invoice.currency }}</v-btn
        >
        <span class="print body-1">{{ invoice.currency }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { call, get, sync } from 'vuex-pathify';

export default {
  computed: {
    loading: get('loading'),
    networks() {
      return this.nodes.map(n => ({
        text: n[0].toUpperCase() + n.slice(1),
        value: n,
      }));
    },
    nodes: get('nodes'),
    text() {
      return this.invoice.address || this.invoice.text;
    },
    ticker() {
      return this.user.unit === 'BTC' ? this.user.account.ticker : 'SAT';
    },
    total() {
      return this.$format(this.invoice.amount + this.invoice.tip);
    },
    invoice: sync('invoice'),
    user: get('user'),
  },

  methods: {
    isBtc() {
      return this.user.account.ticker === 'BTC';
    },
    color(c) {
      return ['BTC', 'SAT'].includes(c)
        ? 'white'
        : this.user.currencies.includes(c)
        ? '#ffeb3b'
        : '#0ae';
    },
    clearInvoice: call('clearInvoice'),
    setCurrency: call('setCurrency'),

    updateAmount(amount, fiatAmount, currency) {
      this.setCurrency(currency);
      this.$nextTick(() => {
        this.invoice.amount = amount;
        this.invoice.fiatAmount = fiatAmount;
      });
    },
    shiftCurrency: call('shiftCurrency'),
    toggleUnit: call('toggleUnit'),
  },
};
</script>

<style lang="stylus" scoped>
.toggle
  margin auto 0.25rem !important
  margin-top -0.3rem !important
  height 1.7rem !important
</style>
