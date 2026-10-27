type Quadrant = 'A' | 'B' | 'C' | 'D'

const cells = [
  { quadrant: 'A', x: 2, y: 2 },
  { quadrant: 'C', x: 13, y: 2 },
  { quadrant: 'B', x: 2, y: 13 },
  { quadrant: 'D', x: 13, y: 13 },
] as const

export default function QuadrantTracker({ quadrant }: { quadrant: Quadrant }) {
  return (
    <svg className="quadrant-tracker" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      {cells.map(cell => (
        <rect key={cell.quadrant} x={cell.x} y={cell.y} width="9" height="9" rx="1"
          fill={cell.quadrant === quadrant ? '#1e40af' : '#e2e8f0'} />
      ))}
    </svg>
  )
}
