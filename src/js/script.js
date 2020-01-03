$(document).ready(function () {
    $('.carousel__inner').slick({
        speed: 1200,
        variableWidth: true,
        prevArrow :`<button type="button" class="slick-prev" ><img src ="icons/left.svg"></button>`,
        nextArrow: `<button type="button" class="slick-next" ><img src ="icons/right.svg"></button>`,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                  dots: true,
                  arrows :false
                }
            }
        ]
    });

    let tab = document.querySelector('.catalog__tabs');
    let tabs = document.querySelectorAll('.catalog__tab')
    let catalogs = document.querySelectorAll('.catalog__content')

    tab.addEventListener('click',(e)=>{
        togleActive(e);
    })
    function togleActive (e){
        tabs.forEach((item,i)=>{
            if(e.target.parentElement == item){
                item.classList.add('catalog__tab_active')
                catalogs[i].classList.add('catalog__content_active')
            }
            else{
                item.classList.remove('catalog__tab_active')
                catalogs[i].classList.remove('catalog__content_active')
            }
            
        })
    }

    let wrappers = document.querySelectorAll(`.catalog-item__wrapper`)
    wrappers.forEach((item)=>{
        item.addEventListener(`click`,(evt)=>{
            evt.preventDefault()
            if(evt.target = HTMLAnchorElement){
                showList(evt)
            }
        })
    })
    function showList(evt){
        evt.currentTarget.children[0].classList.toggle('catalog-item__content_active')
        evt.currentTarget.children[1].classList.toggle('catalog-item__list_active')
    }
});


