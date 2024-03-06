document.addEventListener('DOMContentLoaded', function () {
    const interval = 2000;
    const colors = ['red', 'yellow', 'green'];
    let index = 0;

    function changeColor() {
        const currentColor = colors[index];
        const previousColor = colors[(index === 0) ? colors.length - 1 : index - 1];

        document.getElementById(currentColor).style.opacity = 1;
        document.getElementById(previousColor).style.opacity = 0.3;

        index = (index + 1) % colors.length;
    }

    setInterval(changeColor, interval);
});
