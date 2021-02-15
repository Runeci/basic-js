const CustomError = require("../extensions/custom-error");

const chainMaker = {
    resultArray: [],
    getLength() {
        return this.resultArray.length;
    },
    addLink(value) {

        this.resultArray.push(value)

        return this
    },

    removeLink(position) {
        if (position > 0) {
            this.resultArray.splice(position - 1, 1)
        } else {
            this.resultArray = [];
            throw new Error();
        }
        return this;
    },

    reverseChain() {
        this.resultArray.reverse()
        return this
    },

    finishChain() {
        let result = this.resultArray.reduce(function (sum, current, index, arr) {
            const isFirst = index === 0;
            const isLast = index === (arr || []).length - 1;
            let currentResult;
            if (arr.length === 1) {
                currentResult = `( ${current} )`;
            } else if (isLast) {
                currentResult = `~( ${current} )`;
            } else if (isFirst) {
                currentResult = `( ${current} )~`;
            } else {
                currentResult = `~( ${current} )~`;
            }

            sum += currentResult;
            return sum;
        }, '');

        this.resultArray = [];
        return result;
    }
};

module.exports = chainMaker;
