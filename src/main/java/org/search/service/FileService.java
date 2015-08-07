package org.search.service;

import java.util.List;

import org.search.model.FileItem;

public interface FileService {

	/**
	 * returns a list of FileItem under the specified location matching the
	 * searcValue
	 *
	 * @param searchValue
	 * @param location
	 * @return
	 */
	public List<FileItem> loadFiles(String searchValue, String location);
}
