import type { Question, VolunteerTypeId } from '../types/quiz'

interface Props {
  question: Question
  onAnswer: (type: VolunteerTypeId) => void
}

export function QuestionCard({ question, onAnswer }: Props) {
  return (
    <div className="animate-fade-slide-in bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-6 border border-warm-100">
      <h2 className="text-lg sm:text-xl font-semibold text-warm-800 mb-6 leading-snug">
        {question.text}
      </h2>
      <div className="space-y-3">
        {question.answers.map((answer, i) => (
          <button
            key={i}
            onClick={() => onAnswer(answer.type)}
            className="w-full text-left p-4 min-h-[56px] text-base text-warm-800 rounded-2xl border-2 border-warm-100 bg-white/60 hover:border-warm-400 hover:bg-warm-50 active:bg-warm-100 transition-all duration-150"
          >
            {answer.text}
          </button>
        ))}
      </div>
    </div>
  )
}
