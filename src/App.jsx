import { useState } from 'react'
import Home from './pages/Home'
import MovieDetail from './pages/MovieDetail'
import MyCircle from './pages/MyCircle'
import Search from './pages/Search'
import Profile from './pages/Profile'
import BottomNav from './components/feature/BottomNav'
import DesktopHint from './components/feature/DesktopHint'

// Tabs that show the bottom nav. Detail views (e.g. MovieDetail) are full-screen.
const TAB_ROUTES = ['home', 'search', 'my-circle', 'profile']

export default function App() {
  const [route, setRoute] = useState({ name: 'home' })

  const openMovie = (movieId) => setRoute({ name: 'detail', movieId })
  const goTab = (tab) => setRoute({ name: tab })

  const showNav = TAB_ROUTES.includes(route.name)

  return (
    <div className="flex min-h-[100dvh] justify-center bg-black lg:items-center lg:py-6">
      {/* Desktop only (≥1000px): phone bezel — a thick black "case" around the frame.
          On mobile the wrapper takes the full viewport width so the inner frame
          resolves `w-full` correctly (without this it falls back to max-w-mobile
          and overflows real-phone viewports < 470px). */}
      <div className="relative w-full max-w-mobile lg:w-auto lg:max-w-none lg:rounded-[48px] lg:bg-black lg:p-3 lg:shadow-[0_30px_80px_rgba(0,0,0,0.6),0_0_0_2px_rgba(255,255,255,0.04)_inset]">
        {/* Mobile frame:
            - Below 1000px: full viewport width (100dvh handles iOS Safari chrome).
            - At ≥1000px: phone frame inside the bezel, height capped at 850px but shrinks to fit
              short desktop viewports (so the device never gets clipped).
              Math: outer py-6 (48px) + bezel p-3 (24px) = 72px of chrome to subtract from 100dvh.
            `relative` anchors BottomSheet + BottomNav inside the frame.
            Scroll happens inside `.scroll-area`; the nav floats absolutely on top with a glass effect. */}
        <div className="relative h-[100dvh] w-full overflow-hidden bg-surface-elevated shadow-2xl lg:h-[min(850px,calc(100dvh-72px))] lg:w-[470px] lg:rounded-[36px]">
          <div className="no-scrollbar h-full overflow-y-auto">
            {route.name === 'home' && (
              <Home onOpenMovie={openMovie} onOpenMyCircle={() => goTab('my-circle')} />
            )}
            {route.name === 'search' && <Search onOpenMovie={openMovie} />}
            {route.name === 'my-circle' && (
              <MyCircle onBack={() => goTab('home')} onOpenMovie={openMovie} />
            )}
            {route.name === 'profile' && <Profile />}
            {route.name === 'detail' && (
              <MovieDetail movieId={route.movieId} onBack={() => goTab('home')} />
            )}
          </div>

          {showNav && <BottomNav activeTab={route.name} onTabChange={goTab} />}

          <DesktopHint />
        </div>
      </div>
    </div>
  )
}
