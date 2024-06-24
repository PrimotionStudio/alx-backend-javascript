#!/usr/bin/node
export default function iterateThroughObject(reportWithIterator) {
	let return_str = "";
	let x = 0;
	for (const emp of reportWithIterator) {
		if (x != 0) {
			return_str += " | ";
		}
		return_str += emp;
		x = 1;
	}
	return return_str;
}
