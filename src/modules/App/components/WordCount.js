import React  from 'react';
import _ from 'lodash';
import Carousel from "./Carousel";

const WordCount = props => {
	let sanitizedText = props.text.replace(/[^a-zA-Z ]/g, "");

	function wordFreq(string) {
		return string.replace(/[.]/g, '')
			.split(/\s/)
			.reduce((map, word) =>
					Object.assign(map, {
						[word]: (map[word])
							? map[word] + 1
							: 1,
					}),
				{}
			);
	}

	function sortObjectByValue(object) {
		delete object[""];
		return _.fromPairs(_.sortBy(_.toPairs(object), 1).reverse());
	}

	const sortedObjects = sortObjectByValue(wordFreq(sanitizedText));

	const mostFrequent = Object.entries(sortedObjects).slice(0, 10);

	return (
		<div className="word-count-container">
			<div className="word-count">
				<table className="table">
					<thead>
					<tr>
						<th scope="col">Word</th>
						<th scope="col">Frequency</th>
					</tr>
					</thead>
					<tbody>
					{
						mostFrequent.map((item) => {
							return <tr><th scope="row">{item[0]}</th><th>{item[1]}</th></tr>
						})
					}
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default WordCount;