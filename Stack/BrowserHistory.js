//https://leetcode.com/problems/design-browser-history/description/

//---------------------------------------------------------------------

/**
 * @param {string} homepage
 */
var BrowserHistory = function(homepage) {
    this.backStack = [];
    this.forwardStack = [];

    this.backStack.push(homepage);
};

/** 
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function(url) {
    this.backStack.push(url);
    this.forwardStack = [];
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function(steps) {
    for(let i = 0; i < steps; i++){
        if(this.backStack.length > 1){
           let currentPage = this.backStack.pop();
           this.forwardStack.push(currentPage);
        }
    }
    return this.backStack[this.backStack.length-1];
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function(steps) {
    for(let i = 0; i < steps; i++){
        if(this.forwardStack.length > 0){
            let nextPage = this.forwardStack.pop();
            this.backStack.push(nextPage);
        }
    }
    return this.backStack[this.backStack.length-1];
};

/** 
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */