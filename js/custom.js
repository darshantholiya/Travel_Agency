const tab = document.querySelectorAll(".tab");
const tabContent = document.querySelectorAll(".tab-content");

for (let i = 0; i < tab.length; i++) {
	tab[i].onclick = tabActive;
}

function tabActive() {
	for (let i = 0; i < tab.length; i++) {
		this.classList.add("tab-active");

		if (tab[i] !== this) {
			tab[i].classList.remove("tab-active");
		}
	}

	for (let i = 0; i < tabContent.length; i++) {
		tabContent[i].classList.add("tab-content-active");

		if (tab[i] !== this) {
			tabContent[i].classList.remove("tab-content-active");
		}
	}
}

mapboxgl.accessToken = 'pk.eyJ1Ijoid29ybGRvZnRyYXZlbCIsImEiOiJja3dhcTJvOTgxZzY0MnZwYWF0YXNodGYzIn0.t_WMlurJzCnTWbBNjaeY7g';
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [73.952330,18.474952],
        zoom: 12
    });

    // Create a default Marker and add it to the map.
    const marker1 = new mapboxgl.Marker()
        .setLngLat([73.952330,18.474952])
        .addTo(map);

