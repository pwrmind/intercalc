var vm = new Vue({
    el: '#interestСalculator',
    data: {
      percentPerAnnum: 6.5,
      amountOfDeposit: 100000
    },
    computed: {
      percentPerMonth: function() {
        return Math.round(this.percentPerAnnum / 12 * 100) / 100;
      },
      profitPerMonth: function() {
        if (isNaN(this.percentPerAnnum) || isNaN(this.amountOfDeposit))
          return 0;
        return Math.round(((this.amountOfDeposit * this.percentPerAnnum * 365)/(365*100)) / 12);
      },
      profitPerYear: function () {
        if (isNaN(this.percentPerAnnum) || isNaN(this.amountOfDeposit))
          return 0;
        return (this.amountOfDeposit * this.percentPerAnnum * 365)/(365*100);
      }
    }
  });