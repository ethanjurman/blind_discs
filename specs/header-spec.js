const header = require('../elements/app-header')

describe('header', () => {
  it('should have the title', () => {
    const page = header({color: 'blue'})
    expect(page.outerHTML).toMatch('blind_discs')
  })
  it('should inject the color in the style', () => {
    const page = header({color: 'blue'})
    expect(page.style.color).toBe('blue')
  })
})
