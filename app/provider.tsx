import { useEffect, useState } from 'react'
import posthog from 'posthog-js'
import { PostHogProvider } from '@posthog/react'

export function PHProvider({ children }: { children: React.ReactNode }) {
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    // Only initialize on the client side after hydration
    if (typeof window !== 'undefined') {
      const apiKey = import.meta.env.VITE_PUBLIC_POSTHOG_KEY
      const apiHost = import.meta.env.VITE_PUBLIC_POSTHOG_HOST || 'https://us.i.posthog.com'

      if (apiKey) {
        posthog.init(apiKey, {
          api_host: apiHost,
          person_profiles: 'identified_only',
          capture_pageview: false, // Disable automatic pageview capture, we'll capture manually
        })
      }
      setHydrated(true)
    }
  }, [])

  // Don't wrap with PostHogProvider until hydrated to avoid SSR issues
  if (!hydrated) return <>{children}</>

  return <PostHogProvider client={posthog}>{children}</PostHogProvider>
}

