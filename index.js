function navHandler(event) {
    const section = event.target.innerText;
    let sectionDiv;

    if (section === "About me") {
        sectionDiv = document.getElementById("about-me");
    } else if (section === "Skills") {
        sectionDiv = document.getElementById("skills");
    }

    if (sectionDiv) {
        const yOffset = -70; // header height
        const y = sectionDiv.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
    }
}

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

function toggleHeaderClass() {
    const header = document.getElementById('main-header');
    if (window.scrollY === 0) {
        header.classList.add('header-top');
    } else {
        header.classList.remove('header-top');
    }
}

window.addEventListener('scroll', () => {
    toggleHeaderClass();
});

window.addEventListener('load', () => {
    toggleHeaderClass();
});


