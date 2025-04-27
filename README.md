# HTML Project
***MAKE SURE TO READ THE SETUP INSTRUCTIONS BEFORE RUNNING THE PROJECT. THEREFORCE YOU DO NOT USE A VERY LIMITED VERSION OF THE WEBSITE.***

## Overview
This project is a simple HTML layout that includes reusable components for the header and footer, along with a main CSS file for styling. It serves as a foundation for building web pages with a consistent look and feel.

## Project Structure
```
Switch2Green
├── components
│   ├── footer.html      # Contains the HTML structure for the footer
│   ├── header.html      # Contains the HTML structure for the header
|   ├── contact.html     # Contains the HTML structure for the contact page
|   ├── form.html        # Contains the HTML structure for the form page
|   ├── index.html       # Main HTML file serving as the entry point
|   ├── results.html     # Containes the HTML structure for the results page
├── css
│   └── styles.css       # Contains the CSS styles for the project
├── js
│   └── recommandation.js       # Contains the JS of the project
├── data
│   └── vehicules.json   # file you should have downloaded before running the website
|   ├── vehicules-test.json     # dataset example to show how the website works (very limited)
└── README.md            # Documentation for the project
```

## Setup Instructions
1. Clone the repository or download the project files to your local machine.
2. Open the project folder in your preferred code editor.
3. Download the database from this link in the JSON format: 
{https://public.opendatasoft.com/explore/dataset/vehicules-commercialises/table/?flg=fr-fr&sort=puissance_maximale&dataChart=eyJxdWVyaWVzIjpbeyJjb25maWciOnsiZGF0YXNldCI6InZlaGljdWxlcy1jb21tZXJjaWFsaXNlcyIsIm9wdGlvbnMiOnsiZmxnIjoiZnItZnIiLCJzb3J0IjoicHVpc3NhbmNlX21heGltYWxlIn19LCJjaGFydHMiOlt7ImFsaWduTW9udGgiOnRydWUsInR5cGUiOiJsaW5lIiwiZnVuYyI6IkFWRyIsInlBeGlzIjoicHVpc3NhbmNlX2FkbWluaXN0cmF0aXZlIiwic2NpZW50aWZpY0Rpc3BsYXkiOnRydWUsImNvbG9yIjoiI0ZGNTE1QSJ9XSwieEF4aXMiOiJhbm5lZSIsIm1heHBvaW50cyI6IiIsInRpbWVzY2FsZSI6InllYXIiLCJzb3J0IjoiIn1dLCJkaXNwbGF5TGVnZW5kIjp0cnVlLCJhbGlnbk1vbnRoIjp0cnVlfQ%3D%3D}
4. Copy the JSON file and paste it inside the data folder.
5. Open `index.html` in a web browser to view the project.

## Usage
- The `header.html` and `footer.html` files can be included in any HTML file to maintain a consistent layout across multiple pages.
- Modify `styles.css` to change the visual aspects of the project, such as colors, fonts, and layout.

## Contributing
Feel free to contribute to this project by adding new features or improving existing components. Please submit a pull request for any changes you wish to make.

## License
This project is open-source and available for use and modification.