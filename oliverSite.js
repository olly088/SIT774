

const holidayPackages = {
    "holidayPackages" : [
    {"country" : "Morocco", "image" : "/static/images/africa/morocco/morocco_sum.avif", "cost" : "100", "length" : "14", "date" : "05-Jul", "link" : "africa/morocco",
    "description" : "At the crossroads of Europe and Africa, surrounded by Mediterranean waters and opening onto the vastness of the Atlantic ocean, Morocco is a wonderland for nature lovers. It is the 'land of the distant sunset', a destination rich in contrasts, with a two thousand year-old history, that will stimulate your curiosity. In these lands where several dynasties succeeded one another, you'll discover remains of the greatest Mediterranean civilizations. In the north of the country, the Roman ruins of Volubilis stand. In Rabat, pieces of architecture are evidence of the ancient French presence. Everywhere else, there are several treasures tracing the Muslim civilizations : the Kasbah of the Oudayas, the green expanses of the Menara gardens. Between sea and mountains, desert sands and green plains, eye-popping panoramas are displayed to shower you with tranquility and natural beauty; enchanting vivid pictures with the richness of a brawling culture transport you into a most raw nature."},
    {"country" : "Tanzania", "image" : "/static/images/africa/tanzania/tanzania_sum.jpeg", "cost" : "100", "length" : "14", "date" : "05-Jul", "link" : "africa/tanzania", "description" : "At the crossroads of Europe and Africa, surrounded by Mediterranean waters and opening onto the vastness of the Atlantic ocean, Morocco is a wonderland for nature lovers. It is the 'land of the distant sunset', a destination rich in contrasts, with a two thousand year-old history, that will stimulate your curiosity. In these lands where several dynasties succeeded one another, you'll discover remains of the greatest Mediterranean civilizations. In the north of the country, the Roman ruins of Volubilis stand. In Rabat, pieces of architecture are evidence of the ancient French presence. Everywhere else, there are several treasures tracing the Muslim civilizations : the Kasbah of the Oudayas, the green expanses of the Menara gardens. Between sea and mountains, desert sands and green plains, eye-popping panoramas are displayed to shower you with tranquility and natural beauty; enchanting vivid pictures with the richness of a brawling culture transport you into a most raw nature."},
    {"country" : "Egypt", "image" : "/static/images/africa/egypt/egypt_sum.jpeg", "cost" : "100", "length" : "14", "date" : "05-Jul", "link" : "africa/egypt", "description" : "At the crossroads of Europe and Africa, surrounded by Mediterranean waters and opening onto the vastness of the Atlantic ocean, Morocco is a wonderland for nature lovers. It is the 'land of the distant sunset', a destination rich in contrasts, with a two thousand year-old history, that will stimulate your curiosity. In these lands where several dynasties succeeded one another, you'll discover remains of the greatest Mediterranean civilizations. In the north of the country, the Roman ruins of Volubilis stand. In Rabat, pieces of architecture are evidence of the ancient French presence. Everywhere else, there are several treasures tracing the Muslim civilizations : the Kasbah of the Oudayas, the green expanses of the Menara gardens. Between sea and mountains, desert sands and green plains, eye-popping panoramas are displayed to shower you with tranquility and natural beauty; enchanting vivid pictures with the richness of a brawling culture transport you into a most raw nature."}
    ]
}





function selectRandomCountry() {
    
    // Random selection
    let selectionNum = Math.floor(Math.random() * 3);


    // Load image and get corresponding value
    document.getElementById('randomCountryImage').src = holidayPackages["holidayPackages"][selectionNum]["image"];
    document.getElementById("randomCountryName").innerText = holidayPackages["holidayPackages"][selectionNum]["country"];
    document.getElementById('randomCountryDescription').innerText = holidayPackages["holidayPackages"][selectionNum]["description"];
    document.getElementById("randomCountryCost").innerText = holidayPackages["holidayPackages"][selectionNum]["cost"];
    document.getElementById("randomCountryLength").innerText = holidayPackages["holidayPackages"][selectionNum]["length"];
    document.getElementById("randomCountryDate").innerText = holidayPackages["holidayPackages"][selectionNum]["date"];
    document.getElementById("randomCountryLink").href = holidayPackages["holidayPackages"][selectionNum]["link"];
    
}