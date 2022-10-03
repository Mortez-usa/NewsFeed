import React from 'react';

function WorldNews({worldNewsGetData}) {
	return (
		<div>
			{worldNewsGetData &&
				worldNewsGetData.map((obj) => {
					return (
						<div>
							<img src={obj.fields.thumbnail} alt={obj.id} />
							<h2>{obj.fields.headline}</h2>
						</div>
					);
				})

			}
		</div>
	);
}

export default WorldNews;