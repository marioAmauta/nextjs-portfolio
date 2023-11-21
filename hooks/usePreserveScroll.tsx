import { useRouter } from 'next/router'
import { useEffect, useRef } from 'react'

export function usePreserveScroll() {
  const router = useRouter()

  const scrollPositions = useRef<{ [url: string]: number }>({})
  const isBack = useRef(false)

  useEffect(() => {
    router.beforePopState(() => {
      isBack.current = true
      return true
    })

    function onRouteChangeStart() {
      const { pathname, locale } = router
      const url = `${pathname}${locale === 'es' ? locale : ''}`
      scrollPositions.current[url] = window.scrollY
    }

    function onRouteChangeComplete(url: any) {
      if (isBack.current && scrollPositions.current[url]) {
        window.scroll({
          top: scrollPositions.current[url],
          behavior: 'instant'
        })
      }

      isBack.current = false
    }

    router.events.on('routeChangeStart', onRouteChangeStart)
    router.events.on('routeChangeComplete', onRouteChangeComplete)

    return () => {
      router.events.off('routeChangeStart', onRouteChangeStart)
      router.events.off('routeChangeComplete', onRouteChangeComplete)
    }
  }, [router])
}
