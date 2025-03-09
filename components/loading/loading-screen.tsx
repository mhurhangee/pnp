"use client"

import { useLoadingContext } from "@/components/loading/loading-context"
import { motion, AnimatePresence } from "framer-motion"
import type { ReactNode } from "react"

interface LoadingScreenProps {
  children: ReactNode
  loadingComponent?: ReactNode
  transitionDuration?: number
}

export function LoadingScreen({ children, loadingComponent, transitionDuration = 0.5 }: LoadingScreenProps) {
  const { isLoading } = useLoadingContext()

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: transitionDuration }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background"
          >
            {loadingComponent || (
              <div className="text-center">
                <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                <p className="text-lg font-medium">Loading...</p>
              </div>
            )}
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: transitionDuration }}
            className="w-full"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}