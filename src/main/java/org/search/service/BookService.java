package org.search.service;

import java.util.List;

import org.search.model.Book;
import org.springframework.stereotype.Component;

@Component
public interface BookService {

	public boolean addBook(Book book);

	public void updateBook(Book book);

	public List<Book> listBooks();

	public Book getBookById(Integer bookId);

	public boolean removeBook(Book book);

	public List<Book> getBookByTitle(String title);

	public List<Book> getBookByAuthor(String query);
}