import { useEffect, useRef, useState } from 'react'

const CELLS = 13
const CELL = 24
const SIZE = CELLS * CELL
const IDLE_LENGTH = 5

export default function SnakeGrid() {
  const canvasRef = useRef(null)
  const [score, setScore] = useState(null) // null = idle, number = playing

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    if (!ctx) return // jsdom in tests has no canvas support
    const dpr = window.devicePixelRatio || 1
    canvas.width = SIZE * dpr
    canvas.height = SIZE * dpr
    ctx.scale(dpr, dpr)

    // tail first, head last
    let snake = [
      { x: 3, y: 6 },
      { x: 4, y: 6 },
      { x: 5, y: 6 },
    ]
    let dir = { x: 1, y: 0 }
    let food = { x: 9, y: 6 }
    let manual = false

    const accent = () =>
      getComputedStyle(document.documentElement).getPropertyValue('--accent').trim()

    const draw = () => {
      ctx.clearRect(0, 0, SIZE, SIZE)
      ctx.fillStyle = accent()
      ctx.fillRect(food.x * CELL + 9, food.y * CELL + 9, 6, 6)
      snake.forEach((seg, i) => {
        ctx.globalAlpha = 0.3 + 0.7 * ((i + 1) / snake.length)
        ctx.fillRect(seg.x * CELL + 4, seg.y * CELL + 4, CELL - 8, CELL - 8)
      })
      ctx.globalAlpha = 1
    }

    const onSnake = (x, y) => snake.some(seg => seg.x === x && seg.y === y)

    const spawnFood = () => {
      do {
        food = { x: Math.floor(Math.random() * CELLS), y: Math.floor(Math.random() * CELLS) }
      } while (onSnake(food.x, food.y))
    }

    const safe = d => {
      const head = snake[snake.length - 1]
      const nx = head.x + d.x
      const ny = head.y + d.y
      return nx >= 0 && nx < CELLS && ny >= 0 && ny < CELLS && !onSnake(nx, ny)
    }

    const reset = () => {
      snake = [
        { x: 3, y: 6 },
        { x: 4, y: 6 },
        { x: 5, y: 6 },
      ]
      dir = { x: 1, y: 0 }
      manual = false
      spawnFood()
      setScore(null)
    }

    const step = () => {
      if (!manual) {
        // steer toward the food, preferring safe moves
        const head = snake[snake.length - 1]
        const candidates = [
          { x: Math.sign(food.x - head.x), y: 0 },
          { x: 0, y: Math.sign(food.y - head.y) },
          dir,
          { x: 1, y: 0 },
          { x: -1, y: 0 },
          { x: 0, y: 1 },
          { x: 0, y: -1 },
        ].filter(d => (d.x || d.y) && !(d.x === -dir.x && d.y === -dir.y))
        dir = candidates.find(safe) ?? dir
      }
      if (!safe(dir)) {
        if (manual) reset()
        else dir = { x: -dir.x, y: -dir.y } // idle snake trapped: reverse out
      }
      const head = snake[snake.length - 1]
      snake.push({ x: head.x + dir.x, y: head.y + dir.y })
      if (snake[snake.length - 1].x === food.x && snake[snake.length - 1].y === food.y) {
        if (manual) setScore(n => n + 1)
        else if (snake.length > IDLE_LENGTH) snake.shift()
        spawnFood()
      } else {
        snake.shift()
      }
      draw()
    }

    const onKeyDown = e => {
      const d = {
        ArrowUp: { x: 0, y: -1 },
        ArrowDown: { x: 0, y: 1 },
        ArrowLeft: { x: -1, y: 0 },
        ArrowRight: { x: 1, y: 0 },
      }[e.key]
      if (!d) return
      e.preventDefault()
      if (!manual) {
        manual = true
        setScore(0)
      }
      if (!(d.x === -dir.x && d.y === -dir.y)) dir = d
    }

    draw()

    const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches
    const small = matchMedia('(max-width: 767px)').matches
    if (reduced || small) {
      // static: still redraw on theme change so the accent colour tracks
      const observer = new MutationObserver(draw)
      observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
      return () => observer.disconnect()
    }

    canvas.addEventListener('keydown', onKeyDown)
    const id = setInterval(step, 130)
    return () => {
      canvas.removeEventListener('keydown', onKeyDown)
      clearInterval(id)
    }
  }, [])

  return (
    <div className="shrink-0">
      <canvas
        ref={canvasRef}
        tabIndex={0}
        aria-label="Snake game. Focus and use the arrow keys to play."
        style={{ width: SIZE, height: SIZE }}
        className="block"
      />
      <p
        suppressHydrationWarning
        className="hidden md:block font-mono text-xs text-slate-400 dark:text-graphite mt-2 text-right"
      >
        {score === null ? '// arrow keys to play' : `// score: ${score}`}
      </p>
    </div>
  )
}
