// Require the express web application framework (https://expressjs.com)
const express = require('express');
const morgan = require('morgan');
const path = require('path');     // Added to support access to file system paths
const sqlite3 = require('sqlite3').verbose();
const dotenv = require('dotenv').config(); //dotenv for hidden keys

const app = express();
const port = 3000;

// Connect to db
let db = new sqlite3.Database('OlliesAdventures.db');
// print error if couldnt connect
db.on('error', (error) => {
  console.log("Couldn't open the correct databse. Error message: " + error.message);
});


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');



// app.use(express.static('resources/images'));
app.use('/static', express.static(path.join(__dirname, 'resources')));
app.use(express.urlencoded({ extended: true }));

// Have the logging code 
app.use(morgan('common'));









// Get Routes
// The default route handler '/' uses the index.ejs temaplte
app.get('/', (req, res, next) => {
  
  // 
  db.all(`SELECT Deals.Country, Deals.New_Price, Trips.Start_Date FROM Deals INNER JOIN Trips ON Deals.Country = Trips.Country;`, (err, deals) => {
      console.log(deals);
      res.render('index', { title: 'Dkin Title index', deals : deals});
  })  

});


app.get('/about', (req, res, next) => {
    res.render('about', { title: 'Dkin Title index'});
});

app.get('/contact', (req, res, next) => {
    res.render('contact', { title: 'Dkin Title index'});
});


app.get('/deals', (req, res, next) => {
  // Get a list of all the deals joined with country information
  db.all(`SELECT Deals.Country, Deals.New_Price, Trips.Continent, Trips.Cost, Trips.Description, Trips.Length, Trips.Start_Date, Trips.Featured_Pic FROM Deals INNER JOIN Trips ON Deals.Country = Trips.Country;`, (err, deals) => {
        console.log(deals);
        res.render('deals', { title: 'Deals', deals: deals});
  })  
  
});


app.get('/news', (req, res, next) => {
    res.render('news', { title: 'Dkin Title index'});
});

app.get('/allcustomerenquiries', (req, res, next) => {
  
  // Get a list of all the enquiries to display on a webpage
  db.all(`SELECT * FROM Enquiries;`, (err, rows) => {
        console.log(rows);
        res.render('customerEnquiries', { title: 'All Customer Enquiries', enquiries: rows});
  })
});

// Get routes
app.get('/viewtrips', (req, res, next) => {

  // Get results from Post
  let searchTerm = req.query.searchTerm;
  let likeTerm = `%${searchTerm}%`;

  db.all(`SELECT * FROM Trips WHERE Country Like ?`, [likeTerm], (err, trips) => {
    res.render('viewtrips', { title: 'Search Trips', trips: trips});
  })
    
});


app.get('/africa', (req, res) => {

  db.all(`SELECT * FROM Trips WHERE Continent = 'Africa'`, (err, trips) => {
    res.render('africa', { title: 'Africa Trips' , trips : trips});
  })
  
});

app.get('/asia', (req, res) => {

  db.all(`SELECT * FROM Trips WHERE Continent = 'Asia'`, (err, trips) => {
    res.render('asia', { title: 'Asian Trips' , trips : trips});
  })
  
});

app.get('/europe', (req, res) => {

  db.all(`SELECT * FROM Trips WHERE Continent = 'Europe'`, (err, trips) => {
    res.render('europe', { title: 'European Trips' , trips : trips});
  })
  
});

app.get('/trips/:country', async(req, res) => {
  let countryName = req.params.country;

  // Rest-Country data
  const restData = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
  const data = await restData.json();
  const countryData = data[0];
  console.log(countryData);
  
  // Get Weather data using the capital city of the country (wait for API key to be activated)
  const weatherAPIKey = process.env.weatherAPIKey;
  const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${countryData.capital[0]}&units=metric&appid=${weatherAPIKey}`);
  const weatherData = await weatherResponse.json();
  console.log(weatherData);

  // Get Exchange rate with 
  const exchangeAPIKey = process.env.exchangeAPIKey;
  const exchangeResponse = await fetch(`https://v6.exchangerate-api.com/v6/${exchangeAPIKey}/pair/AUD/${Object.keys(countryData.currencies)[0]}`);
  const exchangeData = await exchangeResponse.json();
  console.log(exchangeData);
  // console.log(exchangeData.result);




  db.get(`SELECT * FROM Trips WHERE LOWER(Country) = LOWER(?)`, [countryName], (err, row) => {
  
    if (err) {
      console.error(err);
      return res.status(500).send("Database error");
    }

    if (!row) {
      return res.status(404).send("Country not found");
    }

    db.all(`SELECT * FROM Destinations WHERE Lower(Country) = Lower(?)`, [countryName], (err, destinations) => {
      db.all(`SELECT * FROM Reviews WHERE Lower(Country) = Lower(?)`, [countryName], (err, reviews) => {
        res.render('trip', {title: `${row.Country} Trip`, trip: row, destinations : destinations, reviews : reviews, countryData : countryData, weatherData: weatherData, exchangeData : exchangeData});
      });
    });
  });
  
});


// Post routes
app.post('/submitEnquiry', (req, res, next) => {

  // Get results from Post
  let firstname = req.body.firstname;
  let lastname = req.body.lastname;
  let fullName = firstname + " " + lastname;
  let email = req.body.email;
  let phoneNumber = req.body.inputMobile;
  let enquiry = req.body.userEnquiry;


  // Commit Enquiry to db
  let stmt = db.run(`INSERT INTO Enquiries (Name, Email, Phone_Number, Customer_Enquiry) VALUES ("${fullName}", "${email}", "${phoneNumber}", "${enquiry}");`,
  function () {
      console.log(this.lastID)

      db.get(`SELECT * FROM Enquiries WHERE enquiry_ID = ?`, [this.lastID], (err, row) => {
        console.log('Last inserted ID:', this.lastID);
        console.log(row);
        res.render('enquiryResult', { title: 'Successful Enquiry', enquiry: row});
      })
    }

  );

});







// The '404 file not found' error handler uses the temaplte 404.ejs
app.use((req, res) => {
  res.status(404);
  res.render('404', { title: '404', message: '404 - Not Found', url: req.url });
})

// The final error handler uses the temaplte error.ejs
app.use((error, request, response, next) => {
  let errorStatus = error.status || 500;
  response.status(errorStatus);
  response.render('error', { title: '5xx', message: '5xx - System error', error: error });
});

// Tell our application to listen to requests at port 3000 on the localhost
app.listen(port, () => {
  console.log(`Web server running at: http://localhost:${port}`)
  console.log(`Type Ctrl+C to shut down the web server`)
})