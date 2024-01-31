export function createPath(title) {
    return title.toLowerCase().split(" ").join("-");
}

export function setInnerVh() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--innerVh", `${vh}px`);
}