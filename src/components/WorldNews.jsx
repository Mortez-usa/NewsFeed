import React from 'react';
import picture from './picture.jpg';

function WorldNews({ worldNewsGetData }) {
	return (
		<div>
			<div className='news-container'>
				<h2>World News</h2>
				<div className='column-one'>
					<div className='headline-card'>
						<h4 className='headline'>
							Three Thousand Years of Longing review _ djinn in need of a tonic
						</h4>
					</div>
					{/* <h2 className='headline'>
				{worldNewsGetData && worldNewsGetData[0].fields.headline}
				</h2> */}
					<img className='img-banner' src={picture} />
					{/* <img className='img-banner' src={worldNewsGetData && worldNewsGetData[0].fields.thumbnail}/> */}

					<h4 className='headline'>
						Three Thousand Years of Longing review _ djinn in need of a tonic
					</h4>
					{/* <h2 className='headline'>
					{worldNewsGetData && worldNewsGetData[0].fields.headline}
					</h2> */}
					<img className='img-banner' src={picture} />
					{/* <img className='img-banner' src={worldNewsGetData && worldNewsGetData[0].fields.thumbnail}/> */}
				</div>

				<div className='column-two'>
					<h4 className='headline'>
						Three Thousand Years of Longing review _ djinn in need of a tonic
					</h4>
					{/* <h2 className='headline'>
				{worldNewsGetData && worldNewsGetData[0].fields.headline}
				</h2> */}
					<img className='img-banner' src={picture} />
					{/* <img className='img-banner' src={worldNewsGetData && worldNewsGetData[0].fields.thumbnail}/> */}

					<h4 className='headline'>
						Three Thousand Years of Longing review _ djinn in need of a tonic
					</h4>
					{/* <h2 className='headline'>
				{worldNewsGetData && worldNewsGetData[0].fields.headline}
				</h2> */}
					{/* <img className='img-banner' src={worldNewsGetData && worldNewsGetData[0].fields.thumbnail}/> */}
					<img className='img-banner' src={picture} />
				</div>
			</div>
			<hr></hr>
			<div className='news-container'>
				<h2>United States</h2>
				<div className='column-one'>
					<img className='img-banner' src={picture} />
					{/* <img className='img-banner' src={worldNewsGetData && worldNewsGetData[0].fields.thumbnail}/> */}
					<h4 className='headline'>
						Three Thousand Years of Longing review _ djinn in need of a tonic
					</h4>
					{/* <h2 className='headline'>
				{worldNewsGetData && worldNewsGetData[0].fields.headline}
				</h2> */}

					<img className='img-banner' src={picture} />
					{/* <img className='img-banner' src={worldNewsGetData && worldNewsGetData[0].fields.thumbnail}/> */}
					<h4 className='headline'>
						Three Thousand Years of Longing review _ djinn in need of a tonic
					</h4>
					{/* <h2 className='headline'>
				{worldNewsGetData && worldNewsGetData[0].fields.headline}
				</h2> */}
				</div>

				<div className='column-two'>
					<img className='img-banner' src={picture} />
					{/* <img className='img-banner' src={worldNewsGetData && worldNewsGetData[0].fields.thumbnail}/> */}
					<h4 className='headline'>
						Three Thousand Years of Longing review _ djinn in need of a tonic
					</h4>
					{/* <h2 className='headline'>
				{worldNewsGetData && worldNewsGetData[0].fields.headline}
				</h2> */}

					<img className='img-banner' src={picture} />
					{/* <img className='img-banner' src={worldNewsGetData && worldNewsGetData[0].fields.thumbnail}/> */}
					<h4 className='headline'>
						Three Thousand Years of Longing review _ djinn in need of a tonic
					</h4>
					{/* <h2 className='headline'>
				{worldNewsGetData && worldNewsGetData[0].fields.headline}
				</h2> */}
				</div>
			</div>
		</div>
	);
}

export default WorldNews;
