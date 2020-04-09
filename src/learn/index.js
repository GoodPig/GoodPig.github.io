/**
 * 模拟bind
 */
Function.prototype.myBind = function () {
    let args = Array.from(arguments), that = this;
    return function () {
        that.apply(args[0]);
    }
}

var a = {
    a: "hello a",
    fun: function () {
        console.log(this.a);
    }
}

var b = {
    a: "hello b"
}


/**
 * 模拟call
 */

Function.prototype.mycall = function () {
    let args = Array.from(arguments),
        argment = args[0];
    argment.fn = this;
    argment.fn(args.join(','));
    delete argment.fn
}
a.fun.mycall(b)