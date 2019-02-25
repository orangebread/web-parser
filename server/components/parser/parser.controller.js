import url from 'url';
import rp from 'request-promise';
import cheerio from 'cheerio';

export async function getRawData(req, res) {
	let imagesSrc = [];
	try {
		const base = req.body.url;
		const options = {
			uri: base,
			method: 'GET',
			resolveWithFullResponse: true
		};
		const html = await rp(options);
		const $ = cheerio.load(html.body);
		const text = $.text();
		const images = $('img');

		// Store image sources
		images.each( function() {
			const link = $(this).attr('src');
			const fullImagePath = url.resolve(base, link);
			if (isValidImage(fullImagePath))
				imagesSrc.push(fullImagePath);
		});

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

// Helper
function isValidImage(url) {
	if(!url || url.match(/(jpg|jpeg|png|svg|gif|bmp|tiff|tif)/)) {
		return true
	}
	else {
		return false;
	}
}