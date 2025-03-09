"use client"

import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from "react"

interface LoadingContextType {
  isLoading: boolean
  addLoadingItem: (id: string) => void
  removeLoadingItem: (id: string) => void
  startLoading: (id: string) => void
  stopLoading: (id: string) => void
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined)

export function useLoadingContext() {
  const context = useContext(LoadingContext)
  if (context === undefined) {
    throw new Error("useLoadingContext must be used within a LoadingProvider")
  }
  return context
}

// Custom hook for API calls
export function useLoadingCall<T>(asyncFn: () => Promise<T>, options: { id?: string; autoExecute?: boolean } = {}) {
  const { addLoadingItem, removeLoadingItem } = useLoadingContext()
  const [data, setData] = useState<T | null>(null)
  const [error, setError] = useState<Error | null>(null)

  const id = options.id || `api-call-${Math.random().toString(36).substring(2, 9)}`

  const execute = useCallback(async () => {
    try {
      addLoadingItem(id)
      setError(null)
      const result = await asyncFn()
      setData(result)
      return result
    } catch (err) {
      setError(err instanceof Error ? err : new Error(String(err)))
      throw err
    } finally {
      removeLoadingItem(id)
    }
  }, [asyncFn, addLoadingItem, removeLoadingItem, id])

  useEffect(() => {
    if (options.autoExecute) {
      execute()
    }
  }, [execute, options.autoExecute])

  return { execute, data, error, isLoading: false }
}

export function LoadingProvider({ children }: { children: ReactNode }) {
  const [loadingItems, setLoadingItems] = useState<Set<string>>(new Set())

  const addLoadingItem = useCallback((id: string) => {
    setLoadingItems((prev) => {
      const newSet = new Set(prev)
      newSet.add(id)
      return newSet
    })
  }, [])

  const removeLoadingItem = useCallback((id: string) => {
    setLoadingItems((prev) => {
      const newSet = new Set(prev)
      newSet.delete(id)
      return newSet
    })
  }, [])

  // Alias functions for more semantic API usage
  const startLoading = useCallback(
    (id: string) => {
      addLoadingItem(id)
    },
    [addLoadingItem],
  )

  const stopLoading = useCallback(
    (id: string) => {
      removeLoadingItem(id)
    },
    [removeLoadingItem],
  )

  const isLoading = loadingItems.size > 0

  return (
    <LoadingContext.Provider
      value={{
        isLoading,
        addLoadingItem,
        removeLoadingItem,
        startLoading,
        stopLoading,
      }}
    >
      {children}
    </LoadingContext.Provider>
  )
}