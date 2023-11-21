import { useEffect } from 'react'
import { ELEMENT_IDS } from '@/lib/constants'

export function useMobileMenu() {
  useEffect(() => {
    function handleActiveClass(event: MouseEvent) {
      const toggleElements = [ELEMENT_IDS.toggleButtonId, ELEMENT_IDS.mobileMenuId, ELEMENT_IDS.bgBlurredId]

      if (event.target instanceof HTMLElement) {
        const activeClass = 'active'

        if (event.target.id === ELEMENT_IDS.toggleButtonId) {
          document.body?.classList.toggle(activeClass)
          toggleElements.forEach(element => document.getElementById(element)?.classList.toggle(activeClass))
        } else if (event.target.id === ELEMENT_IDS.bgBlurredId || event.target.tagName === 'A') {
          document.body?.classList.remove(activeClass)
          toggleElements.forEach(element => document.getElementById(element)?.classList.remove(activeClass))
        }
      }
    }

    document.addEventListener('click', handleActiveClass)

    return () => document.removeEventListener('click', handleActiveClass)
  }, [])
}
