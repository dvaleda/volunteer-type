import { useState } from 'react'
import { questions, volunteerTypes } from './data/questions'
import type { VolunteerTypeId } from './types/quiz'
import { QuestionCard } from './components/QuestionCard'
import { ProgressBar } from './components/ProgressBar'
import { ResultCard } from './components/ResultCard'

type Phase = 'intro' | 'quiz' | 'result'

export default function App() {
  const [phase, setPhase] = useState<Phase>('intro')
  const [questionIndex, setQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState<VolunteerTypeId[]>([])

  const handleStart = () => {
    setPhase('quiz')
    setQuestionIndex(0)
    setAnswers([])
  }

  const handleAnswer = (type: VolunteerTypeId) => {
    const newAnswers = [...answers, type]
    setAnswers(newAnswers)

    if (questionIndex + 1 < questions.length) {
      setQuestionIndex(questionIndex + 1)
    } else {
      setPhase('result')
    }
  }

  const getResult = () => {
    const counts: Record<VolunteerTypeId, number> = {
      organizator: 0,
      izvodac: 0,
      povezivac: 0,
      kreativac: 0,
    }
    for (const type of answers) {
      counts[type]++
    }
    const maxCount = Math.max(...Object.values(counts))
    const winnerId = answers.find((type) => counts[type] === maxCount)!
    return volunteerTypes.find((t) => t.id === winnerId)!
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-warm-50 via-orange-50 to-amber-50 flex flex-col items-center justify-center p-4">
      {phase === 'intro' && (
        <div className="animate-fade-slide-in bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 max-w-md w-full text-center border border-warm-100">
          <div className="text-5xl mb-4">🙌</div>
          <h1 className="text-2xl sm:text-3xl font-bold text-warm-800 mb-3">
            Kakav si volonter?
          </h1>
          <p className="text-warm-700/80 mb-8 leading-relaxed">
            Odgovori na {questions.length} pitanja i otkrij svoju volontersku supermoć!
          </p>
          <button
            onClick={handleStart}
            className="w-full px-6 py-4 bg-warm-500 text-white text-lg font-semibold rounded-2xl hover:bg-warm-600 active:bg-warm-700 transition-colors shadow-lg shadow-warm-500/25"
          >
            Započni kviz
          </button>
        </div>
      )}

      {phase === 'quiz' && (
        <div className="w-full max-w-md">
          <ProgressBar current={questionIndex + 1} total={questions.length} />
          <QuestionCard
            key={questionIndex}
            question={questions[questionIndex]}
            onAnswer={handleAnswer}
          />
        </div>
      )}

      {phase === 'result' && (
        <ResultCard result={getResult()} onRestart={handleStart} />
      )}
    </div>
  )
}
