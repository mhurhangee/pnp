import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { useAdventure } from '@/components/adventure/context';

export function Quit() {
    const router = useRouter();
    const { setSelectedAdventure, setGameHistory, setSelectedProtagonist } = useAdventure()
    return (
        <div className="fixed top-4 right-4">
            <AlertDialog>
                <AlertDialogTrigger asChild>
                    <Button>x</Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                        <AlertDialogDescription>
                            You&#39;ll lose all progress on this adventure and this cannot be undone.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick={() => {
                            // Reset selected adventure when component mounts
                            setSelectedAdventure(null);
                            setGameHistory([]);
                            setSelectedProtagonist(null);
                            router.push('/adventure');
                        }}>
                            Quit
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    )
}