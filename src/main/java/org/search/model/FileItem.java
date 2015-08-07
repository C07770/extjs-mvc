package org.search.model;

public class FileItem {

	private String fileName;

	private String fileExt;

	public FileItem(String fileName, String fileExt) {
		this.fileName = fileName;
		this.fileExt = fileExt;
	}

	public String getFileName() {
		return fileName;
	}

	public void setFileName(String fileName) {
		this.fileName = fileName;
	}

	public String getFileExt() {
		return fileExt;
	}

	public void setFileExt(String fileExt) {
		this.fileExt = fileExt;
	}
}
