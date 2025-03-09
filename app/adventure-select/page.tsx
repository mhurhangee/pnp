import { AdventureBrowser } from '@/components/adventure/browser'
import { LoadingScreen } from '@/components/loading/loading-screen'

export default function AdventureSelectPage() {
  return (
    <LoadingScreen>
      <AdventureBrowser  />
    </LoadingScreen>
  );
}