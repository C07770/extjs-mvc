package org.search;

import java.util.List;

import org.search.model.FileItem;
import org.search.service.FileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class HomeController {

	@Autowired
	private FileService fileService;

	/**
	 * server response for the url http://<ip-or-host>:port/home request The
	 * method returns home.jsp located under WEB-INF/pages
	 *
	 * @return
	 */
	@RequestMapping(value = "/home", method = RequestMethod.GET)
	public String home() {
		return "home";
	}

	/**
	 * Accepts GET request from AJAX for
	 *
	 * @param searchValue
	 *            - filename to search in directory
	 * @param baseLocation
	 *            - base location to search, if empty/null user's home directory
	 *            is used
	 * @return
	 */
	@RequestMapping(value = "/services/files", method = RequestMethod.GET)
	public @ResponseBody List<FileItem> findFiles(String searchValue,
			String baseLocation) {
		return this.fileService.loadFiles(searchValue, baseLocation);
	}
}