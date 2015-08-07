package org.search.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

import org.search.model.Book;
import org.springframework.stereotype.Repository;

@Repository
public class BookServiceImpl implements BookService {

	private static List<Book> books = new ArrayList<Book>();

	static {
		books.add(new Book(1001, "JDBC, Servlet and JSP", "Santosh Kumar", 300,
				12000));
		books.add(new Book(1002, "Head First Java", "Kathy Sierra", 550, 2500));
		books.add(new Book(1003, "Java SCJP Certification", "Khalid Mughal",
				650, 5500));
		books.add(new Book(1004, "Spring and Hinernate", "Santosh Kumar", 350,
				2500));
		books.add(new Book(1005, "Mastering C++", "K. R. Venugopal", 400, 1200));
	}

	@Override
	public boolean addBook(Book book) {
		boolean flag = true;
		while (flag) {
			flag = false;
			book.setId(new Random().nextInt(1000));
			for (Book b1 : books) {
				if (b1.getId() == book.getId())
					flag = true;
			}
		}
		return books.add(book);
	}

	@Override
	public boolean removeBook(Book book) {
		return books.remove(book);
	}

	@Override
	public List<Book> listBooks() {
		return books;
	}

	@Override
	public void updateBook(Book book) {
		int index = books.indexOf(book);
		if (index != -1) {
			books.add(index, book);
		}
	}

	@Override
	public Book getBookById(Integer bookId) {
		Book b = null;
		for (Book b1 : books) {
			if (b1.getId() == bookId) {
				return b1;
			}
		}
		return b;
	}

	@Override
	public List<Book> getBookByTitle(String query) {
		String title = "";
		query = query.toLowerCase();
		List<Book> matched = new ArrayList<Book>();
		for (Book book : books) {
			title = book.getTitle().toLowerCase();
			if (title.startsWith(query)) {
				matched.add(book);
			}
		}
		return matched;
	}

	@Override
	public List<Book> getBookByAuthor(String query) {
		String author = "";
		query = query.toLowerCase();
		List<Book> matched = new ArrayList<Book>();
		for (Book book : books) {
			author = book.getAuthor().toLowerCase();
			if (author.startsWith(query)) {
				matched.add(book);
			}
		}
		return matched;
	}

}