import rp from 'request-promise';
import cheerio from 'cheerio';

export async function getRawData(req, res) {
	let imagesSrc = [];
	const url = 'https://en.wikipedia.org/wiki/List_of_Presidents_of_the_United_States';
	try {
		const html = await rp(url);
		const $ = cheerio.load(html);
		const text = $.text();
		const images = $('img');

		for (let i = 0; i < images.length; i++) {
			console.log(images[i].attribs.src);
			imagesSrc.push(images[i].attribs.src);
		}
		res.json({
			success: true,
			result: 'Successfully completed request.',
			data: {
				images: imagesSrc,
				text: text
			}
		});
	} catch (err) {
		res.json({ success: false, result: 'Error occurred while performing request', data: err });
	}

}