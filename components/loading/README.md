# Loading System

A comprehensive, reusable loading system for Next.js applications that handles both UI rendering and API calls with smooth Framer Motion transitions.

## Features

- 🔄 Global loading state management
- 🎨 Smooth animations with Framer Motion
- 🧩 Reusable across pages
- 🔌 Easy API integration
- 🎛️ Manual and automatic loading control
- 🎭 Customizable loading screens

## Setup

1. Add the `LoadingProvider` to your root layout:

```tsx
// app/layout.tsx
import { LoadingProvider } from "@/context/loading-context"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <LoadingProvider>
          {children}
        </LoadingProvider>
      </body>
    </html>
  )
}
```

## Basic Usage

Wrap your page content with the `LoadingScreen` component:

```tsx
// app/page.tsx
"use client"
import { LoadingScreen } from "@/components/loading-screen"
import { PixelatedEmoji } from "@/components/pixelated-emoji"

export default function Home() {
  return (
    <LoadingScreen>
      <main className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">My Page</h1>
        
        {/* PixelatedEmoji components automatically register with the loading system */}
        <PixelatedEmoji emoji="🚀" size={64} pixelSize={4} />
        
        {/* Other content */}
      </main>
    </LoadingScreen>
  )
}
```

The `LoadingScreen` will automatically show a loading state until all registered loading items (like PixelatedEmoji components) are ready.

## API Call Integration

Use the `useLoadingCall` hook to integrate API calls with the loading system:

```tsx
"use client"
import { LoadingScreen } from "@/components/loading-screen"
import { useLoadingCall } from "@/context/loading-context"

// Example API function
async function fetchUserData(userId: string) {
  const response = await fetch(`/api/users/${userId}`)
  return response.json()
}

export default function UserProfile({ params }: { params: { id: string } }) {
  // This will automatically trigger the loading screen while fetching
  const { data, error } = useLoadingCall(
    () => fetchUserData(params.id),
    { id: `user-${params.id}`, autoExecute: true }
  )
  
  return (
    <LoadingScreen>
      <main className="container mx-auto p-6">
        {error ? (
          <div className="text-red-500">Error loading user: {error.message}</div>
        ) : data ? (
          <div>
            <h1 className="text-3xl font-bold">{data.name}</h1>
            <p>{data.email}</p>
            {/* Other user data */}
          </div>
        ) : null}
      </main>
    </LoadingScreen>
  )
}
```

## Manual Loading Control

You can manually control the loading state:

```tsx
"use client"
import { useLoadingContext } from "@/context/loading-context"
import { LoadingScreen } from "@/components/loading-screen"

export default function DataProcessingPage() {
  const { startLoading, stopLoading } = useLoadingContext()
  
  const handleProcessData = async () => {
    // Start loading
    startLoading("data-processing")
    
    try {
      // Simulate a long process
      await new Promise(resolve => setTimeout(resolve, 3000))
      console.log("Processing complete!")
    } finally {
      // Always stop loading, even if there's an error
      stopLoading("data-processing")
    }
  }
  
  return (
    <LoadingScreen>
      <main className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Data Processing</h1>
        
        <button
          onClick={handleProcessData}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Process Data
        </button>
      </main>
    </LoadingScreen>
  )
}
```

## Custom Loading Screens

Customize the loading screen with your own components:

```tsx
"use client"
import { LoadingScreen } from "@/components/loading-screen"
import { motion } from "framer-motion"

// Custom loading component
const CustomLoader = () => (
  <motion.div 
    className="flex flex-col items-center justify-center"
    initial={{ scale: 0.8, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ 
      duration: 0.5,
      repeat: Infinity,
      repeatType: "reverse"
    }}
  >
    <div className="text-5xl mb-4">🚀</div>
    <p className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
      Loading awesome content...
    </p>
  </motion.div>
)

export default function HomePage() {
  return (
    <LoadingScreen 
      loadingComponent={<CustomLoader />}
      transitionDuration={0.7} // Customize animation duration
    >
      <main className="container mx-auto p-6">
        {/* Page content */}
      </main>
    </LoadingScreen>
  )
}
```

## Multiple Loading Sources

The loading system can handle multiple loading sources simultaneously:

```tsx
"use client"
import { LoadingScreen } from "@/components/loading-screen"
import { useLoadingCall } from "@/context/loading-context"
import { PixelatedEmoji } from "@/components/pixelated-emoji"

// Example API functions
const fetchUserData = () => fetch('/api/user').then(res => res.json())
const fetchProductData = () => fetch('/api/products').then(res => res.json())

export default function DashboardPage() {
  // Multiple API calls, all tracked by the loading system
  const { data: userData } = useLoadingCall(fetchUserData, { 
    id: "user-data", 
    autoExecute: true 
  })
  
  const { data: productData } = useLoadingCall(fetchProductData, { 
    id: "product-data", 
    autoExecute: true 
  })
  
  return (
    <LoadingScreen>
      <main className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
        
        {/* PixelatedEmoji components also register with the loading system */}
        <div className="flex gap-2 mb-4">
          <PixelatedEmoji emoji="👋" size={32} />
          <PixelatedEmoji emoji="🔥" size={32} />
        </div>
        
        {/* User data section */}
        {userData && (
          <div className="mb-6">
            <h2 className="text-xl font-bold">Welcome, {userData.name}</h2>
          </div>
        )}
        
        {/* Product data section */}
        {productData && (
          <div>
            <h2 className="text-xl font-bold mb-2">Products</h2>
            <ul>
              {productData.map(product => (
                <li key={product.id}>{product.name}</li>
              ))}
            </ul>
          </div>
        )}
      </main>
    </LoadingScreen>
  )
}
```

## API Reference

### LoadingProvider

Provides the loading context to your application.

```tsx
<LoadingProvider>
  {children}
</LoadingProvider>
```

### LoadingScreen

Displays a loading screen while content is loading.

```tsx
<LoadingScreen
  loadingComponent={ReactNode} // Optional custom loading component
  transitionDuration={number} // Optional animation duration in seconds (default: 0.5)
>
  {children}
</LoadingScreen>
```

### useLoadingContext

Hook to access the loading context.

```tsx
const { 
  isLoading,        // Boolean indicating if anything is loading
  addLoadingItem,   // Function to add a loading item: (id: string) => void
  removeLoadingItem, // Function to remove a loading item: (id: string) => void
  startLoading,     // Alias for addLoadingItem
  stopLoading       // Alias for removeLoadingItem
} = useLoadingContext()
```

### useLoadingCall

Hook to integrate API calls with the loading system.

```tsx
const { 
  execute, // Function to manually execute the API call
  data,    // The result of the API call
  error    // Any error that occurred
} = useLoadingCall(
  asyncFunction, // The async function to call
  {
    id: string,         // Optional unique ID for this loading item
    autoExecute: boolean // Optional flag to automatically execute the call (default: false)
  }
)
```

## Best Practices

1. **Use Descriptive IDs**: When manually controlling loading states, use descriptive IDs to make debugging easier.
2. **Clean Up Loading Items**: Always remove loading items when components unmount or operations complete.
3. **Handle Errors**: Make sure to stop loading even if an error occurs, typically using try/finally.
4. **Avoid Nesting**: Don't nest multiple `LoadingScreen` components - use a single one at the page level.
5. **Customize Transitions**: Adjust the `transitionDuration` based on your design needs.