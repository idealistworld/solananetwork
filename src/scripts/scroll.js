function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

const scrollFunction = function () {
    const one = document.getElementById("one-element");
    const two = document.getElementById("two-element");
    const three = document.getElementById("three-element");
    if(isInViewport(one)){
        document.getElementById("one-nav").style.color = "#00E1B8";
        document.getElementById("two-nav").style.color = "#d4d4d4";
        document.getElementById("three-nav").style.color = "#d4d4d4";
    }
    else if(isInViewport(two)){
        document.getElementById("one-nav").style.color = "#d4d4d4";
        document.getElementById("two-nav").style.color = "#00E1B8";
        document.getElementById("three-nav").style.color = "#d4d4d4";
    }
    else if(isInViewport(three)){
        document.getElementById("one-nav").style.color = "#d4d4d4";
        document.getElementById("two-nav").style.color = "#d4d4d4";
        document.getElementById("three-nav").style.color = "#00E1B8";
    }
}

export default scrollFunction