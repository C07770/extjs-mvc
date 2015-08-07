package org.search;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.commons.lang.StringUtils;
import org.search.model.Book;
import org.search.requestmodel.Filter;
import org.search.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

@Controller
@RequestMapping("api")
public class BookController {

	BookService bookService;

	@Autowired
	public BookController(BookService bookService) {
		this.bookService = bookService;
	}

	@RequestMapping(value = "book/save", method = RequestMethod.POST)
	@ResponseBody
	public boolean saveBook(@RequestBody Book book) {
		return bookService.addBook(book);
	}

	@SuppressWarnings("unchecked")
	@ResponseBody
	@RequestMapping(value = "book/loadBooks")
	public Map<String, List<Book>> loadAllBooks(@RequestParam int page,
			@RequestParam int start, @RequestParam int limit,
			@RequestParam(value = "filter", required = false) String filter) {

		List<Filter> filters = new ArrayList<Filter>();
		if (filter != null) {
			ObjectMapper mapper = new ObjectMapper();
			try {
				filters = mapper.readValue(filter,
						new TypeReference<List<Filter>>() {
						});

			} catch (JsonParseException e) {
				e.printStackTrace();
			} catch (JsonMappingException e) {
				e.printStackTrace();
			} catch (IOException e) {
				e.printStackTrace();
			}

		}

		Map<String, List<Book>> books = new HashMap<String, List<Book>>();

		if (!filters.isEmpty()) {

			List<Book> rs1 = new ArrayList<Book>();
			List<Book> rs2 = new ArrayList<Book>();

			for (int i = 0; i < filters.size(); i++) {
				if (filters.get(i).getProperty().equals("title"))
					rs1 = bookService.getBookByTitle(filters.get(i).getValue());
				else if (filters.get(i).getProperty().equals("author"))
					rs2 = bookService
							.getBookByAuthor(filters.get(i).getValue());
			}

			if (rs1.isEmpty())
				books.put("books", rs2);
			else if (rs2.isEmpty())
				books.put("books", rs1);
			else {
				List<Book> common = new ArrayList<Book>();
				for (Book b : rs1) {
					if (rs2.contains(b))
						common.add(b);
				}
				books.put("books", common);
				System.out.println("common " + common);
			}

			System.out.println("rs1 " + rs1);
			System.out.println("rs2 " + rs2);
		} else
			books.put("books", bookService.listBooks());

		return books;
	}

	@RequestMapping(value = "book/delete", method = RequestMethod.POST)
	@ResponseBody
	public boolean deleteBooks(@RequestBody Book book) {
		return bookService.removeBook(book);
	}

	@RequestMapping(value = "book/updateBook", method = RequestMethod.POST)
	@ResponseBody
	public boolean updateBooks(@RequestBody Book book) {
		bookService.updateBook(book);
		return true;
	}

	@RequestMapping(value = "getbook/{requestType}/{query}", method = RequestMethod.GET)
	@ResponseBody
	public Map<String, List<Book>> getSuggesionList(
			@PathVariable String requestType, @PathVariable String query) {
		Map<String, List<Book>> books = new HashMap<String, List<Book>>();
		if (StringUtils.equalsIgnoreCase("title", requestType)) {
			books.put("books", bookService.getBookByTitle(query));
		} else if (StringUtils.equalsIgnoreCase("author", requestType)) {
			books.put("books", bookService.getBookByAuthor(query));
		}
		return books;
	}

}