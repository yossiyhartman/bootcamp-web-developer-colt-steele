import { franc } from "franc";
import langs from "langs";
import colors from "colors";

const query = process.argv.slice(2)[0];

if (query != undefined) {
	const guess = franc(query);
	if (guess !== "und") {
		const lan = langs.where(3, guess);
		console.log(`your language is ${lan.name}`.green);
	} else {
		console.log(`Couldn't find a language`);
	}
} else {
	console.log("please enter query");
}
