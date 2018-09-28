let store = {
    year: 2015
}

function timeline () {
    
    let container = document.querySelector('#container__timeline'),
        ul = document.querySelector('#container__timeline__ul')
    
    let yearForText = store.year

    for (let i = 0; i <= 20; i++) {

        // Create element html
        let liNode = document.createElement('li');
            liNode.setAttribute('class', 'container__timeline__ul__li')

        let li = document.querySelectorAll('.container__timeline__ul__li')
        ul.appendChild(liNode)
        //ul.insertBefore(liNode, li.firstChild)

        let spanText = document.createElement('span');
            spanText.setAttribute('class', 'container__timeline__li__span')
        liNode.appendChild(spanText)

        let spanYear = document.createElement('span');
            spanYear.setAttribute('class', 'container__timeline__li__year')
        liNode.appendChild(spanYear)

        spanYear.innerHTML = yearForText--;        
    }

    let li = document.querySelectorAll('.container__timeline__ul__li')

    function changeActiveClass() {
        // Init active
        for (let i = 0; i < li.length; i++) {

            li[i].classList.remove('active')

            if (li[i].lastElementChild.innerHTML == store.year) {
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

            store.year = e.target.lastElementChild.innerHTML

        }, false)
    }

    window.addEventListener('wheel', (e) => {
        
        let firstyearOfList = document.querySelector('.container__timeline__ul__li:first-child').lastElementChild.innerHTML,
            lastYearOfList = document.querySelector('.container__timeline__ul__li:last-child').lastElementChild.innerHTML

        

            /*
        if (store.year === firstyearOfList--) {
            
            store.year = firstyearOfList--
            //return false

        } else if (store.year === lastYearOfList++) {
            
            store.year = lastYearOfList++
            //return false
        }
        */

        if (Math.sign(e.wheelDeltaY) == 1) {
            
            store.year++
        
        } else {
            
            store.year--
        }

        changeActiveClass()
    })
}
timeline()