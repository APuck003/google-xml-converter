# google-xml-converter
Consumes xml file - then converts to JSON - outputs html formatted as xml

Save XML file in data directory then enter correct path to xmlFile variable in convert-xml-to-json.js on line 4.

In your Terminal type "npm run convert" then press enter. To generate new JSON file from XML data. 

The jsonFromXMLObject.json file will then be generated and placed in root directory to manipulate data in JSON format

Once JSON file is updated, Go back into your Terminal and run "npm run clean" to populate data tags.

After that's done run "npm start" in Terminal

This will start your server at URI http://localhost:4000/ - go to that link to view updated data on the page.
