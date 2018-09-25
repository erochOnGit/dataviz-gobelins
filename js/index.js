// Year selected
let yearSelected = 2018

function timeline () {
    
    let container = document.querySelector('#container__timeline'),
        ul = document.querySelector('#container__timeline__ul'),
        li = document.querySelectorAll('.container__timeline__ul__li')

    function changeActiveClass() {
        // Init active
        for (let i = 0; i < li.length; i++) {

            li[i].classList.remove('active')

            if (li[i].lastElementChild.innerHTML == yearSelected) {
                li[i].className += " active"
            }
        }
    }

    changeActiveClass()
    

    // Set active in click
    for (let i = 0; i < li.length; i++) {

        li[i].addEventListener('click', (e) => {
            
            for (let o = 0; o < li.length; o++) {
                li[o].classList.remove('active')
            }

            e.target.className += " active"

        }, false)
    }

    window.addEventListener('wheel', (e) => {

        let firstyearOfList = document.querySelector('.container__timeline__ul__li:first-child').lastElementChild.innerHTML,
            lastYearOfList = document.querySelector('.container__timeline__ul__li:last-child').lastElementChild.innerHTML

        if (yearSelected > firstyearOfList++) {
            yearSelected = firstyearOfList
        } else if (yearSelected < lastYearOfList--) {
            yearSelected = lastYearOfList
        }

        if (Math.sign(e.wheelDeltaY) == 1) {
            yearSelected++
        } else {
            yearSelected--
        }

        changeActiveClass()
    })
}

timeline()