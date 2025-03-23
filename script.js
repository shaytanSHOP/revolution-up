// DOM Elements
const currentYearEl = document.getElementById("currentYear")
const fadeElements = document.querySelectorAll(".fade-element")

// Set current year in footer
currentYearEl.textContent = new Date().getFullYear()

// Scroll reveal animation
function checkFadeElements() {
  const triggerBottom = window.innerHeight * 0.8

  fadeElements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top

    if (elementTop < triggerBottom) {
      element.classList.add("visible")
    }
  })
}

// Check elements on load
window.addEventListener("DOMContentLoaded", () => {
  // Trigger fade animations immediately for above-the-fold content
  setTimeout(() => {
    document.querySelectorAll(".hero .fade-element").forEach((el) => {
      el.classList.add("visible")
    })
  }, 100)

  // Check other elements
  checkFadeElements()
})

// Check elements on scroll
window.addEventListener("scroll", checkFadeElements)

// Canvas animations
function initLogoCanvas() {
  const logoCanvas = document.getElementById("logoCanvas")
  const heroLogoCanvas = document.getElementById("heroLogoCanvas")
  const footerLogoCanvas = document.getElementById("footerLogoCanvas")

  if (logoCanvas) drawLogo(logoCanvas)
  if (heroLogoCanvas) drawLogo(heroLogoCanvas)
  if (footerLogoCanvas) drawLogo(footerLogoCanvas)
}

function drawLogo(canvas) {
  const ctx = canvas.getContext("2d")
  if (!ctx) return

  // Set canvas dimensions based on display size
  const setCanvasDimensions = () => {
    const rect = canvas.getBoundingClientRect()
    canvas.width = rect.width
    canvas.height = rect.height
  }

  setCanvasDimensions()
  window.addEventListener("resize", setCanvasDimensions)

  const width = canvas.width
  const height = canvas.height

  // Create particles
  const particles = []
  const particleCount = Math.min(50, Math.floor((width * height) / 200))

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 3 + 1,
      speedX: (Math.random() - 0.5) * 2,
      speedY: (Math.random() - 0.5) * 2,
      color: `rgba(255, ${Math.floor(Math.random() * 50)}, ${Math.floor(Math.random() * 50)}, ${Math.random() * 0.8 + 0.2})`,
    })
  }

  // Animation function
  function animate() {
    ctx.clearRect(0, 0, width, height)

    // Draw text if it's the hero logo
    if (canvas.id === "heroLogoCanvas") {
      const fontSize = Math.min(width / 10, 30)
      ctx.font = `bold ${fontSize}px Montserrat`
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"

      // Create gradient for text
      const gradient = ctx.createLinearGradient(0, 0, width, 0)
      gradient.addColorStop(0, "#ff3e3e")
      gradient.addColorStop(1, "#ff0000")
      ctx.fillStyle = gradient

      ctx.fillText("REVOLUTION", width / 2, height / 2)
    }

    // Update and draw particles
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i]

      p.x += p.speedX
      p.y += p.speedY

      // Bounce off edges
      if (p.x > width || p.x < 0) p.speedX *= -1
      if (p.y > height || p.y < 0) p.speedY *= -1

      // Draw particle
      ctx.fillStyle = p.color
      ctx.beginPath()
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
      ctx.fill()

      // Connect particles with lines
      for (let j = i; j < particles.length; j++) {
        const p2 = particles[j]
        const dx = p.x - p2.x
        const dy = p.y - p2.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < 50) {
          ctx.beginPath()
          ctx.strokeStyle = `rgba(255, 0, 0, ${0.2 - distance / 250})`
          ctx.lineWidth = 0.5
          ctx.moveTo(p.x, p.y)
          ctx.lineTo(p2.x, p2.y)
          ctx.stroke()
        }
      }
    }

    requestAnimationFrame(animate)
  }

  animate()

  return () => {
    window.removeEventListener("resize", setCanvasDimensions)
  }
}

// Particle background
function initParticleCanvas() {
  const canvas = document.getElementById("particleCanvas")
  if (!canvas) return

  const ctx = canvas.getContext("2d")
  if (!ctx) return

  // Set canvas dimensions
  function setCanvasDimensions() {
    const rect = canvas.getBoundingClientRect()
    canvas.width = rect.width
    canvas.height = rect.height
  }

  setCanvasDimensions()
  window.addEventListener("resize", setCanvasDimensions)

  // Create particles
  const particles = []
  const particleCount = Math.min(100, Math.floor((canvas.width * canvas.height) / 10000))

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 3 + 1,
      speedX: (Math.random() - 0.5) * 1,
      speedY: (Math.random() - 0.5) * 1,
      color: `rgba(255, ${Math.floor(Math.random() * 50)}, ${Math.floor(Math.random() * 50)}, ${Math.random() * 0.5 + 0.2})`,
    })
  }

  // Mouse interaction
  let mouseX = 0
  let mouseY = 0
  const mouseRadius = 100

  canvas.addEventListener("mousemove", (e) => {
    const rect = canvas.getBoundingClientRect()
    mouseX = e.clientX - rect.left
    mouseY = e.clientY - rect.top
  })

  // Animation function
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Update and draw particles
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i]

      // Mouse interaction
      const dx = mouseX - p.x
      const dy = mouseY - p.y
      const distance = Math.sqrt(dx * dx + dy * dy)

      if (distance < mouseRadius) {
        const angle = Math.atan2(dy, dx)
        const force = (mouseRadius - distance) / mouseRadius

        p.x -= Math.cos(angle) * force * 2
        p.y -= Math.sin(angle) * force * 2
      }

      // Update position
      p.x += p.speedX
      p.y += p.speedY

      // Bounce off edges
      if (p.x > canvas.width) p.x = 0
      if (p.x < 0) p.x = canvas.width
      if (p.y > canvas.height) p.y = 0
      if (p.y < 0) p.y = canvas.height

      // Draw particle
      ctx.fillStyle = p.color
      ctx.beginPath()
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
      ctx.fill()

      // Connect particles with lines
      for (let j = i; j < particles.length; j++) {
        const p2 = particles[j]
        const dx = p.x - p2.x
        const dy = p.y - p2.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < 70) {
          ctx.beginPath()
          ctx.strokeStyle = `rgba(255, 0, 0, ${0.1 - distance / 700})`
          ctx.lineWidth = 0.5
          ctx.moveTo(p.x, p.y)
          ctx.lineTo(p2.x, p2.y)
          ctx.stroke()
        }
      }
    }

    requestAnimationFrame(animate)
  }

  animate()

  return () => {
    window.removeEventListener("resize", setCanvasDimensions)
  }
}

// Initialize all canvas animations
window.addEventListener("load", () => {
  initLogoCanvas()
  initParticleCanvas()

  // Make sure all elements are visible after page load
  setTimeout(checkFadeElements, 500)
})

