# Currency Converter

This is a web-based currency converter application built with HTML, JavaScript, and CSS. It allows users to convert amounts between various currencies, featuring dynamic country flag updates and real-time conversion rates fetched from an API.

## Project Structure

- `index.html`: The main HTML file that defines the structure of the currency converter interface, including input fields, dropdowns for currency selection, and a conversion button.
- `script.js`: The JavaScript file containing the core logic for handling user input, validating amounts, fetching conversion rates, and updating the display.
- `country.js`: The JavaScript file defining a list of currency codes mapped to country codes, used for populating dropdown options and updating flags.
- `styles.css`: The CSS file for styling the web page with a clean and responsive design.

## Getting Started

### Prerequisites
- A modern web browser (e.g., Chrome, Firefox, Edge).
- An internet connection to fetch real-time currency data from the API.
- A code editor like VS Code (optional, for development).

### Installation
1. Clone or download this repository to your local machine.
2. Ensure all files (`index.html`, `script.js`, `country.js`, `styles.css`) are in the same directory.
3. Open `index.html` in a web browser to use the currency converter.

### Usage
- Open `index.html` in a browser to access the currency converter.
- Enter an amount in the input field and select the "From" and "To" currencies from the dropdowns.
- Click the "Convert" button to see the converted amount, or use the exchange icon to swap currencies.
- The application updates country flags dynamically based on the selected currencies.

### Folder Structure
```
CurrencyConverter/
├── index.html
├── script.js
├── country.js
└── styles.css
```

## Features
- **HTML**: Provides a structured interface with input for amount, dropdowns for currency selection, and a conversion result display.
- **JavaScript**: 
  - Populates dropdowns with currency codes from `country.js`.
  - Validates input amounts (must be greater than 1).
  - Fetches real-time conversion rates from `https://latest.currency-api.pages.dev/v1/currencies/{currency}.json`.
  - Updates flags using the Flags API (`https://flagsapi.com/{countryCode}/flat/64.png`).
  - Allows swapping of "From" and "To" currencies with a click.
- **CSS**: Styles the page for a user-friendly and responsive experience (placeholder file included).

## Customization
- Edit `styles.css` to adjust colors, fonts, or layout.
- Update `script.js` to modify conversion logic, add error handling, or integrate a different API.
- Modify `country.js` to add or remove currency-country mappings.
- Expand `index.html` to include additional features like historical data or more input fields.

## Contributing
Feel free to fork this project and submit pull requests with improvements or bug fixes.

## License
This project is licensed under the MIT License.

