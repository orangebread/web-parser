import React  from 'react';

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

	console.log(wordFreq(sanitizedText));

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
					<tr>
						<th scope="row">1</th>
						<td>Mark</td>
					</tr>
					<tr>
						<th scope="row">2</th>
						<td>Jacob</td>
					</tr>
					<tr>
						<th scope="row">3</th>
						<td>Larry</td>
					</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default WordCount;