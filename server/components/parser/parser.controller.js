import rp from 'request-promise';
import cheerio from 'cheerio';

export async function getRawData(req, res) {
	let imagesSrc = [];
	try {
		const url = req.body.url;
		const html = await rp(url);
		const $ = cheerio.load(html);
		const protocol = new URL(url).protocol;
		const text = $.text();
		const images = $('img');

		// Store image sources
		for (let i = 0; i < images.length; i++) {
			//console.log(images[i].attribs.src);
			imagesSrc.push(protocol + images[i].attribs.src);
		}

		res.json({
			success: true,
			message: 'Successfully completed request',
			results: {
				images: imagesSrc,
				text: text
			}
		});
	} catch (err) {
		res.json({ success: false, message: 'Error occurred while performing request', results: err });
	}

}