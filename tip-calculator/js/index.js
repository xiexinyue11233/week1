// 第一种方法:
// const bill = document.getElementById('bill')
// const tip = document.getElementById('tip')
// const btn = document.querySelector('button')


// function getTotal() {
//   if(bill.value==='' || tip.value === ''){
//     alert('请输入数值')
//   }
//     return bill.value*(tip.value / 100)
// }
// btn.addEventListener('click',() => {
//     const tex =getTotal().toFixed(2)
//     document.getElementById('result').innerHTML = `小费：¥${tex}`
// })

let totalTip = 0
function caculate(bill,tip) {
    totalTip = bill*(tip / 100)
    return totalTip.toFixed(2) //返回的是字符串  .toFixed(2)，这个方法固定会返回字符串。
}
function getValue() {
    const bill = Number(document.getElementById('bill').value)
    const tip = Number(document.getElementById('tip').value)  //输入框获取是字符串,需要转换成数值型
    if (bill === '' || tip === '') {
        alert('请输入内容')
    }
    const effect = caculate(bill,tip)
    document.getElementById('result').textContent = `小费：¥${effect} 总计：¥${+effect + bill}`
}