# Adivina-un-Numero-Secreto (Pre-Alpha)
Guess the number game in Spanish.

This prototype is currently in active development. All code and mechanics are subject to change.

# Project Vision
"Adivina el Número Secreto" solves a fundamental human need: the joy of simple, satisfying games. Where modern games overwhelm with complexity, this project strips entertainment down to its purest form - a clean, Spanish-language guessing challenge.

# The Problem
1. **Overdesigned Games**: Most browser games require tutorials and accounts
2. **Language Gaps**: Few coding tutorials feature Spanish implementations
3. **Time Investment**: Players want quick, rewarding experiences

# The Solution
A zero-install game that delivers:
- Instant play through browser alerts
- Clean Spanish interface ("mayor"/"menor" hints)
- 3-attempt tension in under 60 seconds

## Technical Implementation
### Core Mechanics
| Component         | Functionality                                |
|-------------------|---------------------------------------------|
| Number Generator  | `Math.floor(Math.random() * 10) + 1`        |
| Input Validation  | Rejects non-numbers/out-of-range guesses    |
| Hint System       | Dynamic "higher/lower" responses in Spanish |
| Attempt Counter   | Smart "intento"/"intentos" pluralization    |

### Current Limitations
⚠️ **Pre-Alpha Notes**:
- No GUI (uses basic browser prompts)
- Fixed difficulty (1-10 range, 3 tries)
- No score saving

## Future Roadmap
| Version  | Goals                                      |
|----------|-------------------------------------------|
| Alpha    | Activate unused HTML/CSS visuals          |
| Beta     | Add adjustable difficulty settings        |
| 1.0      | Implement localStorage for high scores    |

---

## How To Play
1. Open `index.html`
2. Read the welcome alert
3. Guess numbers when prompted:

4. Receive Spanish hints ("mayor" = higher)
5. Win or lose in ≤3 attempts!

**Win Message**:  
"¡Correcto! El número era 7. Lo lograste en 2 intentos."

**Lose Message**:  
"¡Agotaste tus 3 intentos! El número era 9."

---

## Project Philosophy
- **Minimalist**: Zero dependencies, pure JavaScript
- **Educational**: Perfect for Spanish-speaking coders
- **Expandable**: Designed for easy modification

*END OF README.md*
