const chainMaker = {
  result: [],
  getLength() {
      return this.result.length;
  },
  addLink(value) {
      if (value === undefined) {
          this.result.push('( )');
      } else {
          this.result.push(`( ${value} )`);
      }
      return this;
  },
  removeLink(position) {
    if (Number.isInteger(position) && (position < this.getLength()) && (position > 0))  {
      this.result.splice(position-1, 1);
    } else {
      this.result = [];
      throw new Error;
    }
    return this;
  },
  reverseChain() {
      this.result.reverse();
      return this;
  },
  finishChain() {
    let out = this.result.slice();
    this.result = [];
    return (out.join('~~'));
  }
};

module.exports = chainMaker;
