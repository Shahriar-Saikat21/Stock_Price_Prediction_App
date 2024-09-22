# Stock Price Prediction App

Welcome to the Stock Price Prediction App repository! This project leverages state-of-the-art technologies to provide accurate stock price forecasts, incorporating deep learning, modern web development practices, and a dynamic user experience. I used 14 years of Dhaka Stock Exchange data for model training and testing.

## Overview

This application predicts future stock prices using a Long Short-Term Memory (LSTM) deep learning model implemented with TensorFlow. The backend is built with Django, while the frontend utilizes React. For an enhanced user experience, React Query and Tailwind CSS are employed to ensure a responsive and dynamic interface.

## Key Features

- **Stock Price Prediction**: Accurate forecasts using LSTM, a type of recurrent neural network designed for sequence prediction, and TensorFlow for model implementation.
- **Django Backend**: Robust and scalable backend built with Django, handling data processing and model interactions.
- **React Frontend**: Interactive and dynamic user interface developed with React, providing a seamless experience.
- **React Query**: Efficient data fetching and state management in the frontend, ensuring real-time updates and improved performance.
- **Tailwind CSS**: A utility-first CSS framework used to create a responsive and modern design, enhancing the app's visual appeal and usability.
- **BDSahre API**: An API to get daily share market updates of Dhaka Stock Exchange.

## Getting Started

### Prerequisites

- Python 3.x
- Node.js and npm/yarn
- Django
- TensorFlow
- React

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/stock-price-prediction-app.git
   cd stock-price-prediction-app
   ```

2. **Set up the backend:**

   ```bash
   cd backend
   pip install -r requirements.txt
   python manage.py migrate
   python manage.py runserver
   ```

3. **Set up the frontend:**

   ```bash
   cd Frontend
   npm install
   npm start
   ```

4. **Access the application:**

   Navigate to `http://localhost:3000` to use the app.

## Usage

- Enter a stock ticker symbol to get predictions.
- Visualize historical data and forecasted prices on the dashboard.
- Enjoy a responsive design optimized for various devices.

## Contributing

Feel free to submit issues or pull requests. Contributions are welcome!

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [Django](https://www.djangoproject.com/)
- [React](https://reactjs.org/)
- [React Query](https://react-query.tanstack.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TensorFlow](https://www.tensorflow.org/)
- [LSTM](https://en.wikipedia.org/wiki/Long_short_term_memory)

For more information, please refer to the [documentation](docs) or check out the [demo](https://your-demo-link.com).

Happy coding! 🚀
