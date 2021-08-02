const inp = document.querySelector("input");
let wrapper = document.querySelector(".wrapper");
let btn = document.querySelector(".sorted-btn");
let count = 0;

const store = createStore();
window.store = store;

inp.addEventListener("input", function(e) {
    if (e.target.value) {
        count = +e.target.value;
    } else {
        count = 0;
        wrapper.innerHTML = "";
    }
    setCircles(count);
    wrapper = renderCircles(wrapper, store.getState().circles);
});

btn.addEventListener("click", () => {
    wrapper.innerHTML = "";
    const newCircles = store.getters.sortColor(store.getState().circles);
    
    setCircles(count);

    store.mutations.setCircles(newCircles);
    wrapper = renderCircles(wrapper, newCircles);
});

function setCircles(num) {
    let circles = [];

    for (let i = 0; i < num; i++) {
        circles.push(
            new Circle("div", getRandomColor(store.getState().colors), "circle")
        );
    }

    store.mutations.setCircles(circles);
}
