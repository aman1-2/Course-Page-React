# Course Catalog Web App

This repository contains the source code for a simple course catalog web application built using React. The application allows users to browse through different courses, filter them based on categories, and like/dislike individual courses.

## File Structure

- **app.js**: This file contains the main logic for the React application. It fetches course data from an API, handles loading states, and renders components like Navbar, Filter, Cards, and Loader.

- **Components**:
  - **Card.js**: Represents a single course card component. It displays course information including title, description, and an option to like/dislike a course.
  - **Cards.js**: Renders a collection of course cards based on the data received from the parent component. It utilizes the Card component.
  - **Filter.js**: Displays filter buttons for different course categories. Users can select a category to filter courses accordingly.
  - **Loader.js**: Renders a loading indicator while the course data is being fetched.
  - **Navbar.js**: Displays the navigation bar with the title of the application.

## Usage

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install dependencies using `npm install` or `yarn install`.
4. Start the development server using `npm start` or `yarn start`.
5. Access the application in your browser at `http://localhost:3000`.

## Dependencies

- **React**: JavaScript library for building user interfaces.
- **react-toastify**: Library for displaying toast notifications.
- **react-icons**: Library providing a collection of icons for use in React applications.

## Development

- **Fetching Data**: Course data is fetched from an API defined in the `apiUrl` constant within `app.js`.
- **State Management**: React's `useState` hook is used for managing state variables like course data and loading states.
- **Effects**: The `useEffect` hook is used to trigger the data fetching function when the component mounts.
- **Component Composition**: The application is composed of reusable components like Navbar, Filter, and Card.

## Contributing

Feel free to contribute to the project by opening issues or submitting pull requests. Any improvements or feature additions are welcome!

### Preview Images of the Course Page
**Overview Image of the Page UI ->**
![Frontlook or Front UI of the Course Page.](./Assets/Course%20Page%201.jpg)



**Toast Poping Up ->**
![Showcasing the Toast of liked and removed poping up](./Assets/Course%20Page%204.jpg)


**Category Filterd Displayed ->**
![UI for a Category being Filtered.](./Assets/Course%20Page%202.jpg)

