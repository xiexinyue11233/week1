const input = document.getElementById('ipt')
const list = document.getElementById('content')
const form = document.getElementById('todoform')
// getItem 永远返回字符串 获取 本地仓库里面名为todoData键的值
// 将获取的值给 todoArr存储，当本地仓库里面没有这个键，就赋值一个空数组给todoArr
// todoArr是真正保存当前数组 获取的是本地的数据
let todoArr =JSON.parse(localStorage.getItem('todoData')) || []

// 渲染函数
function render() {
    // 渲染之前先清空内容
    list.innerHTML = ''
    list.innerHTML = todoArr.map((ele,index) => {
        return `
        <li data-id="${index}">
        <span>${ele.text}</span>
        <div class="operate">
        <input type="checkbox" ${ele.checked ? 'checked':''}>
        <button class="editor">编辑</button>
        <button class="del">删除</button>
        </div>
      </li>
        `
    }).join('')
    // 刷新后获取的是todoData的值，就是初始化的值，而不是真正的从本地里面显示数据
    // localStorage.setItem('todoData',JSON.stringify(todoData))
    localStorage.setItem('todoData',JSON.stringify(todoArr))
}
// 显示页面内容
render()

// 新增
document.querySelector('#todoform').addEventListener('submit',e => {
    e.preventDefault();//阻止默认跳转
    let txt =input.value
    if(txt){
    // 将新增的数据 添加到 存放数据 的数组里面
    
    // 这里是为了页面同步
    todoArr.push({text:txt,checked:false})
    // localStorage.setItem('todoData',JSON.stringify(todoData))  刷新后获取的是todoData的值，就是初始化的值，而不是真正的从本地里面显示数据 
    localStorage.setItem('todoData',JSON.stringify(todoArr))
    e.target.reset()
    render()
    }else {
        alert('请输入待办事项')
    }
})

// 通过事件委托做删除 编辑 在父级上做监听
    const lis = document.getElementById('content')
        lis.addEventListener("click",e => {
        if(e.target.classList.contains('del')){
            // console.log('我点击的是del');
            //所点击对象的最接近的祖先标签是li的,得到这个li的id号，找到对应索引
           const index =  e.target.closest('li').dataset.id 
           todoArr.splice(index,1)
           localStorage.setItem('todoData',JSON.stringify(todoArr))
           render()
        }
        if(e.target.classList.contains('editor')){
            // console.log("编辑"); 测试是否点击到编辑
            const index =  e.target.closest('li').dataset.id 
            todoArr[index].checked = true
            const editor = prompt('请输入更改')
            todoArr[index].text = editor
            
            render()  
        }
    })

