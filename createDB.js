let sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('OlliesAdventures.db');      // file database

db.serialize(function() {

    db.run(`DROP TABLE IF EXISTS Enquiries;`);
    db.run(`DROP TABLE IF EXISTS Trips;`);
    db.run(`DROP TABLE IF EXISTS Destinations;`);
    db.run(`DROP TABLE IF EXISTS Reviews;`);
    db.run(`DROP TABLE IF EXISTS Deals;`);
        
    db.run(`CREATE TABLE Enquiries (
        Enquiry_ID INTEGER PRIMARY KEY AUTOINCREMENT,
        Name VARCHAR(50) NOT NULL,
        Email VARCHAR(50) NOT NULL,
        Phone_Number VARCHAR(10) NOT NULL,
        Customer_Enquiry TEXT
    );`);

    db.run(`INSERT INTO Enquiries (Name, Email, Phone_Number, Customer_Enquiry) VALUES ('Oliver Etherington', 'oliver.etherington088@gmail.com', '0449678543', 'Is it possible to get a discount if we book as a family? We are a family of 5 with 2 adults and 3 children, please let us know.');`);

    db.run(`CREATE TABLE Trips (
        Trip_ID INTEGER PRIMARY KEY AUTOINCREMENT,
        Country VARCHAR(50) NOT NULL,
        Continent VARCHAR(20) NOT NULL,
        Description TEXT NOT NULL,
        Ages VARCHAR(20) NOT NULL,
        Group_Size VARCHAR(20) NOT NULL,
        Accommodation VARCHAR(20) NOT NULL,
        Cost INTEGER NOT NULL,
        Length INTEGER NOT NULL,
        Start_Date DATE NOT NULL,
        Featured_Pic VARCHAR(100) NOT NULL
    );`);

    db.run(`CREATE TABLE Destinations (
        Destination_ID INTEGER PRIMARY KEY AUTOINCREMENT,
        Country VARCHAR(50) NOT NULL,
        Dest_Pic VARCHAR(100) NOT NULL,
        Dest_Name VARCHAR(50) NOT NULL,
        Dest_Description VARCHAR(200) NOT NULL,
        latitude REAL NOT NULL,
        longitude REAL NOT NULL
    );`);

    db.run(`CREATE TABLE Reviews (
        Review_ID INTEGER PRIMARY KEY AUTOINCREMENT,
        Country VARCHAR(50) NOT NULL,
        Review_Pic VARCHAR(100) NOT NULL,
        Review_Name VARCHAR(50) NOT NULL,
        Review_Description VARCHAR(200) NOT NULL
    );`);

    db.run(`CREATE TABLE Deals (
        Deal_ID INTEGER PRIMARY KEY AUTOINCREMENT,
        Country VARCHAR(50) NOT NULL,
        New_Price INTEGER NOT NULL
    );`);


    // Insert Morocco
    db.run(`INSERT INTO Trips (
        Country, 
        Continent, 
        Description, 
        Ages, 
        Group_Size, 
        Accommodation, 
        Cost, 
        Length, 
        Start_Date, 
        Featured_Pic
        ) VALUES (
        'Morocco', 
        'Africa', 
        'At the crossroads of Europe and Africa, surrounded by Mediterranean waters and opening onto the vastness of the Atlantic ocean, Morocco is a wonderland for nature lovers. It is the land of the distant sunset, a destination rich in contrasts, with a two thousand year-old history, that will stimulate your curiosity. In these lands where several dynasties succeeded one another, you willl discover remains of the greatest Mediterranean civilizations. In the north of the country, the Roman ruins of Volubilis stand. In Rabat, pieces of architecture are evidence of the ancient French presence. Everywhere else, there are several treasures tracing the Muslim civilizations : the Kasbah of the Oudayas, the green expanses of the Menara gardens. Between sea and mountains, desert sands and green plains, eye-popping panoramas are displayed to shower you with tranquility and natural beauty; enchanting vivid pictures with the richness of a brawling culture transport you into a most raw nature.', 
        '18-35', 
        '10-20', 
        'Hotels', 
        2499, 
        14, 
        '2025-06-07', 
        'morocco.jpg'
    );`);

    // Insert Morocco Destinations
    db.run(`INSERT INTO Destinations (Country, Dest_Pic, Dest_Name, Dest_Description, latitude, longitude) VALUES ('Morocco', 'morocco1.avif', 'Atlas Mountains', 'Explore Morocco: The Atlas Mountains are some of the world least visited peaks.', 31.05, -7.91);`);
    db.run(`INSERT INTO Destinations (Country, Dest_Pic, Dest_Name, Dest_Description, latitude, longitude) VALUES ('Morocco', 'morocco3.avif', 'Aït Ben Haddou', 'Explore Morocco: Aït Ben Haddou a World Heritage Site and well-preserved 11th century city.', 31.05, -7.13);`);
    db.run(`INSERT INTO Destinations (Country, Dest_Pic, Dest_Name, Dest_Description, latitude, longitude) VALUES ('Morocco', 'morocco2.jpg', 'Sahara Desert', 'Explore Morocco: The Sahara Desert also seems endless.', 31.08, -4.01);`);
    db.run(`INSERT INTO Destinations (Country, Dest_Pic, Dest_Name, Dest_Description, latitude, longitude) VALUES ('Morocco', 'morocco4.avif', 'Fez', 'Explore Morocco: The city of Fez is the oldest in Morocco.', 34.043, -5.003);`);

    // Insert Morocco Reviews
    db.run(`INSERT INTO Reviews (Country, Review_Pic, Review_Name, Review_Description) VALUES ('Morocco', 'morocco_tourist1.jpg', 'Jane Low', 'Morocco is the most soulful and beautiful country I havve ever experienced — from the heights of the Atlas mountains to the cities of Casablanca and Fez, there iss so much to see and do!');`);
    db.run(`INSERT INTO Reviews (Country, Review_Pic, Review_Name, Review_Description) VALUES ('Morocco', 'morocco_tourist2.webp', 'Alice Palmer', 'I did not know what to expect when I came to Morocco, but I found the most beuatiful country and the most beautiful people.');`);
    db.run(`INSERT INTO Reviews (Country, Review_Pic, Review_Name, Review_Description) VALUES ('Morocco', 'morocco_tourist3.jpg', 'Casey Lynn', 'Morocco offers so much, from the beautiful waves at the Atlantic Coat to the peaks of the Sahara to the even greater peaks of the Atlas Mountains, Morocco has it all.');`);



    // Insert Tanzania
    db.run(`INSERT INTO Trips (
        Country, 
        Continent, 
        Description, 
        Ages, 
        Group_Size, 
        Accommodation, 
        Cost, 
        Length, 
        Start_Date, 
        Featured_Pic
        ) VALUES (
        'Tanzania', 
        'Africa', 
        'Though many peoples first introduction to Tanzania is gazing open-mouthed at footage of huge numbers of wildebeest and zebra moving through Serengeti National Park, there is so much more to see and do in this beautiful nation. There are several national parks that are scattered like jewels across the country and they boast the largest concentration of wildlife in Africa. Tanzanias coastline is dotted with stunning beaches and its paradise islands are renowned for their beauty, lapped by the Indian Ocean and the teeming wildlife underneath the waves. In the bustling cities, the buildings tell stories of battles and conquest, depression and victory. It would take a lifetime to see everything on offer but start your to-do list now with these 12 unmissable experiences in Tanzania.', 
        '25-40', 
        '15-25', 
        'Camping and Hotels', 
        3499, 
        16, 
        '2025-06-21', 
        'tanzania.jpeg'
    );`);

    // Insert Tanzania Destinations
    db.run(`INSERT INTO Destinations (Country, Dest_Pic, Dest_Name, Dest_Description, latitude, longitude) VALUES ('Tanzania', 'theRockZanzibar.avif', 'Zanzibar', 'Explore Tanzania: Explore the archipelago of Zanzibar. Including having dinner at the Rock.', -6.165, 39.199);`);
    db.run(`INSERT INTO Destinations (Country, Dest_Pic, Dest_Name, Dest_Description, latitude, longitude) VALUES ('Tanzania', 'mtKilimanjaro.webp', 'Mount Kilimanjaro', 'Explore Tanzania: Mount Kilimanjaro is the tallest mountain in Africa.',  -3.07583, 37.35333);`);
    db.run(`INSERT INTO Destinations (Country, Dest_Pic, Dest_Name, Dest_Description, latitude, longitude) VALUES ('Tanzania', 'OlDoinyoLengai.avif', 'Ol Doinyo Lengai', 'Explore Tanzania: Walk up an active volano and explore the great flora and flauna that populates the area.', -2.764, 35.914);`);    
    db.run(`INSERT INTO Destinations (Country, Dest_Pic, Dest_Name, Dest_Description, latitude, longitude) VALUES ('Tanzania', 'serengeti.webp', 'The Serengeti', 'Explore Tanzania: The Serengeti is home to some of the most exotic creatures in the world.', -2.333333, 34.833332);`);


    // // Insert Tanzania Reviews
    db.run(`INSERT INTO Reviews (Country, Review_Pic, Review_Name, Review_Description) VALUES ('Tanzania', 'serengetiTourist.jpg', 'David Donne', 'You could not ask for more professional guides. With their help we saw every animal we wanted to see and kept at a safe distance while we watched.');`);
    db.run(`INSERT INTO Reviews (Country, Review_Pic, Review_Name, Review_Description) VALUES ('Tanzania', 'kilimanjaroTourist.jpg', 'Edward Yeats', 'Climbing Mount Kilimajaro might have been the hardest thing ive ever done. But its definetly the best thing ive ever done.');`);
    db.run(`INSERT INTO Reviews (Country, Review_Pic, Review_Name, Review_Description) VALUES ('Tanzania', 'serengetiTourist2.jpg', 'Michael Blake', 'Seeing the majest of these great Elephants up close is something I will not soon forget. 10/10 Experience.');`);




    // Insert Egypt
    db.run(`INSERT INTO Trips (
        Country, 
        Continent, 
        Description, 
        Ages, 
        Group_Size, 
        Accommodation, 
        Cost, 
        Length, 
        Start_Date, 
        Featured_Pic
        ) VALUES (
        'Egypt', 
        'Africa', 
        'An enigmatic treasure trove of almost unimaginable archaeological and cultural riches, it is hard not to think of Egypt without imagining the Sphinx, the pyramids at Giza, Luxor, the Valley of the Kings and the Nile. As well as being the worlds largest open-air museum, Egypt also offers a slew of luxurious Red Sea resorts, many within reach of spectacular snorkeling, diving and windsurfing. Whether you see it by riverboat, from camelback or from just above the coral, Egypts sights are unforgettable.', 
        '30-50', 
        '15-25', 
        'Luxury Hotels', 
        4499, 
        18, 
        '2025-07-22', 
        'egypt_sum.jpeg'
    );`);

    // Insert Egypt Destinations
    db.run(`INSERT INTO Destinations (Country, Dest_Pic, Dest_Name, Dest_Description, latitude, longitude) VALUES ('Egypt', 'sphinx.jpg', 'The Sphinx', 'Explore Egypt: Admire the Sphinx who has lay dormant for over 2000 years.', 29.97526, 31.13758);`);
    db.run(`INSERT INTO Destinations (Country, Dest_Pic, Dest_Name, Dest_Description, latitude, longitude) VALUES ('Egypt', 'pyramids.jpg', 'Pyramids of Giza', 'Explore Egypt: Gaze upon the Pyramids of Giza. One of the 7 ancient wonders of the World.', 29.97611, 31.13278);`);
    db.run(`INSERT INTO Destinations (Country, Dest_Pic, Dest_Name, Dest_Description, latitude, longitude) VALUES ('Egypt', 'nile.jpg', 'The Nile River', 'Explore Egypt: Cruise the Nile, the longest and river in the world.', 29.533438, 31.270695);`);
    db.run(`INSERT INTO Destinations (Country, Dest_Pic, Dest_Name, Dest_Description, latitude, longitude) VALUES ('Egypt', 'valleyOfKings.jpg', 'Valley of Kings', 'Explore Egypt: Enter the Valley of Kings where many of the old Pharoahs still reside.', 25.74083, 32.60222);`);

    // // Insert Egypt Reviews
    db.run(`INSERT INTO Reviews (Country, Review_Pic, Review_Name, Review_Description) VALUES ('Egypt', 'egyptTourist3.jpg', 'Georgia Coolidge', 'Egypt might be the oldest country of them all. But despite its age it still shines brightly on all who travel throguh its ancient sites and modern cities.');`);
    db.run(`INSERT INTO Reviews (Country, Review_Pic, Review_Name, Review_Description) VALUES ('Egypt', 'egyptTourist2.avif', 'David Carr', 'I have thought about Ancient Egypt ever since I learned about them when I was a kid. To see the great pyramids in person broguht a tear to my eye.');`);
    db.run(`INSERT INTO Reviews (Country, Review_Pic, Review_Name, Review_Description) VALUES ('Egypt', 'egyptTourist1.jpg', 'Joshua Locke', 'I looked upon the ancient Pharoahs in the Valley of Kings. They may have ruled a great civilisation, yet they lay there dead while I remain. To gaze upon their homes was a sight I will not soon forget.');`);



    // Insert Italy
    db.run(`INSERT INTO Trips (
        Country, 
        Continent, 
        Description, 
        Ages, 
        Group_Size, 
        Accommodation, 
        Cost, 
        Length, 
        Start_Date, 
        Featured_Pic
        ) VALUES (
        'Italy', 
        'Europe', 
        'Discover ancient cities, charming coastal towns and diverse landscapes in this boot-shaped Mediterranean nation, famed for its cultural riches and rustic cuisine. As the birthplace of pizza, gelato and pasta, Italy is perhaps best known for its mouthwatering food, though it also has much more to experience. Wander through ancient cities filled with historical ruins and relax at glamorous coastal resorts.',
        '30-50', 
        '15-25', 
        'Luxury Hotels', 
        4201, 
        16, 
        '2025-08-14', 
        'italy.jpg'
    );`);

    // Insert Italy Destinations
    db.run(`INSERT INTO Destinations (Country, Dest_Pic, Dest_Name, Dest_Description, latitude, longitude) VALUES ('Italy', 'rome.webp', 'Rome', 'Explore Italy: The eternal city, walk the street and visit the temples, Ceaser and Augustus walked 2000 years age.', 41.89333, 12.48278);`);
    db.run(`INSERT INTO Destinations (Country, Dest_Pic, Dest_Name, Dest_Description, latitude, longitude) VALUES ('Italy', 'Naples.webp', 'Naples', 'Explore Italy: Visit the coastal city of Naples and enjoy the sceenary of Mt Vesuvius.', 40.853294, 14.305573);`);
    db.run(`INSERT INTO Destinations (Country, Dest_Pic, Dest_Name, Dest_Description, latitude, longitude) VALUES ('Italy', 'florence.jpg', 'Forence', 'Explore Italy: Some say the most beautiful city in the world and the home of Da Vinci.', 43.77139, 11.25417);`);
    db.run(`INSERT INTO Destinations (Country, Dest_Pic, Dest_Name, Dest_Description, latitude, longitude) VALUES ('Italy', 'pisa.jpg', 'Pisa', 'Explore Italy: Take some fun picutres with the learning tower of Pisa.', 43.716667, 10.400000);`);

    // // Insert Italy Reviews
    db.run(`INSERT INTO Reviews (Country, Review_Pic, Review_Name, Review_Description) VALUES ('Italy', 'pisa-tourist.jpg', 'Georgia Morgan', 'I had the funnest time in Italy adn got my picture with the tower of Pisa.');`);
    db.run(`INSERT INTO Reviews (Country, Review_Pic, Review_Name, Review_Description) VALUES ('Italy', 'rome-tourist.jpg', 'David Morgan', 'As someone who loves ancient history this trip was an absolute dream.');`);


    // Insert Japan
    db.run(`INSERT INTO Trips (
        Country, 
        Continent, 
        Description, 
        Ages, 
        Group_Size, 
        Accommodation, 
        Cost, 
        Length, 
        Start_Date, 
        Featured_Pic
        ) VALUES (
        'Japan', 
        'Asia', 
        'From ancient traditions to beautiful natural surroundings to modern technology, this nation of several islands offers opportunities for endless discovery. The country of Japan is fascinating in many ways, with highly populated cities, influential technology centers and centuries-old shrines and temples. Visit Tokyo as well as other locations for broader experiences. Tokyo is a gleaming world capital, with neighborhoods specializing in different shopping and leisure activities. See the latest fashions in Harajuku and join crowds of tech aficionados in Akihabara.',
        '20-45', 
        '12-20', 
        'Hotels', 
        2199, 
        11, 
        '2025-09-12', 
        'japan.jpg'
    );`);

    // Insert Japan Destinations
    db.run(`INSERT INTO Destinations (Country, Dest_Pic, Dest_Name, Dest_Description, latitude, longitude) VALUES ('Japan', 'tokyo.jpg', 'Tokyo', 'Explore Japan: Visit the futuristic-city of Tokyo.', 35.652832, 139.839478);`);
    db.run(`INSERT INTO Destinations (Country, Dest_Pic, Dest_Name, Dest_Description, latitude, longitude) VALUES ('Japan', 'mtfugi.jpg', 'Mt. Fuji', 'Explore Japan: Visit the beautiful Mt fugi', 35.36083, 138.72750);`);
    db.run(`INSERT INTO Destinations (Country, Dest_Pic, Dest_Name, Dest_Description, latitude, longitude) VALUES ('Japan', 'osaka.jpg', 'Osaka', 'Explore Japan: Visit Osaka home of the stunning cherry-blossom trees.', 34.672314, 135.484802);`);
    db.run(`INSERT INTO Destinations (Country, Dest_Pic, Dest_Name, Dest_Description, latitude, longitude) VALUES ('Japan', 'kyoto.jpg', 'Kyoto', 'Explore Japan: Visit the old imperial city of Japan', 35.01167, 135.76833);`);

    // // Insert Japan Reviews
    db.run(`INSERT INTO Reviews (Country, Review_Pic, Review_Name, Review_Description) VALUES ('Japan', 'japan-tourist1.jpg', 'Bill Morgan', 'I had the best time in Japan from the futuristic Tokyo to the ancient Kyoto.');`);
    db.run(`INSERT INTO Reviews (Country, Review_Pic, Review_Name, Review_Description) VALUES ('Japan', 'japan-tourist2.jpg', 'David Duchovney', 'Japan was the most beautiful country with the most beautiful people.');`);

    // Set deals
    db.run(`INSERT INTO Deals (Country, New_Price) VALUES ('Tanzania', 2499);`);
    db.run(`INSERT INTO Deals (Country, New_Price) VALUES ('Japan', 1899);`);
    db.run(`INSERT INTO Deals (Country, New_Price) VALUES ('Italy', 3149);`);



});

db.close(); 