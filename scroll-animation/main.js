let imagesItems = [...document.querySelectorAll(".img-wrap")]
let imagesTitle = [...document.querySelectorAll(".section-title")]
let titleMessage = document.querySelector(".title")

let setItemActive = (entries) => {
  entries.map( entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("active")
    }else{
      entry.target.classList.remove("active")
    }
  })
}

let options = {
  rootMargin: "0px",
  threshold: 0.25
};

//ブラウザ上でオブジェクトがどこにあるか監視している。特定の位置に来たら関数を呼ぶ
//IntersectionObserverはデフォルトであるのでライブラリを入れなくても私用できる
//初期値で2つ引数を渡す必要がある。setItemActiveはアクティブになった要素に実行したい関数
let observer = new IntersectionObserver(setItemActive, options)

//titleMessageの監視を指定
observer.observe(titleMessage)

//imageTitleの監視を指定
imagesTitle.map((title, index) => {
  index % 2 == 0 ? (title.style.left = "45%") : (title.style.left = "15%")
  observer.observe(title)
})

//imageのurlと位置、監視を指定
imagesItems.map((item, index) => {
  item.children[0].style.backgroundImage = `url(./images/${index + 1}.jpg)`
  index % 2 == 0 ? (item.style.left = "55%") : (item.style.left = "5%")
  observer.observe(item)
})
