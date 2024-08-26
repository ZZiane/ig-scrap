# Instagram Scraper with Puppeteer.js

This project is a Node.js application that uses Puppeteer.js to scrape Instagram profile information, including user details, followers, following, publications, and stories.

## Features

- Scrapes Instagram user profiles for:
  - User ID
  - Number of followers
  - Number of following
  - Description
  - Privacy status
  - Number of publications
  - Number of stories

## Prerequisites

- Node.js (v14 or later)
- npm (Node Package Manager)
- Puppeteer (v23.1.1 or later)
- Express (v4.18.2 or later)

## Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/ZZiane/ig-scrap.git
    cd ig-scrap
    ```

2. **Install the required dependencies:**

    ```bash
    npm install
    ```

## Usage

1. **Configure the scraper:**

    Edit the `index.js` file to set your desired Instagram username.

2. **Run the scraper:**

    ```bash
    npm start
    ```

3. **View results:**

    The server will be running, and you can check user information by sending a request to:

    ```
    GET /scrap/{username}
    ```

## Code Overview

- **`server.js`:** This file contains the main logic for scraping Instagram profiles. It includes:
  - Launching a Puppeteer instance.
  - Navigating to the Instagram profile page.
  - Extracting user details such as followers, following, description, privacy status, publications, and stories.
  - Handling dynamic content and waiting for necessary elements to load.
  - Managing routes using Express.
  - Securing routes using middlewares.

- **`.env.example`:** Contains environment variables. After modifying it, you should rename the file to `.env`.


## Example

**Check an Instagram user's information by sending a request to the server:**

`GET /scrap/{username}`

This application can be used as the backend for applications like:

- Instagram Anonymous Story Viewer
- Viewing Instagram stories anonymously
- Instagram Account Viewer

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request if you find any bugs or have improvements to suggest.

## Contact

For questions or comments, please contact [zakariaziane@hotmail.com](mailto:zakariaziane@hotmail.com).

---

**Disclaimer:** This tool is intended for educational purposes only. Scraping Instagram may violate its terms of service, and you should use this tool responsibly and ethically.
