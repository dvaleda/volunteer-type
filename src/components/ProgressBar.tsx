interface Props {
  current: number
  total: number
}

export function ProgressBar({ current, total }: Props) {
  const percent = (current / total) * 100
  return (
    <div className="mb-6">
      <div className="flex justify-between text-sm text-warm-700 mb-2 font-medium">
        <span>Pitanje {current} od {total}</span>
      </div>
      <div className="h-2.5 bg-warm-100 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-warm-400 to-warm-500 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  )
}
