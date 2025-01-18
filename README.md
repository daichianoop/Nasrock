
# Nasrock - NASA Open APIs Explorer

## Project Overview
**Nasrock** is a Next.js application that empowers you to seamlessly explore and utilize NASA's Open APIs. It provides a user-friendly platform to discover a vast array of APIs encompassing space exploration, astronomy, and NASA projects, enriching your understanding of the universe.

## Features
- **Responsive Design**: Optimized for a smooth experience across all devices (mobile, tablet, desktop).
- **Dynamic Content**: Fetches real-time data from NASA's Open APIs, bringing you the latest updates on weather, images, videos, and space news.
- **Intuitive Interface**: Clear and well-structured navigation ensures effortless access to information.

## Technologies Used
- **Next.js**: A robust and efficient framework for building server-side rendered React applications.
- **React**: JavaScript library for creating interactive user interfaces.
- **CSS**: Tailored for styling with an emphasis on responsive design principles.
- **Axios**: Streamlines HTTP requests to NASA's APIs for efficient data retrieval.

## Installation

### Prerequisites
- Node.js and npm (or yarn) installed on your system.

### Clone the Repository
```bash
git clone https://github.com/yourusername/nasrock.git
```
*Replace `yourusername` with your actual GitHub username.*

### Navigate to Project Directory
```bash
cd nasrock
```

### Install Dependencies
```bash
npm install
```

### Set Up Environment Variables
Create a `.env.local` file at the project root and add your NASA API key:
```ini
NEXT_PUBLIC_RAPIDAPI_KEY=your_api_key_here
```
*Obtain your API key from [NASA API](https://api.nasa.gov/) (requires account creation).*

### Run Development Server
```bash
npm run dev
```
*This starts the development server and opens your browser at [http://localhost:3000](http://localhost:3000) by default.*

## Usage
Nasrock unlocks a treasure trove of NASA Open APIs, including:
- **Mars Weather API**: Live weather data from the intrepid Curiosity Rover.
- **Image and Video Library API**: Immerse yourself in NASA's vast collection of captivating imagery and videos.
- **Space News API**: Stay abreast of the latest discoveries and advancements in space exploration.
- **Astronomy Picture of the Day (APOD) API**: Unleash your cosmic curiosity with daily celestial images and explanations.
- **NASA Eyes**: Experience real-time visualization and interaction with ongoing NASA missions.
- **NASA EOSDIS API**: Access invaluable Earth science data and satellite imagery.

*Each API section within Nasrock guides you through its functionalities, allowing you to explore the depths of NASA's Open APIs.*

## Contributing
We welcome contributions to the Nasrock project! Here's how you can get involved:
1. **Fork the Repository**: Create a copy of the repository on your GitHub account.
2. **Create a Branch**: Isolate your changes by creating a new branch.
   ```bash
   git checkout -b feature/YourFeature
   ```
3. **Make Changes**: Modify the codebase according to your contribution.
4. **Commit Changes**: Save your work using meaningful commit messages.
   ```bash
   git commit -m 'Added new feature: API X support'
   ```
5. **Push Your Branch**: Share your contributions.
   ```bash
   git push origin feature/YourFeature
   ```
6. **Open a Pull Request**: Initiate a pull request to merge your branch into the main repository.

## License
This project is licensed under the MIT License. For full details, please refer to the LICENSE file.

## Acknowledgments
- Our deepest gratitude to NASA for providing the Open APIs and data that power Nasrock.
- A heartfelt appreciation to the open-source community for their continuous contributions and support.

