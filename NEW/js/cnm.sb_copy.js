// 返回桌面的时候显示
(function() {
    var callbacks = [];
    var timeLimit = 50;
    var open = false;

    setInterval(loop, 1);

    return {
        addListener: function(fn) {
            callbacks.push(fn);
        },
        cancelListener: function(fn) {
            callbacks = callbacks.filter(function(v) {
                return v !== fn;
            });
        }
    };
})();
