import Book from "../models/Book.js";

const createBook = async (req, res) => {
  const {
    title,
    author,
    description,
    price,
    genre,
    publisher,
    language,
    length,
    releaseDate,
    imageURL,
    isbn10,
    isbn13,
  } = req.body;

  console.log(req.body);
  if (
    !title ||
    !author ||
    !description ||
    !price ||
    !genre ||
    !releaseDate ||
    !publisher ||
    !language ||
    !length ||
    !imageURL ||
    !isbn10 ||
    !isbn13
  ) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const bookExists = await Book.findOne({ $or: [{ isbn10 }, { isbn13 }] });
  if (bookExists) {
    return res.status(409).json({ message: "Book already exists" });
  }
  try {
    const book = new Book({
      title,
      author,
      description,
      price,
      genre,
      releaseDate,
      publisher,
      language,
      length,
      imageURL,
      isbn10,
      isbn13,
    });

    await book.save();
    res.status(201).json({ message: "Book created successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createMultipleBooks = async (req, res) => {
  const books = req.body;
  try {
    await Book.insertMany(books);
    res.status(201).json({ message: "Books created successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
const getBookViaIsbn = async (req, res) => {
  const { isbn } = req.params;
  try {
    const books = await Book.find({
      $or: [{ isbn10: isbn }, { isbn13: isbn }],
    });

    if (!books) {
      return res.status(404).json({ message: "Book not found" });
    }

    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { createBook, createMultipleBooks, getAllBooks, getBookViaIsbn };