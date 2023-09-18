import library from "../db.js";

export const getBooks = (req, res) => res.json(library);

export const searchBooks = (req, res) => {
  const { title } = req.query;

  const titleToSearch = title.toLowerCase();

  if (!titleToSearch) {
    return res
      .status(400)
      .json({ error: "Debes proporcionar un título para buscar." });
  }

  const results = library.filter(
    (book) =>
      book.book.title && book.book.title.toLowerCase().includes(titleToSearch)
  );

  if (results.length === 0) {
    return res.status(404).json({
      message: "No se encontraron libros que coincidan con la búsqueda.",
    });
  }

  res.json(results);
};
