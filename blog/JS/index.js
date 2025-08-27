const btn = document.getElementById('themeToggle')
window.addEventListener('scroll',() =>{
    if(window.scrollY > 300) {
        btn.classList.add('show')
    }else {
        btn.classList.remove('show')
    }
})
// 暗黑模式
btn.addEventListener('click',() => {
    const root = document.documentElement;
    root.dataset.theme = root.dataset.theme === 'dark'? '':'dark'
    console.log(root.dataset.theme);
    
})