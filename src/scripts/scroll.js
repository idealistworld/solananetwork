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
        document.getElementById("two-nav").style.color = "white";
        document.getElementById("three-nav").style.color = "white";
        document.getElementById("one-nav").style.textDecoration = "underline";
        document.getElementById("two-nav").style.textDecoration = "none";
        document.getElementById("three-nav").style.textDecoration = "none";

    }
    else if(isInViewport(two)){
        document.getElementById("one-nav").style.color = "white";
        document.getElementById("two-nav").style.color = "#00E1B8";
        document.getElementById("three-nav").style.color = "white";
        document.getElementById("one-nav").style.textDecoration = "none";
        document.getElementById("two-nav").style.textDecoration = "underline";
        document.getElementById("three-nav").style.textDecoration = "none";
    }
    else if(isInViewport(three)){
        document.getElementById("one-nav").style.color = "white";
        document.getElementById("two-nav").style.color = "white";
        document.getElementById("three-nav").style.color = "#00E1B8";
        document.getElementById("one-nav").style.textDecoration = "none";
        document.getElementById("two-nav").style.textDecoration = "none";
        document.getElementById("three-nav").style.textDecoration = "underline";
    }
}

export default scrollFunction