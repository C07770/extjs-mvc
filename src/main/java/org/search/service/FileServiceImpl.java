package org.search.service;

import java.io.File;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import org.apache.commons.collections.CollectionUtils;
import org.apache.commons.io.FileUtils;
import org.apache.commons.io.FilenameUtils;
import org.apache.commons.io.filefilter.IOFileFilter;
import org.apache.commons.lang.StringUtils;
import org.search.model.FileItem;
import org.springframework.stereotype.Component;

@Component
public class FileServiceImpl implements FileService {

	/**
	 * Look files with name containing the search value. If the location is
	 * empty then use user's home directory.
	 *
	 * @param searchValue
	 *            - if empty then it returns all the files in the specified
	 *            location
	 * @param location
	 *            - if empty then use user's home directory
	 * @return List<FileItem>
	 */
	@Override
	public List<FileItem> loadFiles(final String searchValue,
			final String location) {
		final String baseLocation;
		if (StringUtils.isEmpty(location)) {
			baseLocation = FileUtils.getUserDirectoryPath();
		} else {
			baseLocation = location;
		}

		Collection<File> files = FileUtils.listFiles(new File(baseLocation),
				new IOFileFilter() {
					@Override
					public boolean accept(File file) {
						return StringUtils.isEmpty(searchValue)
								|| StringUtils.contains(file.getName(),
										searchValue);
					}

					@Override
					public boolean accept(File file, String s) {
						return StringUtils.isEmpty(searchValue)
								|| StringUtils.contains(s, searchValue);
					}
				}, null);

		List<FileItem> fileItems = new ArrayList<FileItem>();

		if (CollectionUtils.isNotEmpty(files)) {
			for (File f : files) {
				fileItems.add(new FileItem(f.getName(), FilenameUtils
						.getExtension(f.getName())));
			}
		}

		return fileItems;
	}
}
