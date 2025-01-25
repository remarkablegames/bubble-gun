import { Animation, Music, Scene, Sound, Sprite } from '../constants'

scene(Scene.Preload, () => {
  const spritesheets = [
    [Sprite.Bubbie, 'sprites/bubbie.png'],
    [Sprite.Shellie, 'sprites/shellie.png'],
    [Sprite.Spiny, 'sprites/spiny.png'],
  ]

  spritesheets.forEach(([name, src]) => {
    loadSprite(name, src, {
      sliceX: 4,
      anims: {
        [Animation.Idle]: 0,
        [Animation.Move]: 0,
        [Animation.Attack]: 1,
        [Animation.Cooldown]: 2,
        [Animation.Stunned]: 3,
      },
    })
  })

  loadSprite(Sprite.Pokey, 'sprites/pokey.png', {
    sliceX: 5,
    anims: {
      [Animation.Idle]: 3,
      [Animation.Move]: 0,
      [Animation.Attack]: {
        from: 1,
        to: 2,
      },
      [Animation.Cooldown]: 0,
      [Animation.Stunned]: 4,
    },
  })

  loadSprite(Sprite.Gooba, 'sprites/gooba.png', {
    sliceX: 6,
    anims: {
      [Animation.Idle]: 0,
      [Animation.Move]: 5,
      [Animation.Attack]: {
        from: 1,
        to: 2,
      },
      [Animation.Cooldown]: 3,
      [Animation.Stunned]: 4,
    },
  })

  const sprites = [
    [Sprite.Bean, 'sprites/bean.png'],
    [Sprite.BubbleGood, 'sprites/bubble.png'],
    [Sprite.Projectile, 'sprites/projectile.png'],
  ]

  sprites.forEach(([name, src]) => {
    loadSprite(name, src, {
      anims: {
        [Animation.Idle]: 0,
        [Animation.Move]: 0,
        [Animation.Attack]: 0,
        [Animation.Cooldown]: 0,
        [Animation.Stunned]: 0,
      },
    })
  })

  const sounds = [
    [Sound.Explode, 'sounds/explode.mp3'],
    [Sound.Hit, 'sounds/hit.mp3'],
    [Sound.Pop, 'sounds/pop.mp3'],
    [Sound.Shoot, 'sounds/shoot.mp3'],
    [Sound.Splash, 'sounds/splash.mp3'],
    [Sound.Whoosh, 'sounds/whoosh.mp3'],
  ]

  sounds.forEach(([name, src]) => {
    loadSound(name, src)
  })

  const music = [[Music.Background, 'music/background.mp3']]

  music.forEach(([name, src]) => {
    loadMusic(name, src)
  })

  go(Scene.Title)
})
