function createStore() {
    const state = {
        circles: [],
        colors: [
            "rgb(204, 204, 0)", "rgb(153, 102, 0)", "rgb(102, 0, 0)", "rgb(255, 102, 0)", "rgb(153, 0, 0)", "rgb(255, 0, 102)", "rgb(102, 0, 51)",
            "rgb(255, 102, 255)", "rgb(153, 0, 153)", "rgb(51, 0, 153)", "rgb(51, 102, 255)", "rgb(0, 51, 51)", "rgb(0, 102, 0)", "rgb(102, 102, 102)"
        ],
    }

    const getters = {
        sortColor(circles) {
            return circles.sort(function(circle1, circle2) {
                const color1 = splitRgb(circle1.color);
                const color2 = splitRgb(circle2.color);
                if (+color1 < +color2) return 1;
                else if (+color1 > +color2) return -1;
                else return 0;
            });
        },
    }

    const mutations = {
        setCircles(circles) {
            state.circles = circles;
        }
    }

    return {
        getState: () => state,
        getters,
        mutations,
    }
}
