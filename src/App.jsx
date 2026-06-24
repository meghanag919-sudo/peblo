import { useEffect, useRef, useState } from 'react'
import Confetti from 'react-confetti'
import Buddy from './components/Buddy'
import StoryCard from './components/StoryCard'
import QuizCard from './components/QuizCard'
import Button from './components/Button'
import './App.css'

const stories = [
  {
    title: 'Pip and the Blue Gear',
    text: "Once upon a time, a clever little robot named Pip lost his shiny blue gear in the Whispering Woods.",
    videoUrl: '/videos/sample1.mp4',
    imageUrl: '/images/story1.svg',
    emoji: '🤖',
    color: '#dbeafe',
    accent: '#0369a1',
    quizzes: [
      { question: "What colour was Pip's lost gear?", options: ['Red', 'Green', 'Blue', 'Yellow'], answer: 'Blue' },
      { question: 'Where did Pip lose the gear?', options: ['Whispering Woods', 'Sunny Plains', 'Old Mill', 'Crystal Lake'], answer: 'Whispering Woods' },
      { question: 'Who lost the gear?', options: ['Pip', 'Luna', 'Milo', 'Zara'], answer: 'Pip' },
    ],
  },
  {
    title: 'Luna and the Moon Map',
    text: "Luna the explorer lost her glowing map while chasing fireflies near the Crystal Lake.",
    videoUrl: '/videos/sample2.mp4',
    imageUrl: '/images/story2.svg',
    emoji: '🌙',
    color: '#f0e7fe',
    accent: '#7c3aed',
    quizzes: [
      { question: 'Where did Luna lose the map?', options: ['Crystal Lake', 'Sunny Plains', 'Old Mill', 'Whispering Woods'], answer: 'Crystal Lake' },
      { question: 'What was Luna chasing?', options: ['Fireflies', 'Butterflies', 'Stars', 'Balloons'], answer: 'Fireflies' },
      { question: 'What did Luna lose?', options: ['Map', 'Hat', 'Key', 'Toy'], answer: 'Map' },
    ],
  },
  {
    title: 'Milo and the Missing Key',
    text: "Milo the cat found a shiny key but misplaced it in the hidden garden during his morning stroll.",
    videoUrl: '/videos/sample3.mp4',
    imageUrl: '/images/story3.svg',
    emoji: '🐱',
    color: '#fef3c7',
    accent: '#d97706',
    quizzes: [
      { question: 'What did Milo misplace?', options: ['A key', 'A hat', 'A toy', 'A scarf'], answer: 'A key' },
      { question: 'Where was the key lost?', options: ['Hidden garden', 'Porch', 'Attic', 'Barn'], answer: 'Hidden garden' },
      { question: 'Who is Milo?', options: ['A cat', 'A dog', 'A robot', 'A bird'], answer: 'A cat' },
    ],
  },
  {
    title: 'Zara and the Star Seed',
    text: "Zara planted a glowing star seed that sprouted a tiny lantern-tree overnight.",
    videoUrl: '/videos/sample4.mp4',
    imageUrl: '/images/story4.svg',
    emoji: '⭐',
    color: '#fce7f3',
    accent: '#db2777',
    quizzes: [
      { question: 'What did Zara plant?', options: ['Star seed', 'Apple seed', 'Stone', 'Feather'], answer: 'Star seed' },
      { question: 'What grew from the seed?', options: ['Lantern-tree', 'Flower', 'Bush', 'Vine'], answer: 'Lantern-tree' },
      { question: 'When did it grow?', options: ['Overnight', 'Years later', 'Never', 'In winter'], answer: 'Overnight' },
    ],
  },
  {
    title: 'Olli and the Rainbow Fish',
    text: "Olli met a rainbow fish who lost a shiny scale and needed help finding it.",
    videoUrl: '/videos/sample5.mp4',
    imageUrl: '/images/story5.svg',
    emoji: '🐠',
    color: '#d1fae5',
    accent: '#059669',
    quizzes: [
      { question: 'Who lost a shiny scale?', options: ['Rainbow fish', 'Pip', 'Milo', 'Zara'], answer: 'Rainbow fish' },
      { question: 'Who helps the fish?', options: ['Olli', 'Luna', 'Milo', 'Pip'], answer: 'Olli' },
      { question: 'What did the fish lose?', options: ['Scale', 'Fin', 'Hat', 'Map'], answer: 'Scale' },
    ],
  },
  {
    title: 'Nora and the Night Lantern',
    text: "Nora's lantern went out in the windy meadow and she searched for a new light.",
    videoUrl: '/videos/sample6.mp4',
    imageUrl: '/images/story6.svg',
    emoji: '🏮',
    color: '#fed7aa',
    accent: '#ea580c',
    quizzes: [
      { question: 'What happened to Nora’s lantern?', options: ['It went out', 'It exploded', 'It flew away', 'It turned blue'], answer: 'It went out' },
      { question: 'Where did Nora search?', options: ['Windy meadow', 'Basement', 'Library', 'Cave'], answer: 'Windy meadow' },
      { question: 'What did she look for?', options: ['Light', 'Book', 'Key', 'Hat'], answer: 'Light' },
    ],
  },
  {
    title: 'Ivy and the Secret Door',
    text: "Ivy discovered a secret door behind the ivy that led to a tiny hidden library.",
    videoUrl: '/videos/sample7.mp4',
    imageUrl: '/images/story7.svg',
    emoji: '🚪',
    color: '#dcfce7',
    accent: '#16a34a',
    quizzes: [
      { question: 'What did Ivy find?', options: ['Secret door', 'Treasure chest', 'Boat', 'Tunnel'], answer: 'Secret door' },
      { question: 'What was behind the door?', options: ['Hidden library', 'Garden', 'Cave', 'Kitchen'], answer: 'Hidden library' },
      { question: 'What covers the door?', options: ['Ivy', 'Moss', 'Paint', 'Stickers'], answer: 'Ivy' },
    ],
  },
  {
    title: 'Benny and the Balloon',
    text: "Benny's bright balloon floated away over the hills and he chased it until sunset.",
    videoUrl: '/videos/sample8.mp4',
    imageUrl: '/images/story8.svg',
    emoji: '🎈',
    color: '#ede9fe',
    accent: '#a855f7',
    quizzes: [
      { question: 'What floated away?', options: ['Balloon', 'Kite', 'Hat', 'Boot'], answer: 'Balloon' },
      { question: 'Who chased it?', options: ['Benny', 'Luna', 'Milo', 'Olli'], answer: 'Benny' },
      { question: 'When did he chase it?', options: ['Until sunset', 'All night', 'Next day', 'In the morning'], answer: 'Until sunset' },
    ],
  },
  {
    title: 'Tara and the Tiny Ship',
    text: "Tara built a tiny paper ship that sailed across the puddle to a secret island.",
    videoUrl: '/videos/sample9.mp4',
    imageUrl: '/images/story9.svg',
    emoji: '⛵',
    color: '#e0f2fe',
    accent: '#0284c7',
    quizzes: [
      { question: 'What did Tara build?', options: ['Paper ship', 'House', 'Kite', 'Bridge'], answer: 'Paper ship' },
      { question: 'Where did it sail?', options: ['Across the puddle', 'Across the ocean', 'Across the river', 'Across the desert'], answer: 'Across the puddle' },
      { question: 'Where did it reach?', options: ['Secret island', 'Mainland', 'Market', 'Forest'], answer: 'Secret island' },
    ],
  },
  {
    title: 'Kai and the Cloud Song',
    text: "Kai hummed a cloud song that made the clouds dance and rain tiny confetti drops.",
    videoUrl: '/videos/sample10.mp4',
    imageUrl: '/images/story10.svg',
    emoji: '☁️',
    color: '#f3f4f6',
    accent: '#6b7280',
    quizzes: [
      { question: 'Who hummed a song?', options: ['Kai', 'Zara', 'Nora', 'Luna'], answer: 'Kai' },
      { question: 'What did the clouds do?', options: ['Dance', 'Sleep', 'Hide', 'Fly away'], answer: 'Dance' },
      { question: 'What fell from the sky?', options: ['Confetti drops', 'Snow', 'Fish', 'Leaves'], answer: 'Confetti drops' },
    ],
  },
];

function App() {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [quizIndex, setQuizIndex] = useState(0)
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [showQuiz, setShowQuiz] = useState(false)
  const [completed, setCompleted] = useState(false)
  const [videoReady, setVideoReady] = useState(false)
  const [audioSupported, setAudioSupported] = useState(true)
  const [showOverlay, setShowOverlay] = useState(true)

  const selectedStory = stories[selectedIndex]
  const currentQuiz = selectedStory.quizzes[quizIndex]
  const quizNumber = quizIndex + 1
  const nextStory = stories[(selectedIndex + 1) % stories.length]
  const preloaderRef = useRef(null)

  useEffect(() => {
    setQuizIndex(0)
    setMessage('')
    setShowQuiz(false)
    setCompleted(false)
    setVideoReady(true)
    setLoading(false)
  }, [selectedIndex])

  useEffect(() => {
    if (preloaderRef.current) {
      preloaderRef.current.load()
    }
  }, [nextStory])

  const readStory = () => {
    if (!('speechSynthesis' in window)) {
      setAudioSupported(false)
      setShowQuiz(true)
      return
    }

    setAudioSupported(true)
    setLoading(true)
    const utterance = new SpeechSynthesisUtterance(selectedStory.text)
    utterance.lang = 'en-US'
    utterance.rate = 0.95

    utterance.onend = () => {
      setLoading(false)
      setShowQuiz(true)
      setVideoReady(true)
    }

    utterance.onerror = () => {
      setLoading(false)
      setMessage('Story playback had a problem, but you can still watch the video.')
      setShowQuiz(true)
      setVideoReady(true)
    }

    window.speechSynthesis.cancel()
    window.speechSynthesis.speak(utterance)
  }

  const checkAnswer = (option) => {
    if (option === currentQuiz.answer) {
      const nextIndex = quizIndex + 1
      if (nextIndex < selectedStory.quizzes.length) {
        setMessage('Success! Great memory. Ready for the next question?')
        setQuizIndex(nextIndex)
      } else {
        setMessage('You got them all! Well done! 🎉')
        setCompleted(true)
        setShowQuiz(false)
      }
    } else {
      setMessage('Try again, you can do it!')
    }
  }

  const handleStoryChange = (index) => {
    setSelectedIndex(index)
  }

  const playNextStory = () => {
    setSelectedIndex((selectedIndex + 1) % stories.length)
  }

  return (
    <div className="container" style={{ '--surface-color': selectedStory.color }}>
      <div className="floating-shape shape1"></div>
      <div className="floating-shape shape2"></div>
      <div className="floating-shape shape3"></div>

      {showOverlay && (
        <div className="launch-overlay">
          <div className="launch-panel">
            <span className="launch-emoji">🎉</span>
            <h1>Welcome to Story Buddy</h1>
            <p>Enter a bright world of stories, video adventures, and fun learning quizzes.</p>
            <Button variant="primary" className="launch-button" onClick={() => setShowOverlay(false)}>
              Enter the story world
            </Button>
          </div>
        </div>
      )}

      <header className="app-header hero-banner">
        <div className="hero-copy">
          <div className="hero-pill">✨ Bright story adventures</div>
          <Buddy />
          <h1>Story Buddy</h1>
          <p>Pick a story, tap play, and enjoy colorful video tales with 3 quiz questions each.</p>
          <div className="hero-actions">
            <Button variant="primary" className="hero-cta" onClick={() => handleStoryChange(0)}>
              Start with Pip ➔
            </Button>
            <span className="hero-note">10 stories, playful illustrations, and fun learning.</span>
          </div>
        </div>
        <div className="hero-illustration">
          <div className="hero-card">
            <span className="hero-card-emoji">{selectedStory.emoji}</span>
            <div>
              <p className="hero-card-title">{selectedStory.title}</p>
              <p className="hero-card-copy">{selectedStory.text}</p>
            </div>
          </div>
        </div>
      </header>

      <div className="section-title-container">
        <span className="section-icon">📚</span>
        <h2 className="section-title">Choose Your Story Adventure</h2>
      </div>

      <div className="story-selector">
        {stories.map((story, index) => (
          <div
            key={story.title}
            className={`story-selector-card ${index === selectedIndex ? 'active' : ''}`}
            onClick={() => handleStoryChange(index)}
            style={{ 
              '--story-color-bg': story.color, 
              '--story-accent': story.accent 
            }}
          >
            <div className="story-selector-emoji-bg" style={{ backgroundColor: story.color }}>
              <span className="story-selector-emoji">{story.emoji}</span>
            </div>
            <div className="story-selector-details">
              <h3 className="story-selector-title">{story.title}</h3>
              <p className="story-selector-excerpt">{story.text}</p>
            </div>
            <div className="story-selector-status">
              <span className="status-label">
                {index === selectedIndex ? 'Playing' : 'Read'}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="section-title-container">
        <span className="section-icon">📖</span>
        <h2 className="section-title">Story Player & Quiz</h2>
      </div>

      <StoryCard
        title={selectedStory.title}
        story={selectedStory.text}
        readStory={readStory}
        loading={loading}
        videoUrl={selectedStory.videoUrl}
        imageUrl={selectedStory.imageUrl}
        showVideo={videoReady}
        onVideoReady={() => setVideoReady(true)}
        emoji={selectedStory.emoji}
        color={selectedStory.color}
        accent={selectedStory.accent}
      />

      {!audioSupported && (
        <p className="status-msg text-center">Your browser does not support speech playback. Use the video below to follow along.</p>
      )}

      {showQuiz && !completed && (
        <QuizCard
          storyTitle={selectedStory.title}
          quiz={currentQuiz}
          checkAnswer={checkAnswer}
          message={message}
          quizNumber={quizNumber}
          totalQuestions={selectedStory.quizzes.length}
        />
      )}

      {completed && (
        <div className="quiz-card success-card">
          <div className="success-emoji-container">🏆</div>
          <h2>You finished the quiz!</h2>
          <p>Fantastic job! Ready for a new story adventure?</p>
          <Button variant="success" className="next-story-btn" onClick={playNextStory}>
            Next Story ➔
          </Button>
        </div>
      )}

      <video ref={preloaderRef} preload="auto" className="hidden" src={nextStory.videoUrl} />

      {completed && <Confetti />}
    </div>
  )
}

export default App
