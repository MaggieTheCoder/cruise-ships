(function exportController() {
    class Controller {
    constructor() {
        this.initialiseSea();
    }
    initialiseSea() {
        window.setInterval(() => {
        const backgrounds = [
                './images/water0.png',
                './images/water1.png',
            ];
        let backgroundIndex = 0;
        document.querySelector('#viewport').style.backgroundImage = `url('${backgrounds[backgroundIndex % backgrounds.length]}')`;
        backgroundIndex += 1;

        }, 1000);
    }

    renderPorts(ports) {
        const portsElement = document.querySelector('#ports');
        portsElement.style.width = '0px';

        ports.forEach((port, index) => {
            const newPortElement = document.createElement('div');
            newPortElement.className = 'port';
            newPortElement.dataset.portName = port.name;
            newPortElement.dataset.portIndex = index;
            portsElement.appendChild(newPortElement);
            const portElementWidth = parseInt(portsElement.style.width, 10);
            portsElement.style.width = `${portElementWidth + 256}px`;
        })

    }
}


if (typeof module !== 'undefined' && module.exports) {
    module.exports = Controller;
} else {
    window.Controller = Controller;
}
})();
    