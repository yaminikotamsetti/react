const express = require('express');
const cors = require('cors');

const app = express();
const port = 5000;


app.use(cors());


const books = [
  { 
    id: 1, 
    title: 'The Great Gatsby', 
    author: 'F. Scott Fitzgerald', 
    genre: 'Fiction', 
    publishedYear: 1925, 
    summary: 'A story of the mysteriously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan, set in the Roaring Twenties.'
  },
  { 
    id: 2, 
    title: 'To Kill a Mockingbird', 
    author: 'Harper Lee', 
    genre: 'Fiction', 
    publishedYear: 1960, 
    summary: 'A novel about the serious issues of rape and racial inequality narrated by a young girl, Scout Finch, in the Deep South.'
  },
  { 
    id: 3, 
    title: '1984', 
    author: 'George Orwell', 
    genre: 'Dystopian', 
    publishedYear: 1949, 
    summary: 'A dystopian social science fiction novel and cautionary tale about the dangers of totalitarianism and oppressive government.'
  },
  { 
    id: 4, 
    title: 'Pride and Prejudice', 
    author: 'Jane Austen', 
    genre: 'Romance', 
    publishedYear: 1813, 
    summary: 'A romantic novel that explores the themes of love, reputation, and class through the relationship of Elizabeth Bennet and Mr. Darcy.'
  },
  { 
    id: 5, 
    title: 'The Catcher in the Rye', 
    author: 'J.D. Salinger', 
    genre: 'Fiction', 
    publishedYear: 1951, 
    summary: 'A novel about teenage angst and alienation, narrated by the disenchanted Holden Caulfield.'
  },
  { 
    id: 6, 
    title: 'The Hobbit', 
    author: 'J.R.R. Tolkien', 
    genre: 'Fantasy', 
    publishedYear: 1937, 
    summary: 'A fantasy novel that follows the journey of Bilbo Baggins, a hobbit who embarks on an adventure to help a group of dwarves reclaim their homeland.'
  },
  { 
    id: 7, 
    title: 'Fahrenheit 451', 
    author: 'Ray Bradbury', 
    genre: 'Dystopian', 
    publishedYear: 1953, 
    summary: 'A dystopian novel about a future society where books are banned and "firemen" burn any that are found.'
  },
  { 
    id: 8, 
    title: 'Moby Dick', 
    author: 'Herman Melville', 
    genre: 'Adventure', 
    publishedYear: 1851, 
    summary: 'The narrative of Captain Ahab’s obsessive quest to avenge the monstrous whale that bit off his leg.'
  },
  { 
    id: 9, 
    title: 'War and Peace', 
    author: 'Leo Tolstoy', 
    genre: 'Historical Fiction', 
    publishedYear: 1869, 
    summary: 'A historical novel that intertwines the lives of several families during the Napoleonic Wars.'
  },
  { 
    id: 10, 
    title: 'The Alchemist', 
    author: 'Paulo Coelho', 
    genre: 'Adventure', 
    publishedYear: 1988, 
    summary: 'A philosophical story about a shepherd named Santiago who travels from Spain to Egypt in search of treasure.'
  },
  { 
    id: 11, 
    title: 'Brave New World', 
    author: 'Aldous Huxley', 
    genre: 'Dystopian', 
    publishedYear: 1932, 
    summary: 'A dystopian novel that explores a technologically advanced society that has eradicated pain and suffering, but at the cost of individuality and freedom.'
  },
  { 
    id: 12, 
    title: 'The Picture of Dorian Gray', 
    author: 'Oscar Wilde', 
    genre: 'Philosophical Fiction', 
    publishedYear: 1890, 
    summary: 'A novel about a young man who wishes for his portrait to age instead of him, leading to moral decay.'
  }
];


// Define a route to get the data
app.get('/api/books', (req, res) => {
  res.json(books); // Send the data as JSON
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
