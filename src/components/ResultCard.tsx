import type { VolunteerType, VolunteerTypeId } from '../types/quiz'
import { volunteerTypes } from '../data/questions'

interface Props {
  result: VolunteerType
  onRestart: () => void
}

const getCompatibleType = (id: VolunteerTypeId) =>
  volunteerTypes.find((t) => t.id === id)!

export function ResultCard({ result, onRestart }: Props) {
  const compatible = getCompatibleType(result.compatibleWith)
  
  const shareText = `Ja sam ${result.name} ${result.emoji}! Koji tip volontera si ti? 🙌`
  const shareUrl = window.location.href
  
  const shareWhatsApp = () => {
    window.open(`https://wa.me/?text=${encodeURIComponent(shareText + '\n' + shareUrl)}`, '_blank')
  }
  
  const shareInstagram = async () => {
    if (navigator.share) {
      await navigator.share({ title: 'Kakav si volonter?', text: shareText, url: shareUrl })
    } else {
      await navigator.clipboard.writeText(shareText + '\n' + shareUrl)
      alert('Link kopiran! Zalijepi ga u Instagram story ili poruku 📲')
    }
  }

  return (
    <div className="animate-scale-in bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-6 sm:p-8 max-w-md w-full border border-warm-100">
      {/* Header */}
      <div className="text-center mb-6">
        <p className="text-warm-600 font-medium mb-2">Ti si...</p>
        <div className="text-6xl mb-3">{result.emoji}</div>
        <h2 className="text-3xl sm:text-4xl font-bold text-warm-700">
          {result.name}
        </h2>
      </div>

      {/* Description */}
      <p className="text-warm-700/90 leading-relaxed mb-5">
        {result.description}
      </p>

      {/* Fun Fact */}
      <div className="bg-warm-50 rounded-2xl p-4 mb-5">
        <p className="text-sm font-semibold text-warm-600 mb-1">😄 Fun fact</p>
        <p className="text-warm-700 text-sm">{result.funFact}</p>
      </div>

      {/* Tip for 72h */}
      <div className="bg-amber-50 rounded-2xl p-4 mb-5">
        <p className="text-sm font-semibold text-amber-700 mb-1">💡 Savjet za 72 sata</p>
        <p className="text-amber-800 text-sm">{result.tip}</p>
      </div>

      {/* Compatibility */}
      <div className="bg-rose-50 rounded-2xl p-4 mb-6">
        <p className="text-sm font-semibold text-rose-600 mb-1">🤝 Najbolje surađuješ s</p>
        <p className="text-rose-700 text-sm">
          <span className="font-semibold">{compatible.emoji} {compatible.name}</span> – zajedno ste nepobjdivi tim!
        </p>
      </div>

      {/* Share buttons */}
      <div className="mb-6">
        <p className="text-sm font-semibold text-warm-600 mb-3 text-center">Podijeli rezultat 📲</p>
        <div className="flex gap-3">
          <button
            onClick={shareWhatsApp}
            className="flex-1 py-3 px-4 bg-green-500 text-white font-semibold rounded-xl hover:bg-green-600 active:bg-green-700 transition-colors flex items-center justify-center gap-2"
          >
            <span>WhatsApp</span>
          </button>
          <button
            onClick={shareInstagram}
            className="flex-1 py-3 px-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-pink-600 active:from-purple-700 active:to-pink-700 transition-colors flex items-center justify-center gap-2"
          >
            <span>Instagram</span>
          </button>
        </div>
      </div>

      {/* Restart */}
      <button
        onClick={onRestart}
        className="w-full px-6 py-4 bg-warm-500 text-white text-lg font-semibold rounded-2xl hover:bg-warm-600 active:bg-warm-700 transition-colors shadow-lg shadow-warm-500/25"
      >
        Ponovi kviz
      </button>
    </div>
  )
}
