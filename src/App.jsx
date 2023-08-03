import './App.css'

import {
	css,
	figma,
	git,
	html,
	javascript,
	react,
	redux,
	tailwind,
	nextjs,
	vite,
	routerdom,
	vercel,
	railway,
	trello,
	netlify,
	materialui,
	reacthookform,
} from './assets/index'

const TAGS = [css, html, javascript, react, nextjs, vite, git]
const LIBS = [materialui, reacthookform, tailwind, redux, routerdom]
const TECH = [figma, trello, vercel, railway, netlify]
const DURATION = 15000
const ROWS = 1
const TAGS_PER_ROW = 7

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min
const shuffle = (arr) => [...arr].sort(() => 0.5 - Math.random())

const InfiniteLoopSlider = ({ children, duration, reverse = false }) => {
	return (
		<div
			className='loop-slider'
			style={{
				'--duration': `${duration}ms`,
				'--direction': reverse ? 'reverse' : 'normal',
			}}
		>
			<div className='inner'>
				{children}
				{children}
			</div>
		</div>
	)
}

const Tag = ({ text }) => (
	<div className='tag'>
		<img src={text} alt={text} style={{ width: '34px' }} />
	</div>
)

const App = () => (
	<div className='app'>
		<div className='tag-list'>
			{[...new Array(ROWS)].map((_, i) => (
				<>
					{/* TAGS */}
					<InfiniteLoopSlider
						key={i}
						duration={random(DURATION - 5000, DURATION + 5000)}
						reverse={i % 2}
					>
						{shuffle(TAGS)
							.slice(0, TAGS_PER_ROW)
							.map((tag) => (
								<Tag text={tag} key={tag} />
							))}
					</InfiniteLoopSlider>

					{/* LIBS */}
					<InfiniteLoopSlider
						key={i}
						duration={random(DURATION - 5000, DURATION + 5000)}
						reverse={i % 2}
					>
						{shuffle(LIBS)
							.slice(0, TAGS_PER_ROW)
							.map((tag) => (
								<Tag text={tag} key={tag} />
							))}
					</InfiniteLoopSlider>

					{/* TECH */}
					<InfiniteLoopSlider
						key={i}
						duration={random(DURATION - 5000, DURATION + 5000)}
						reverse={i % 2}
					>
						{shuffle(TECH)
							.slice(0, TAGS_PER_ROW)
							.map((tag) => (
								<Tag text={tag} key={tag} />
							))}
					</InfiniteLoopSlider>
				</>
			))}
		</div>
	</div>
)

export default App
