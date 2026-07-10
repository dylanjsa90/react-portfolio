import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Navbar from './Navbar'

const props = { name: 'Test Name', navLinks: ['about', 'projects', 'contact'] }

describe('Navbar mobile menu', () => {
  it('starts closed', () => {
    render(<Navbar {...props} />)
    const button = screen.getByRole('button', { name: /open menu/i })
    expect(button).toHaveAttribute('aria-expanded', 'false')
    expect(document.getElementById('mobile-menu')).toHaveClass('hidden')
  })

  it('opens and closes on hamburger click', async () => {
    const user = userEvent.setup()
    render(<Navbar {...props} />)

    await user.click(screen.getByRole('button', { name: /open menu/i }))
    const button = screen.getByRole('button', { name: /close menu/i })
    expect(button).toHaveAttribute('aria-expanded', 'true')
    expect(document.getElementById('mobile-menu')).not.toHaveClass('hidden')

    await user.click(button)
    expect(screen.getByRole('button', { name: /open menu/i })).toHaveAttribute(
      'aria-expanded',
      'false'
    )
    expect(document.getElementById('mobile-menu')).toHaveClass('hidden')
  })

  it('closes when a mobile link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar {...props} />)

    await user.click(screen.getByRole('button', { name: /open menu/i }))
    const mobileMenu = document.getElementById('mobile-menu')
    await user.click(mobileMenu.querySelector('a[href="#about"]'))

    expect(screen.getByRole('button', { name: /open menu/i })).toHaveAttribute(
      'aria-expanded',
      'false'
    )
    expect(mobileMenu).toHaveClass('hidden')
  })
})
