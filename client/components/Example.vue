<template>
  <div id="payment-element" />
</template>

<script>
import { loadStripe } from "@stripe/stripe-js";

export default {
  name: "Card",
  data() {
    return {
      stripe: null,
      card: null,
      elements: null,
    };
  },
  mounted() {
    this.loadStripeElements();
  },
  methods: {
    async loadStripeElements() {
      const { clientSecret, error: backendError } = await fetch(
        "/api/create-payment-intent"
      ).then((res) => res.json());

      this.stripe = await loadStripe(this.$config.stripePublishableKey);
      this.elements = this.stripe.elements(process.env.STRIPE_API_PRIVATE_KEY);
      const paymentElement = this.elements.create("payment");
      paymentElement.mount("#payment-element");
    },
  },
};
</script>
