import { getPlayer } from '../gameobjects'
import { gameState } from '../helpers'

interface Reward {
  percentage: number
  setPercentage(percentage?: number): void
  readonly text: string
  action(): void
}

const rewards: Reward[] = [
  // heal hp
  {
    percentage: 0,
    setPercentage(percentage = randi(10, 30)) {
      this.percentage = percentage
    },
    get text() {
      return `Heal ${this.percentage.toString()}% HP`
    },
    action() {
      const player = getPlayer()

      if (!player) {
        return
      }

      const maxHP = player.maxHP()

      if (maxHP) {
        player.heal(maxHP * (this.percentage / 100))
      }
    },
  },

  // max hp
  {
    percentage: 0,
    setPercentage(percentage = randi(10, 30)) {
      this.percentage = percentage
    },
    get text() {
      return `Max HP +${this.percentage.toString()}%`
    },
    action() {
      const player = getPlayer()

      if (!player) {
        return
      }

      const maxHP = player.maxHP()

      if (maxHP) {
        const hp = maxHP * (this.percentage / 100)
        player.setMaxHP(maxHP + hp)
        player.heal(hp)
      }
    },
  },

  // player speed
  {
    percentage: 0,
    setPercentage(percentage = randi(5, 20)) {
      this.percentage = percentage
    },
    get text() {
      return `Player Speed +${this.percentage.toString()}%`
    },
    action() {
      const player = getPlayer()

      if (!player) {
        return
      }

      player.speed *= (this.percentage + 100) / 100
    },
  },

  // fire rate
  {
    percentage: 0,
    setPercentage(percentage = randi(5, 20)) {
      this.percentage = percentage
    },
    get text() {
      return `Fire Rate +${this.percentage.toString()}%`
    },
    action() {
      const player = getPlayer()

      if (!player) {
        return
      }

      player.attack.delay *= (100 - this.percentage) / 100
    },
  },

  // bubble damage
  {
    percentage: 0,
    setPercentage(percentage = randi(5, 20)) {
      this.percentage = percentage
    },
    get text() {
      return `Bubble Damage +${this.percentage.toString()}%`
    },
    action() {
      gameState.player.bubble.damage *= (100 + this.percentage) / 100
    },
  },

  // bubble size
  {
    percentage: 0,
    setPercentage(percentage = randi(5, 20)) {
      this.percentage = percentage
    },
    get text() {
      return `Bubble Size +${this.percentage.toString()}%`
    },
    action() {
      gameState.player.bubble.size *= (100 + this.percentage) / 100
    },
  },

  // bubble stun
  {
    percentage: 0,
    setPercentage(percentage = randi(10, 25)) {
      this.percentage = percentage
    },
    get text() {
      return `Bubble Stun +${this.percentage.toString()}%`
    },
    action() {
      gameState.player.bubble.stun *= (100 + this.percentage) / 100
    },
  },
]

export function getRewards(total = 2) {
  const result = []
  const copy = rewards.slice()

  for (let i = 0; i < total; i++) {
    result.push(copy.splice(randi(copy.length), 1)[0])
  }

  return result
}
