<template>
  <div
    class="abcExplorer px-6 py-6 min-w-full gap-8 overflow-auto flex md:flex-row flex-col md:items-center justify-between mt-6"
  >
    <div class="px-1">
      <div class="">
        <h1 class="mainHeading flex md:flex-row flex-col gap-6">
          Transaction #{{ transactionNumber }}
          <p>{{ transactionDate }}</p>
        </h1>

        <p class="paragraph">
          <span class="green">{{ transactionSender }}</span> 
          {{ transactionName }} 
          <span class="green">{{ transactionType }}</span>
        </p>
      </div>
    </div>
    <div class="">
      <a class="btn" :href="explorerLink" target="_blank">View on Explorer</a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    transactionNumber: {
      type: String,
      required: true
    },
    transactionDate: {
      type: String,
      required: true
    },
    transactionSender: {
      type: String,
      required: true
    },
    transactionName: {
      type: String,
      required: true
    },
    transactionType: {
      type: String,
      required: true
    },
    explorerLink: {
      type: String,
      required: true
    }
  }
}

</script>
<style scoped>
.abcExplorer {
  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 10px 20px 0px rgba(18, 50, 77, 0.15);
}
.mainHeading {
  color: #000;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
p {
  color: #000;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px; /* 200% */
}
.paragraph {
  color: #000;
  font-size: 12px;
  font-style: normal;
  margin-top: 6px;
  font-weight: 400;
  line-height: 24px;
}
.green {
  color: #7bd759;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px; /* 200% */
}

.btn {
  background: var(--Primary, linear-gradient(180deg, #0298b1 0%, #7bd759 100%));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}
</style>
