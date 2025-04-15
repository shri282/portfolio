
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