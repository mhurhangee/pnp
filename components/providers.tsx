import { AdventureProvider } from "@/components/adventure/context";
import { LoadingProvider } from "@/components/loading/context";
import { CRTEffects } from "@/components/design/crt-effects";
import { CentredLayout } from "@/components/design/centred-layout";

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <LoadingProvider>
            <CRTEffects />
            <AdventureProvider>
                <main>
                    <CentredLayout>
                        {children}
                    </CentredLayout>
                </main>
            </AdventureProvider>
        </LoadingProvider>
    );
}