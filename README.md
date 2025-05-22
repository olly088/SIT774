This is the contents for my SIT774 Website.
It represents business selling packaged holidays.
Information about what it offers is kept as much as possible in DBs and accessed through JS code that queires to DB and than passes info to ejs templates for dynamic behaviour.

To run website first run 'node createDB.js'
Following this run 'node index.js'

Then visit localhost:3000 to view and interact with site, all routes are found through navigating website with exception of http://localhost:3000/allCustomerEnquiries which has a table representing all the made customer enquiries and shouldn't be accessible to customers.

This project requires and should come downloaded with:
    "body-parser": "^2.2.0",
    "dotenv": "^16.5.0",
    "ejs": "^3.1.10",
    "express": "^5.1.0",
    "morgan": "^1.10.0",
    "sqlite3": "^5.1.7"

However if they are not there run e.g. 'npm install --save <express>' to add it to your npm.

Hope you like it :)
Thanks
