function makePerson(salary) {
  return {
    salary,
    bumpPay: function() {
      // Give a 15% raise here:
      this.salary = this.salary * 1.15;
    }
  };
}

const kira = makePerson(5);
kira.bumpPay();
