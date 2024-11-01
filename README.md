# Weather App 🌤️

A sleek and responsive weather application that provides real-time weather information for any city worldwide. Built with HTML, CSS, and JavaScript, using the OpenWeatherMap API.

![Weather App Screenshot](weather-app-preview.png)

## 🌟 Features

- **Real-time Weather Data**: Get current weather conditions for any city
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Clean UI**: Modern and intuitive user interface
- **Loading States**: Visual feedback during data fetching
- **Error Handling**: Clear error messages for better user experience

## 🚀 Live Demo

Visit the live application: [Weather App Demo](https://your-username.github.io/weather-app)

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- OpenWeatherMap API
- Git/GitHub

## ⚙️ Installation & Setup

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/weather-app.git
   cd weather-app
   ```

2. **API Key Setup**
   - Sign up at [OpenWeatherMap](https://openweathermap.org/api)
   - Get your API key
   - Replace the API key in `script.js`:
     ```javascript
     const API_KEY = "your_api_key_here";
     ```

3. **Local Development**
   ```bash
   # Using Python
   python -m http.server 8000

   # Using Node.js
   npx serve
   ```

4. **Open in Browser**
   - Visit `http://localhost:8000`

## 📁 Project Structure

```
weather-app/
│
├── index.html          # Main HTML file
├── styles.css          # Stylesheet
├── script.js           # JavaScript logic
└── README.md          # Project documentation
```

## 💻 Usage

1. Enter a city name in the search box
2. Press "Get Weather" or hit Enter
3. View the weather details:
   - Temperature in Celsius
   - Weather conditions
   - Wind speed
   - Location details

## 🚀 Deployment

### GitHub Pages

1. Fork this repository
2. Go to repository Settings
3. Navigate to Pages section
4. Select your main branch as source
5. Your site will be published at `https://your-username.github.io/weather-app`

### Netlify

1. Connect your GitHub repository to Netlify
2. Configure build settings (not required for static sites)
3. Deploy!

## 🛠️ API Reference

This app uses the OpenWeatherMap API. Key endpoints:

```javascript
GET api.openweathermap.org/data/2.5/weather?q={city}&appid={API_key}
```

For API documentation, visit [OpenWeatherMap API Docs](https://openweathermap.org/api)

## ✨ Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature/improvement`)
3. Make changes
4. Commit your changes (`git commit -am 'Add new feature'`)
5. Push to the branch (`git push origin feature/improvement`)
6. Create a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Acknowledgments

- Weather data provided by [OpenWeatherMap](https://openweathermap.org)
- Icons and design inspiration from various open-source projects

## 📞 Contact

For questions or suggestions, please open an issue in the GitHub repository.

## 🔄 Future Updates

- [ ] Add temperature unit conversion (C/F)
- [ ] Implement weather forecasting
- [ ] Add weather icons
- [ ] Save recent searches
- [ ] Add dark/light theme toggle
- [ ] Implement geolocation

---
Made with ❤️ by [Mohammad Farhaan Ali]
