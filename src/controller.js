(function exportController() {
    class Controller {
    constructor(ship) {
        this.ship = ship;
        this.initialiseSea();

        document.querySelector('#sailbutton').addEventListener('click', () => {
            this.setSail();
        });
        
    }

    setSail() {
        const ship = this.ship;
        const currentPortIndex = ship.itinerary.ports.indexOf(ship.currentPort);
        const nextPortIndex = currentPortIndex + 1;
        const nextPortElement = document.querySelector(`[data-port-index= '${nextPortIndex}']`)

        const shipElement = document.querySelector('#ship');
        const sailInterval = setInterval(() => {
            const shipLeft = parseInt(shipElement.style.left, 10);
            if (shipLeft === (nextPortElement.offsetLeft - 32)) {
                ship.setSail();
                ship.doc();
                clearInterval(sailInterval)
            }
            shipElement.style.left = `${shipLeft +1}px` ;
    
        }, 20);

        const nextPortElement = document.querySelector(`[data-port-index='${nextPortIndex}']`);

if (!nextPortElement) {
  return alert('End of the line!');
}
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

    renderShip() {
        const ship = this.ship;
        const shipPortIndex = ship.itinerary.ports.indexOf(ship.currentPort);
        const portElement = document.querySelector(`[data-port-index='${shipPortIndex}']`);
        const shipElement = document.querySelector('#ship');
        shipElement.style.top = `${portElement.offsetTop}px`;
        shipElement.style.left = `${portElement.offsetLeft}px`;
        shipElement.style.top = `${portElement.offsetTop + 32}px`;
        shipElement.style.left = `${portElement.offsetLeft - 32}px`;

    }
}


if (typeof module !== 'undefined' && module.exports) {
    module.exports = Controller;
} else {
    window.Controller = Controller;
}
})();
    