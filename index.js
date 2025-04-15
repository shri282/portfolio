
const getReadmore = function () {
    let readMoreFlag = false;

    return function(event) {
        const readmore = document.getElementById("readmore-summary");
        if(!readmore) return;

        readMoreFlag = !readMoreFlag;
        readmore.style.display = readMoreFlag ? "block" : "none";
        event.target.innerText = readMoreFlag ? "READ LESS" : "READ MORE";
    }
}

const readMore = getReadmore();

window.addEventListener('scroll', () => {
    const header = document.getElementById('main-header');
    if (window.scrollY === 0) {
        header.classList.add('header-top');
    } else {
        header.classList.remove('header-top');
    }
});