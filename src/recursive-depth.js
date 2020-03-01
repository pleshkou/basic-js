module.exports = class DepthCalculator {
    calculateDepth(arr) {
        let i = 1;
        if (arr.every(a => !Array.isArray(a)) ) {
            return 1;
        }
        
        for (let n of arr) {
            if (!Array.isArray(n)) continue;
            i = Math.max(i, (this.calculateDepth(n) + 1));
        }
        return i;
    }
}   


// const depthCalc = new DepthCalculator();
// const { calculateDepth } = depthCalc;
