import { Library } from "../interface/books";

export const api = async (search?: string): Promise<Library[] | undefined> => {
  let apiUrl = "https://list-books-three.vercel.app/books";

  if (search) {
    apiUrl = `https://list-books-three.vercel.app/books/search?title=${search}`;
  }

  const res = await fetch(apiUrl);

  if (!res.ok) {
    throw new Error("Network error");
  }

  return res.json();
};
