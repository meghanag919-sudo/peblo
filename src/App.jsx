import { useEffect, useRef, useState } from 'react'
import Confetti from 'react-confetti'
import Buddy from './components/Buddy'
import StoryCard from './components/StoryCard'
import QuizCard from './components/QuizCard'
import './App.css'

const stories = [
  {
    title: 'Pip and the Blue Gear',
    text: "Once upon a time, a clever little robot named Pip lost his shiny blue gear in the Whispering Woods.",
    videoUrl: '/videos/sample1.mp4',
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
    <div className="container">
      <header className="app-header">
        <Buddy />
        <h1>Story Buddy</h1>
        <p>Pick a story, tap play, and enjoy the video with your quiz.</p>
      </header>

      <div className="story-selector">
        {stories.map((story, index) => (
          <button
            key={story.title}
            className={`story-tab ${index === selectedIndex ? 'active' : ''}`}
            onClick={() => handleStoryChange(index)}
          >
            {story.title}
          </button>
        ))}
      </div>

      <StoryCard
        title={selectedStory.title}
        story={selectedStory.text}
        readStory={readStory}
        loading={loading}
        videoUrl={selectedStory.videoUrl}
        showVideo={videoReady}
        onVideoReady={() => setVideoReady(true)}
      />

      {!audioSupported && (
        <p className="status-msg">Your browser does not support speech playback. Use the video below to follow along.</p>
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
          <h2>You finished the quiz!</h2>
          <p>Ready for a new adventure?</p>
          <button className="read-btn" onClick={playNextStory}>Next Story</button>
        </div>
      )}

      <video
        ref={preloaderRef}
        preload="auto"
        style={{ display: 'none' }}
        src={nextStory.videoUrl}
      />

      {completed && <Confetti />}
    </div>
  )
}

export default App
