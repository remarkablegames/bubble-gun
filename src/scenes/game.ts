import { addEnemy, addPlayer } from '../gameobjects'
import { Scene } from '../types'

scene(Scene.game, () => {
  addPlayer()

  onClick(() => addKaboom(mousePos()))

  add([text('Press arrow keys', { width: width() / 2 }), pos(12, 12)])

  for (let i = 0; i < 3; i++) {
    const x = rand(0, width())
    const y = rand(0, height())
    addEnemy(x, y)
  }
})
