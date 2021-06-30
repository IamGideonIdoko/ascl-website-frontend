import { v4 as uuidv4 } from 'uuid';

export const renameFileWithPrefix = (fileName) => {
	//site domain name
	const siteName = "ASCL_Site";

	//get the extension of the file
	const ext = fileName.split('.').pop();

	//remove all none word characters from generated uuid
	const wordUuid = uuidv4().replace(/\W/gi, "");

	//get the first 10 characters from the result
	const shortRandChars = wordUuid.slice(0, 10);

	//create extension with the dot
	const dotExt = "." + ext;

	//create a ext regex
	const extRegex = new RegExp(`${dotExt}`, "ig");

	//remove the extension from the initial filename
	const fileNameMinusExt = fileName.replace(extRegex, "");

	//create a new filename
	const newFileName = fileNameMinusExt + "_" + siteName + "_" + shortRandChars + dotExt;

	return newFileName;
}
