let loading = false;
const httpList = []
function Axios(a) {
    loading = true;
    let pro = new Promise(resolve => {
        setTimeout(() => {
            httpList.forEach((item, index) => {
                if (Object.keys(item)[0] == a) {
                    httpList.splice(index, 1);
                }
            });
            console.log("当前还剩余没返回的http请求===", httpList.length);
            if (httpList.length == 0) {
                loading = false;
            }
            resolve(a);
        }, (Math.random() * 5000) + 1000);
    })

    httpList.push({
        [a]: pro
    })
    return pro;
}

console.log(loading);
Array.from(new Array(10)).forEach((o, i) => {
    let j = `a${i}`;
    Axios(j).then(o => {
        console.log("loading当前的状态=====", loading);
        console.log(o);
    });
})
