// Sample data for demonstration
const books = [
    { title: "Book 1", author: "Author 1", pages: 200, year: 2020 },
    { title: "Book 2", author: "Author 2", pages: 250, year: 2019 },
    { title: "Book 3", author: "Author 3", pages: 180, year: 2021 },
    { title: "Book 4", author: "Author 4", pages: 220, year: 2018 }
];

const bookList = document.getElementById('book-list');
const bookInfo = document.getElementById('book-info');

// Function to display books
function displayBooks() {
    bookList.innerHTML = '';
    books.forEach((book, index) => {
        const bookElement = document.createElement('div');
        bookElement.classList.add('book');
        bookElement.innerHTML = `<h3>${book.title}</h3><p>By ${book.author}</p>`;
        bookElement.addEventListener('click', () => displayBookDetails(index));
        bookList.appendChild(bookElement);
    });
}

// Function to display book details
function displayBookDetails(index) {
    const book = books[index];
    bookInfo.innerHTML = `
        <h3>${book.title}</h3>
        <p><strong>Author:</strong> ${book.author}</p>
        <p><strong>Pages:</strong> ${book.pages}</p>
        <p><strong>Year:</strong> ${book.year}</p>
    `;
}

// Initial display of books
displayBooks();
